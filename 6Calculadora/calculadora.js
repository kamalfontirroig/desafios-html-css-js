function init() {

}

var temporal = 0;
var resultado = 0;
var numEnPantalla = "";

function actualizarNumero(numNuevo) {
    console.log(numNuevo);
    var cantidad = numEnPantalla.length;

    if (numNuevo === 'clear') {
        document.getElementById("log").innerHTML = '';
        numEnPantalla = "";
    } else {

        if ((numNuevo === "+" || numNuevo === "-" || numNuevo === "/" || numNuevo === "*") && (numEnPantalla === "")) {
            alert("No puede ingresar una operacion matematica sin numeros");
        } else {
            if (
                (numNuevo === "+" ||
                    numNuevo === "-" ||
                    numNuevo === "/" ||
                    numNuevo === "*") &&
                (numEnPantalla[cantidad - 1] === "+" ||
                    numEnPantalla[cantidad - 1] === "-" ||
                    numEnPantalla[cantidad - 1] === "/" ||
                    numEnPantalla[cantidad - 1] === "*")
            ) {
                alert("Ya ingreso una operacion matematica, ahora agregue un numero");
            } else {
                numEnPantalla += numNuevo;
                document.getElementById("log").innerHTML = numEnPantalla;
            }
        }
    }
}



function calcular(numerosYSimbolos) {
    var cantidad = numerosYSimbolos.length;
    if (
        numerosYSimbolos[cantidad - 1] === "+" ||
        numerosYSimbolos[cantidad - 1] === "/" ||
        numerosYSimbolos[cantidad - 1] === "*" ||
        numerosYSimbolos[cantidad - 1] === "-"
    ) {
        alert("Debe ingresar un numero despues de una operacion matematica");
        numEnPantalla = numerosYSimbolos;

    } else {
        var resultado = eval(numerosYSimbolos);
        document.getElementById("log").innerHTML = resultado;
        
        if (!isFinite(resultado)) {
            numEnPantalla = "";
        } else numEnPantalla = resultado;
    }
}