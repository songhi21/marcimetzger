# Step 1: Use the official public PHP 8.2 image (This is the corrected line)
FROM php:8.2-fpm

# Set the working directory
WORKDIR /var/www/html

# Step 2: Install system dependencies (like git, zip) and PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Step 3: Install Composer (the PHP package manager)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Step 4: Install Node.js and npm (for your React frontend)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Copy composer files and install your PHP dependencies
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --no-progress --optimize-autoloader

# Copy the rest of your application files
COPY . .

# Set the correct permissions for Laravel's storage and cache folders
RUN chown -R www-data:www-data storage bootstrap/cache

# Build your React frontend assets with npm
RUN npm install && npm run build

# Tell Render which port your application will listen on
EXPOSE 8000

# The final command to start your Laravel web server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
