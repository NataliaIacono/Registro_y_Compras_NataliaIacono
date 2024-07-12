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

//Dejar estas variables fuera de la funcion y luega a la funcion apregarle parametros, hace que la funcion sea mas flexible y reutilizable.




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
    const contraseña = prompt ('Ingresa la contraseña');
//Buscar la constraseña en la base de datos. Creo una variable para alojar el resultado de la comparacion
    const corroborarContraseña = baseDeDatos.find(baseDeDatos => baseDeDatos.password === contraseña);
    if (corroborarContraseña) {
        alert('Bienvenido');
    } else {
        alert('contraseña incorrecta');
            prompt ('Ingresa la contraseña');       
    }
}
//inicioSesion();

function registro () {
    const mail = prompt('Ingresa un mail');  
    // Buscar el email en la base de datos // corroborarMail es donde se aloja el resultado de la comparacion
    const corroborarMail = baseDeDatos.find(baseDeDatos => baseDeDatos.email === mail);

    if (corroborarMail) {
        alert('Su mail ya esta regitrado');
    } else {
         alert ('Su mail se ha registrado con éxito');        
}
    const contraseña = prompt ('Ingresa una contraseña');

    alert ("Inicie sesion")


baseDeDatos.push (mail, contraseña);
}

registro ();