#!/bin/sh

# Set permissions for Laravel's storage and cache
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Start the PHP-FPM process in the background
php-fpm &

# Start the Nginx process in the foreground
# This will keep the container running
nginx -g "daemon off;"
```4.  **Save the `start.sh` file.**
