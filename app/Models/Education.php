<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'educations';
    
    protected $fillable = ['title', 'school', 'start_date', 'end_date', 'profile'];
 
    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }
}
