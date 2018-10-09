<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\UserEntry;

class UserEntryController extends Controller
{
    public function index()
    {
        return UserEntry::all();
    }

    public function store(Request $request)
    {
        return UserEntry::create($request->all());
    }
}
