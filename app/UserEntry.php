<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserEntry extends Model
{
    protected $fillable = ['timeStart', 'timeStop', 'concise', 'answer'];
    public $timestamps = false;
}
