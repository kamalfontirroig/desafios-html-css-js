//en este map se ingresan los exitos o fallos de las validaciones ['seccion', true/false]
var validaciones = new Map();
var contadordevalidaciones = 0;
var registro = {}
    //boton registrar onclick llama al metodo validar()
document.getElementById("reserva").addEventListener('click', () => {
    validar();
});

function validar() {

    //extrae los inputs del formulario hacia el objeto "registro"
    registro = {
        rut: document.getElementById('rut').value,
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        email: document.getElementById('email').value,
        especialidad: document.getElementById('especialidad').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value
    }

    //Rut
    var rutPatron = /[0-9]*-[0-9k]/gi
    validacionRut = registro.rut.match(rutPatron);
    //#region 
    // console.log(rut + " " + validacionRut)
    // console.log(rut != "");
    // console.log(validacionRut != null);
    // console.log(validacionRut.length == 1);
    // console.log(validacionRut.toString().length == rut.length);
    // console.log(validacionRut.toString().length)
    // console.log(rut.length)
    // console.log(validacionRut.toString(' '))
    //#endregion
    if (registro.rut != "" && validacionRut != null && validacionRut.length == 1 && validacionRut.toString().length == registro.rut.length) {
        exito('rut');
    } else {
        fallo('rut');
    }

    //Nombre
    if (registro.nombre.match(/[0-9]+/gi) == null && registro.nombre.match(/[^0-9a-z ]/gi) == null) { //si esto es true, el nombre no contiene numeros y se revisa que este correctos, si es falso, entoncesel nombre es invalido y se agrega el fallo a las validaciones
        if (registro.nombre != "") validacionNombre = registro.nombre.match(/[^0-9]+/gi).toString().match(/[\w]+/g);
        //#region 
        // console.log(nombre + " " + validacionNombre)
        // console.log(nombre != "");
        // console.log(validacionNombre != null);
        // console.log(validacionNombre.length >= 1);
        // console.log(validacionNombre.length <= 3);
        // console.log(validacionNombre.toString().length == nombre.length);
        // console.log(validacionNombre.toString().length)
        // console.log(nombre.length)
        // console.log(validacionNombre.toString())

        // //split
        // console.log(nombre.split(" ") + " / " + validacionNombre)
        // console.log(nombre.split(" ").length)
        // console.log(validacionNombre.length)
        // console.log(nombre.split(" ").length == validacionNombre.length);
        //#endregion
        if (registro.nombre != null && registro.nombre != "" && validacionNombre != null && validacionNombre.length <= 3 && validacionNombre.length >= 1 && validacionNombre.length == registro.nombre.split(" ").length) {
            exito('nombre')
        } else {
            fallo('nombre')
        }
    } else {
        fallo('nombre')
    }

    //Apellidos
    if (registro.apellido.match(/[0-9]+/gi) == null && registro.apellido.match(/[^0-9a-z ]/gi) == null) { //si esto es true, el registro.apellido no contiene numeros ni simbolos y se revisa que este correctos, si es falso, entoncesel registro.apellido es invalido y se agrega el fallo a las validaciones
        if (registro.apellido != "") {
            validacionApellido = registro.apellido.match(/[^0-9]+/gi).toString().match(/[\w]+/g);
            //#region 
            // console.log(registro.apellido + " " + validacionApellido)
            // console.log(registro.apellido != "");
            // console.log(validacionApellido != null);
            // console.log(validacionApellido.length >= 1);
            // console.log(validacionApellido.length <= 3);
            // console.log(validacionApellido.toString().length == registro.apellido.length);
            // console.log(validacionApellido.toString().length)
            // console.log(registro.apellido.length)
            // console.log(validacionApellido.toString())

            // //split
            // console.log(registro.apellido.split(" ") + " / " + validacionApellido)
            // console.log(registro.apellido.split(" ").length)
            // console.log(validacionApellido.length)
            // console.log(registro.apellido.split(" ").length == validacionApellido.length);
            //#endregion
        }
        if (registro.apellido != null && registro.apellido != "" && validacionApellido != null && validacionApellido.length <= 3 && validacionApellido.length >= 1 && validacionApellido.length == registro.apellido.split(" ").length) {
            exito('apellido')
        } else {
            fallo('apellido')
        }
    } else {
        fallo('apellido')
    }

    //Edad
    if (registro.edad != "" && registro.edad.match(/a-z/gi) == null) {
        var edadPatron = /[0-9]+/gi;
        var edadValidada;
        if (registro.edad.match(edadPatron) != null) {
            edadValidada = registro.edad.match(edadPatron)
            if (edadValidada.toString() == registro.edad) { //si registro edad esta validado
                exito('edad');
            } else {
                fallo('edad');
            }
        } else fallo('edad');
    } else {
        fallo('edad');
    }
    //Email
    var emailPatron = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
    if (registro.email.match(emailPatron)) { //si registro email esta validado
        exito('email');
    } else {
        fallo('email');
    }

    //Fecha
    var fechaPatron = /[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]/
    if (registro.fecha != "") {
        var fecha = registro.fecha.slice(8, 10)
        var fecha = fecha.concat("-" + registro.fecha.slice(5, 7))
        var fecha = fecha.concat("-" + registro.fecha.slice(0, 4))
        registro.fecha = fecha;
        exito('fecha');
    } else {
        fallo('fecha');
    }

    //Muestra en pantalla el resultado del registro
    alert(writeFinalMessage());
}

function writeFinalMessage() { //utiliza las validaciones obtenidas de validar()
    var mensajeFinal = "";
    var resultadoValidaciones = true; //se asumen que todas las validaciones fueron positivas

    var exitosArray = Array.from(validaciones.values());
    for (var i = 0; i < exitosArray.length; i++) {

        if (exitosArray[i] === false) {
            resultadoValidaciones = false; //si hubiera un solo fallo, el resultado de la validacion falla
            break;
        }
    }
    console.log("Resultado validaciones = " + resultadoValidaciones)
    if (resultadoValidaciones == false) {
        for (var [key, testExitoso] of validaciones) {
            if (!testExitoso) {
                mensajeFinal = mensajeFinal.concat(validacionFallidaDe(key));
            }
        }
    } else { //si el mensaje final no contiene string de errores, entonces es un exito
        mensajeFinal = "Estimado(a) " + registro.nombre + " " + registro.apellido + ", su hora para " + registro.especialidad + " ha sido reservada para el día " + registro.fecha + " a las " + registro.hora + ". Además, se le envió un mensaje a su correo " + registro.email + " con el detalle de su cita. \n Gracias por preferirnos";
    }
    return mensajeFinal
};

//retorna un string segun el input (key) que está invalido
function validacionFallidaDe(key) {
    switch (key) {
        case "rut":
            return "Rut ingresado inválido (ej. 17430249-k)\n";

        case 'nombre':
            return "Nombre ingresado inválido (ej. Juan Fernando)\n";

        case 'apellido':
            return "Apellido ingresado inválido (ej. Perez Reyes)\n";

        case 'edad':
            return "Edad ingresada inválida (ej. 74)\n"

        case 'email':
            return "Email ingresado inválido (ej. ejemplo@dominio.com)\n"

        case 'especialidad':
            return "Especialidad ingresada inválida (ej. Radiología)\n "

        case 'fecha':
            return "Debe ingresar una Fecha \n"
    }

}

function fallo(idFallado) {
    validaciones.set(idFallado, false);
    contadordevalidaciones++
    console.log(contadordevalidaciones + " - fallo");
}

function exito(idExito) {
    contadordevalidaciones++;
    console.log(contadordevalidaciones + " - exito");
    validaciones.set(idExito, true);
}