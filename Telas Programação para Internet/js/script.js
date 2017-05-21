$(document).ready(function()
{
  $(".data").mask("99/99/9999");
  $("#cpf").mask("999.999.999-99");
  $("#telefone").mask("(99) 9999-9999");
  $("#celular").mask("(99) 9 9999-9999");
});

function ResetFormValues()
{
       $(":text").each(function () {
           $(this).val("");
       });

       $(":radio").each(function () {
           $(this).prop({ checked: false })
       });

       $(":date").each(function () {
           $(this).val("");
       });

       $("select").each(function () {
           $(this).val("");
       });
}

function ValidarCampoDeSenha()
{
	if(document.FormCadastroUsuario.confirmaSenha.value != document.FormCadastroUsuario.senha.value)
	{
		document.getElementById("alerta").style.color = "red";
		document.getElementById("alerta").style.fontFamily = "times new roman";
		document.getElementById("alerta").style.fontStyle = "italic";
		document.getElementById("alerta").innerHTML = "As senhas não conferem!";
		return false;
	}
}

function carregamentoInicial()
{
  var primeiroCarregamento = true;

  if (primeiroCarregamento)
  {
    document.getElementById("ads").style.display = "none";
	document.getElementById("cienciaComp").style.display = "none";
    document.getElementById("principal").style.display = "block";
	document.getElementById("secundario").style.display = "block";
    primeiroCarregamento = false;
  }

  else
  {
    if (document.getElementById("ads").style.display == "none")
    {
      document.getElementById("ads").style.display = "block";
      document.getElementById("principal").style.display = "block";
	  document.getElementById("secundario").style.display = "block";
	  document.getElementById("cienciaComp").style.display = "none";
    }

    else
    {
      //document.getElementById("cadastroAcesso").style.display = "none";
      //document.getElementById("cadastroEditais").style.display = "block";
      //document.getElementById("seja_bem_vindo").style.display = "none";
    }
  }

}

function mostrarDisciplinasADS()
{
    document.getElementById("principal").style.display = "block";
    document.getElementById("ads").style.display = "block";
	document.getElementById("secundario").style.display = "block";
	document.getElementById("cienciaComp").style.display = "none";
}

function mostrarDisciplinasCC()
{
    document.getElementById("principal").style.display = "block";
    document.getElementById("ads").style.display = "none";
	document.getElementById("secundario").style.display = "block";
	document.getElementById("cienciaComp").style.display = "block";
}