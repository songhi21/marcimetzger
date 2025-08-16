# Step 1: Use the official public PHP 8.2 image
FROM php:8.2-fpm

# Set the working directory
WORKDIR /var/www/html

# Step 2: Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libpq-dev \
    nginx \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql

# Copy a production-ready PHP-FPM config
COPY --from=php:8.2-fpm /usr/local/etc/php-fpm.d/www.conf.default /usr/local/etc/php-fpm.d/www.conf

# Step 3: Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Step 4: Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Copy only composer files first for caching
COPY composer.json composer.lock ./

# Install PHP dependencies
RUN composer install --no-dev --no-interaction --no-progress --no-scripts --optimize-autoloader

# Now, copy the rest of the application files
COPY . .

# Copy the Nginx configuration file
COPY docker/nginx.conf /etc/nginx/sites-available/default

# Copy and prepare the startup script
COPY docker/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Manually run composer scripts
RUN composer dump-autoload --optimize && \
    php artisan package:discover --ansi

# Build the frontend assets
RUN npm install && npm run build

# Run database migrations
RUN php artisan migrate --force

# Expose port 80 for Nginx
EXPOSE 80

# Use the startup script as the final command
CMD ["start.sh"]
