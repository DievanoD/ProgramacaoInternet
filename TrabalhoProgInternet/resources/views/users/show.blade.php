@extends('layout')

<style type="text/css">
	.link-show{
		color: #331189;
		cursor: pointer;
	}

</style>

@section('content')
	<div class="panel panel-default">
        <div class="panel-heading">
			<h1>{{$user->name}}</h1>

			<p>{{$user->email}}</p>
			<p>{{$user->password}}</p>
			<p>{{$user->login}}</p>
			<p>{{$user->type}}</p>
			<p>{{$user->year}}</p>

			<!-- EXCLUIR USUÁRIOS -->
			<!--{{Form::open(['url'=>'users/'.$user->id,'method'=>'delete'])}}
				{{Form::hidden('user_id', $user->id)}}

				<div class="form-group">
				        {{ Form::submit('Excluir Usuário', array('class' => 'btn btn-danger')) }}
				</div>

			{{Form::close()}}-->
			<!-- //////////////// -->

		</div>
	</div>

@endsection