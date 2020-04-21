@extends('layouts.app')

@section('content')
<div class="container">
    <div class="jumbotron" id="jumbotron_index">
        <div style="text-align: center">
            <h1>Garage</h1>
            <p>CRUD Laravel and Vue</p>
        </div>
        <!-- <div class="form-group">
            <input type="text" class="form-control" name="" id="">
        </div> -->


        <router-view></router-view>
    </div>
</div>
@endsection