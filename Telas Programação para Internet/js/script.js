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
