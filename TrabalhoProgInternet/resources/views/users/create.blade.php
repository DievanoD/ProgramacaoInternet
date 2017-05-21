@extends('layout')

@section('content')

<div class="panel panel-default">
    <div class="panel-heading">
	{{Form::open(['url'=>'users','method'=>'POST'])}}
		<div class="row">
			<div class="col-md-4">
				{{Form::label('name', 'Nome:')}}
				{{Form::text('name', null, ['placeholder'=>'Insira um nome'])}}
			</div>
		
			<div class="col-md-4">
				{{Form::label('email', 'E-mail:')}}
				{{Form::text('email', null, ['placeholder'=>'Insira um e-mail'])}}
			</div>

			<div class="col-md-4">
				{{Form::label('login', 'Login:')}}
				{{Form::text('login', null, ['placeholder'=>'Login'])}}
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				{{Form::label('password', 'Senha:')}}
				{{Form::text('password', null, ['placeholder'=>'Senha'])}}
			</div>

			<div class="col-md-4">
				{{Form::label('type', 'Tipo:')}}
				{{Form::text('type', null, ['placeholder'=>'Tipo do Usuário'])}}
			</div>

			<div class="col-md-4">
				{{Form::label('year', 'Ano:')}}
				{{Form::text('year', null, ['placeholder'=>'Ano'])}}
			</div>
		</div>
	</div>
</div>
		<a class="btn btn-primary" href="/users" role="button">Voltar</a>
		{{Form::submit('Salvar', array('class' => 'btn btn-success')) }}

	{{Form::close()}}

@endsection
