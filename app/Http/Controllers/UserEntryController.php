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

    public function create()
    {
        $concise = !UserEntry::orderBy('id', 'desc')->first()->concise;

        return UserEntry::create(['concise' => $concise, 'timeStart' => new \DateTime()]);
    }

    public function read(Request $request)
    {
        $id = $request->get('id');

        $userEntry = UserEntry::find($id);
        $timeStart = new \DateTime($userEntry->timeStart);

        $diff = (new \DateTime())->getTimeStamp() - $timeStart->getTimeStamp() ;
        if ($diff > 3600 || !is_null($userEntry->timeStop)) return new JsonResponse('Expired session', 500);

        $userEntry->timeStop = new \DateTime();
        $userEntry->save();

        return new JsonResponse('Great Success');
    }

    public function answer(Request $request)
    {
        $id = $request->get('id');

        $userEntry = UserEntry::find($id);

        $diff = (new \DateTime())->getTimeStamp() - (new \DateTime($userEntry->timeStart))->getTimeStamp() ;
        if ($diff > 3600 || !is_null($userEntry->answer)) return new JsonResponse('Expired session', 500);

        $userEntry->answer = $request->get('answer');
        $userEntry->save();

        return new JsonResponse('Great Success');
    }
}
