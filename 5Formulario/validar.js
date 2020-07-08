function validate() {
    var exito = true
    var testNum = /[0-9]/
    var testCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        //alert(testNum.test(nombre.value))
    if (testNum.test(nombre.value) || nombre.value.length > 30 || nombre.value === "") {
        exito = false
        alert("Nombre vacio, excede maximo o contiene numeros (max: 30)")
        return
    }
    if (testNum.test(apellido.value) || apellido.value.length > 80 || apellido.value === "") {

        alert("Apellido vacio, excede maximo o contiene numeros (max: 80)")
        return
    }

    if (!testCorreo.test(correo.value) || correo.value.length > 100) {

        alert("Correo vacio, con caracteres invalidos o excede el maximo (max:100)")
        return
    }

    if (usuario.value.length > 20 || usuario.value === "") {

        alert("usuario vacio, excede maximo o contiene numeros (max: 20)")
        return
    }
    if (contraseña.value.length > 30 || contraseña.value === "") {

        alert("contraseña vacia, excede maximo o contiene numeros (max: 30)")
        return
    }
    if (!testNum.test(telefono.value) || telefono.value.length > 10 || telefono.value === "" || telefono.value.length < 6) {

        alert("telefono vacio, excede maximo o contiene letras (max: 10)")
        return
    }

    alert("Registro Exitoso " + usuario.value)
    return ({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        telefono: telefono,
        usuario: usuario
    })

}