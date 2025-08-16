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
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql

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

# Manually run composer scripts
RUN composer dump-autoload --optimize && \
    php artisan package:discover --ansi

# Set the correct permissions
RUN chown -R www-data:www-data storage bootstrap/cache

# Build the frontend assets
RUN npm install && npm run build

# Run database migrations
RUN php artisan migrate --force

# Expose the port Laravel will run on
EXPOSE 8000

# Set the final start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
