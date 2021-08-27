var operandoA;
var operandoB;
var operacion;

function init(){
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multip = document.getElementById("multip");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");


    uno.onclick = function(e){
        resultado.value = resultado.value + "1";
    }

    dos.onclick = function(e){
        resultado.value = resultado.value + "2";
    }

    tres.onclick = function(e){
        resultado.value = resultado.value + "3";
    }

    cuatro.onclick = function(e){
        resultado.value = resultado.value + "4";
    }

    cinco.onclick = function(e){
        resultado.value = resultado.value + "5";
    }

    seis.onclick = function(e){
        resultado.value = resultado.value + "6";
    }

    siete.onclick = function(e){
        resultado.value = resultado.value + "7";
    }

    ocho.onclick = function(e){
        resultado.value = resultado.value + "8";
    }

    nueve.onclick = function(e){
        resultado.value = resultado.value + "9";
    }

    cero.onclick = function(e){
        resultado.value = resultado.value + "0";
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoA = resultado.value;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        operandoA = resultado.value;
        operacion = "-";
        limpiar();
    }

    multip.onclick = function(e){
        operandoA = resultado.value;
        operacion = "*";
        limpiar();
    }

    division.onclick = function(e){
        operandoA = resultado.value;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operandoB = resultado.value;
        resolver();
    }
}

function limpiar(){
    resultado.value = "";
}

function resetear(){
    resultado.value = "";
    operandoB = 0;
    operandoA = 0;
    operacion = "";
}

function resolver(){
    var resp = 0;
    switch(operacion){
        case "+":
            resp = parseFloat(operandoA) + parseFloat(operandoB);
            limpiar();
            if(isNaN(resp)){
            resp = "Inválido";
            }
            resultado.value = resp;
            break;

            case "-":
            resp = parseFloat(operandoA) - parseFloat(operandoB);
            limpiar();
            if(isNaN(resp)){
            resp = "Inválido";
            }
            resultado.value = resp;
            break;

            case "*":
            resp = parseFloat(operandoA) * parseFloat(operandoB);
            limpiar();
            if(isNaN(resp)){
            resp = "Inválido";
            }
            resultado.value = resp;
            break;

            case "/":
            resp = parseFloat(operandoA) / parseFloat(operandoB);
            limpiar();
            if(isNaN(resp)){
            resp = "Inválido";
            }
            resultado.value = resp;
            break;
    }
}