//bienvenidos a PRENSOPOLIS
alert("Bienvenidxs a Prensopolis");

//registrarse para newsletter 
alert("Registrate para acceder al contenido premium");

let user = prompt("ingrese un usuario");
let pass = prompt("ingrese una contraseña");

//logueo
for (let i = 1; i <= 3; i++) {
    let passInicio = prompt("ingrese su contraseña");
    //la contraseña correcta es pepe123
    if (passInicio == "pepe123") {
        alert("Contenido de luxe para "+user+" ");
    break;
    }
        alert("Contraseña Incorrecta");
    }