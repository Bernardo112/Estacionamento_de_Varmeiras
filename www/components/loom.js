var resultado = "";

function ContaEstacionamento(){
    var placa = document.getElementById("placa").value;
    var categoria = document.getElementById("categoria").value;
    var qHoras = document.getElementById("qHoras").value;

    if(categoria == "Selecione" || qHoras == "Selecione"){
        resultado = "Preencha todos os campos";
        return;
    }

    if(placa.length > 7 || placa.length < 7){
        resultado = "Placa inválida, tente novamente";
        return;
    }

    for (var i = 0; i < placa.length; i++) {
        var char1 = placa.charAt(i);
        var cc = char1.charCodeAt(0);

        if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
        } else {
            resultado = "Somente caracteres alfanuméricos";
            return;
        }
    }
    
    for (var i = 0; i < placa.length; i++) {
        var char1 = placa.charAt(i);
        var cc = char1.charCodeAt(0);

        if(i < 2){
            if ((cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
            } else {
            resultado = "Placa inválida, tente novamente";
            return;
            }
        }
        if(i > 2 && i != 4){
            if ((cc > 47 && cc < 58)) {
            } else {
            resultado = "Placa inválida, tente novamente";
            return;
            }
        }
    }
    if(resultado == ""){
        resultado = "O valor da compra do estacionamento para o carro de placa " + placa + " na categoria " + categoria + " é " + (qHoras * PrecoCategoria(categoria));
    }

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("botao").innerHTML = "Calcular novamente";
    document.getElementById("botao").onclick = "RestaurarCalculadora()";
}

function RestaurarCalculadora(){
    document.getElementById("botao").onclick = "ContaEstacionamento()";
    document.getElementById("resultado").innerHTML = "";
}

function PrecoCategoria(categoria){
    switch (categoria){
    case "subcompacto":
        return 3.50;
    break;
    case "compacto":
        return 4.00;
    break;
    case "hatch":
        return 4.50;
    break;
    case "sedan":
        return 5.00;
    break;
    case "suv":
        return 6.00;
    break;
    case "pickUp":
        return 7.00;
    break;
    }
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
