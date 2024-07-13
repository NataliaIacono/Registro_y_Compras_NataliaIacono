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
        case "1": inicioSesion();
            break;
        case "2": registro();
            break;
        case "3":
            alert("Saliendo del sistema");
            break;
        default:
            alert("Opcion no valida")
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
        alert('Su email no se encuentra. Verifique que este bien escrito o proceda a registrarse');
        prompt('Ingresa un mail');
        return inicioSesion();
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
    gestionDeProductos(corroborarMail);
}


function registro() {
    const mail = prompt('Ingresa un mail');
    // Buscar el email en la base de datos // corroborarMail es donde se aloja el resultado de la comparación
    const corroborarMail = baseDeDatos.find(baseDeDatos => baseDeDatos.email === mail);

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
        alert("Registro completado. Ahora inicie sesion.");
    }
}


function gestionDeProductos(corroborarMail) {
    let gestionDeProductos;
    do {
        gestionDeProductos = prompt(`<< Gestion de Productos >>

            1. Agregar un producto.
            2. Consultar productos.
            3. Salir del sistema.
    
            Eliga una opcion:
            `);

        switch (gestionDeProductos) {
            case "1":
                let nuevoProducto = prompt("Ingrese un producto:");                
                corroborarMail.productos.push(nuevoProducto);
                alert ('El producto se ha agregado a la lista con exito');
            
                /*if (baseDeDatos.productos === nuevoProducto) {
                    alert('Ese producto ya esta en la lista');
                } else {
                    baseDeDatos.productos.push(nuevoProducto);
                    alert('El producto se ha agregado a la lista con exito');                   
                }*/
                break;

            case "2":
                if (corroborarMail.productos.length === 0) {
                    alert("No tienes productos en la lista");
                } else {
                    const productosString = corroborarMail.productos.join(', ');
                    alert(`Sus productos son ${productosString}`);
                }
                break;
            case "3":
                alert("Sesion cerrada");
                break;
            default: alert("Opcion no valida")
                break;
        }
    } while (gestionDeProductos !== "3");
};
