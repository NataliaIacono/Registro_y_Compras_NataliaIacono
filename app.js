const baseDeDatos = [
    {
        email: "example@email.com",
        password: "123456",
        productos: [
            "Naranja",
            "Pizza",
            "Cerveza"
        ]
    },
    {
        email: "example1@email.com",
        password: "123456",
        productos: [
            "Manzana",
            "Pera",
            "Banana"
        ]
    }
]

let opcionDeInicioElegida
bucle: do {
    opcionDeInicioElegida = prompt(`<< Sistema de gestion de productos >>

        1. Iniciar sesion.
        2. Registrarse.
        3. Salir del sistema.

        Eliga una opcion:
        `);

    switch (opcionDeInicioElegida) {
        case "1": inicioSesion ();
            break;
        case "2": registro ();
            break; 
        case "3": 
            alert ("Saliendo del sistema");
            break;
        default:
            alert ("Opcion no valida")
            break;
    }

} while (opcionDeInicioElegida !== "3");

//Dejar estas variables fuera de la funcion y luega a la funcion apregarle parametros, hace que la funcion sea mas flexible y reutilizable.
//Las tuve que volve a meter a la funcion porque si no, no me funcionaba la funcion como quiero.

function inicioSesion() {
    const mail = prompt('Ingresa un mail');
    // Buscar el email en la base de datos // corroborarMail es donde se aloja el resultado de la comparacion
    const corroborarMail = baseDeDatos.find(baseDeDatos => baseDeDatos.email === mail);

    if (corroborarMail) {
        alert('mail ok');
    } else {
        alert('Mail incorrecto');
        prompt('Ingresa un mail');
        return inicioSesion(mail, contraseña);
    }
    const contraseña = prompt('Ingresa la contraseña');
    //Buscar la constraseña en la base de datos. Creo una variable para alojar el resultado de la comparacion
    const corroborarContraseña = baseDeDatos.find(baseDeDatos => baseDeDatos.password === contraseña);
    if (corroborarContraseña) {
        alert('Bienvenido');
    } else {
        alert('contraseña incorrecta');
        prompt('Ingresa la contraseña');
    }
}
inicioSesion();

function registro() {
    const mail = prompt('Ingresa un mail');
    // Buscar el email en la base de datos // corroborarMail es donde se aloja el resultado de la comparación
    const corroborarMail = baseDeDatos.find(usuario => usuario.email === mail);

    if (corroborarMail) {
        alert('Su mail ya está registrado');
        return; // Salir de la función si el mail ya está registrado
    } else {
        alert('Su mail se ha registrado con éxito');
        const contraseña = prompt('Ingresa una contraseña');
        baseDeDatos.push({
            email: mail,
            password: contraseña,
            productos: [] // Inicialmente, no hay productos
        });
        alert("Registro completado. ////////////////.");
    }
}
registro();