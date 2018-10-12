<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\UserEntry;

class UserEntryController extends Controller
{
    public function index()
    {
        return UserEntry::all();
    }

    public function create(Request $request)
    {
        $concise = $request->get('concise');

        return UserEntry::create(['concise' => $concise, 'timeStart' => new \DateTime()]);
    }

    public function read(Request $request)
    {
        $id = $request->get('id');

        $userEntry = UserEntry::find($id);
        $userEntry->timeStop = new \DateTime();

        $userEntry->save();

        return new JsonResponse('Great Success');
    }

    public function answer(Request $request)
    {
        $id = $request->get('id');

        $userEntry = UserEntry::find($id);
        $userEntry->answer = $request->get('answer');

        $userEntry->save();

        return new JsonResponse('Great Success');
    }
}
