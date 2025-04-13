<?php

use App\Http\Controllers\ResumeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/resume', [ResumeController::class, 'index'])->name('resume');
Route::post('/new/resume', [ResumeController::class, 'store']);