<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $fillable = ['title', 'delivered_by', 'exam_year', 'profile'];
 
    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }
}
