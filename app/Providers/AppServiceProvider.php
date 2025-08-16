<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Pail\PailServiceProvider; 

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
           if ($this->app->isLocal()) {
            $this->app->register(PailServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
