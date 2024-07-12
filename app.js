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



function inicioSesion() {
    const mail = prompt('Ingresa un mail');
    
    // Buscar el email en la base de datos // usuario es donde se aloja el resultado de la comparacion
    const corroborarMail = baseDeDatos.find(baseDeDatos => baseDeDatos.email === mail);

    if (corroborarMail) {
        alert('Mail correcto');
    } else {
        alert('Mail incorrecto');
    }

    const contraseña = prompt ('Ingresa la contraseña');

//Buscar la constraseña en la base de datos. Creo una variable para alojar el resultado de la comparacion
    const corroborarContraseña = baseDeDatos.find(baseDeDatos => baseDeDatos.password === contraseña);

    if (corroborarContraseña) {
        alert('Bienvenido');
    } else {
        alert('contraseña incorrecta');
    }
}



inicioSesion();