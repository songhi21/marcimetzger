<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
     ->withMiddleware(function (Middleware $middleware) {
        // This is the line you added. Make sure it's inside this function.
        $middleware->trustProxies(at: '*'); 
    }) // <--- NO semicolon here
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
