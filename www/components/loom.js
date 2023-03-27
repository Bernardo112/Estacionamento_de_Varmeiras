// This is a JavaScript file

function ContaEstacionamento(){
    var placa = document.getElementById("placa");
    var categoria = document.getElementById("categoria");
    var qHoras = document.getElementById("qHoras");

    alert("Placa inválida, tente novamente");
    /*if(placa.length() > 7){
        alert("Placa inválida, tente novamente");
        document.getElementById("placa").innerHTML = "";
        document.getElementById("categoria").innerHTML = "";
        document.getElementById("qHoras").innerHTML = "";
    }*/
}

function Login(event) {
 event.preventDefault();
 /*var CPF = document.getElementsByName('CPF')[0].value
 var password = document.getElementsByName('senha')[0].value

 if ( CPF == "12345678910" && password == "mb" ) {
   alert("Tudo certo, seja Bem-Vindo(a)")
   window.location = "home.html"
 } else {
    alert("Senha ou CPF incorreto, tente novamente com mais atenção")
 }*/
window.location = "home.html"

}

function Cad(event) {
   event.preventDefault();
   var CPF = document.getElementsByName('CPF')[0].value
 var password = document.getElementsByName('senha')[0].value
   if ( CPF == "" || password == "" ){
      alert("Cadastro incompleto!")
   }else { 
   alert("Cadastrado com sucesso, seja Bem-Vindo(a)")
   window.location = "home.html"
    }
}
