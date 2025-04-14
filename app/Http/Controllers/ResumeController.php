<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use Inertia\Inertia; 

class ResumeController extends Controller
{
    public function index() { 
        return Inertia::render('Resume');
    }

    public function store(Request $request) {

        $profile = Profile::create($request->validate([
            "fullname" => ['required'],
            "email" => ['required'],
            "phone" => ['required'],
            "country" => ['required'],
            "city" => ['required'],
            'professionnal_objective' => ['required'],
        ])); 

        // Add Experiences
        foreach($request->experiences as $experience) {
            $profile->experiences()->create([
                'company_name' => $experience['company_name'],
                'position' => $experience['position'],
                'mission' => $experience['mission'],
                'start_date' => \Carbon\Carbon::parse($experience['start_date'])->format('Y-m-d'),
                'end_date' => \Carbon\Carbon::parse($experience['end_date'])->format('Y-m-d'),
            ]);
        }
        
        // Add Education
        foreach($request->educations as $education) {
            $profile->educations()->create([
                'title' => $education['title'],
                'school' => $education['school'],
                'start_date' => \Carbon\Carbon::parse($education['start_date'])->format('Y-m-d'), 
            ]);
        }

        // Add Certification
        foreach($request->certifications as $certification) {
            $profile->certifications()->create([
                'title' => $certification['title'],
                'delivered_by' => $certification['delivered_by'],
                'exam_year' => \Carbon\Carbon::parse($certification['exam_year'])->format('Y-m-d'), 
            ]);
        }

        return to_route('resume');
    }
}
