# Step 1: Use the official public PHP 8.2 image
FROM php:8.2-fpm

# Set the working directory
WORKDIR /var/www/html

# Step 2: Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql

# Step 3: Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Step 4: Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# --- OPTIMIZATION & FIX STARTS HERE ---

# 1. Copy only composer files first
COPY composer.json composer.lock ./

# 2. Install PHP dependencies. This step is cached if composer files don't change.
#    --no-scripts prevents package:discover from running too early.
RUN composer install --no-dev --no-interaction --no-progress --no-scripts --optimize-autoloader

# 3. Now, copy the rest of the application files (including the artisan script)
COPY . .

# 4. Manually run the discover script now that the files are present
RUN composer dump-autoload --optimize && \
    php artisan package:discover --ansi

# --- END OF FIX ---

# Set the correct permissions for Laravel
RUN chown -R www-data:www-data storage bootstrap/cache

# Build the frontend assets with npm
RUN npm install && npm run build
RUN php artisan migrate --force

# Expose the port Laravel will run on
EXPOSE 8000

# Set the final start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
