function Enviar() {
var nome = document.getElementById("nomeid");
var senha = document.getElementById("senhaid");
if(nome.value == ""||senha.value == ""){
    alert('Campos de preenchimento obrigatório')
}else{
    var nome = document.getElementById("nomeid");

    if (nome.value != "admin"||senha.value != "admin") {
        alert('Usuário e/ou senha incorretos');
    }else{
        alert('sucesso ao realizar o login');
    }

}
}