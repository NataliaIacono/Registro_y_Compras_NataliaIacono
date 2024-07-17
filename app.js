const baseDeDatos = [
    {
        email: "example@email.com",
        password: "123456",
        productos: ["Naranja", "Pizza", "Cerveza"],
    },
    {
        email: "example1@email.com",
        password: "123456",
        productos: ["Manzana", "Pera", "Banana"],
    },
];

let opcionDeInicioElegida;
bucle: do {
    opcionDeInicioElegida = prompt(`<< Sistema de gestion de productos >>
  
          1. Iniciar sesion.
          2. Registrarse.
          3. Salir del sistema.
  
          Eliga una opcion:
          `);

    switch (opcionDeInicioElegida) {
        case "1":
            const email = prompt("Ingrese un email");
            const contraseña = prompt("Ingrese su contraseña");

            const login = inicioSesion(email, contraseña);

            if (login) {
                gestionDeProductos(email);
            }

            break;

        case "2":
            registro();
            continue;

        case "3":
            break bucle;

        default:
            alert("Opcion no válida");
            break;
    }
} while (true);

alert("Saliendo del sistema");

function inicioSesion(email, contraseña) {
    const USUARIO = baseDeDatos.find((usuario) => usuario.email === email && usuario.password === contraseña);
    if (USUARIO) {
        alert("Bienvenido");
        return true;
    } else {
        alert("Usuario o contraseña incorrectas");
        return false;
    }
}

function registro() {
    const email = prompt("Ingrese un mail válido");
    const password = prompt("Ingrese una contraseña");

    const existeUSUARIO = baseDeDatos.find((usuario) => usuario.email === email);

    if (existeUSUARIO) {
        alert("El usuario ya existe. Debe registrarse");
    } else {
        baseDeDatos.push({ email, password, productos: [] });
        alert("Registro exitoso. Ahora debe iniciar sesion");
    }
}

function gestionDeProductos(email) {
    let opcionDeGestion;
    do {
        opcionDeGestion = prompt(`<< Gestion de Productos >>
  
              1. Agregar un producto.
              2. Consultar productos.
              3. Salir del sistema.
      
              Eliga una opcion:
              `);

        if (opcionDeGestion === "1") {
            let nuevoProducto = prompt("Ingrese un producto:");
            const USUARIO = baseDeDatos.find(usuario => usuario.email === email);
            USUARIO.productos.push(nuevoProducto);
            alert("El producto se ha agregado a la lista con exito");
        } else if (opcionDeGestion === "2") {
            const USUARIO = baseDeDatos.find(usuario => usuario.email === email);
            if (USUARIO.productos.length === 0) {
                alert("No tienes productos en la lista");
                continue;
            }

            const productosString = USUARIO.productos.join(", ");
            alert(`Sus productos son ${productosString}`);
        } else if (opcionDeGestion === "3" || isNaN(opcionDeGestion)) {
            alert("Sesion cerrada");
            break;
        } else {
            alert("Opcion no valida");
        }

    } while (true);
}