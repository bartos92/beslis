<?php

use Illuminate\Http\Request;
use App\UserEntry;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('userEntries', 'UserEntryController@index');


Route::post('newUserEntry', 'UserEntryController@create');

Route::post('updateReadUserEntry', 'UserEntryController@read');
Route::post('updateAnswerUserEntry', 'UserEntryController@answer');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
