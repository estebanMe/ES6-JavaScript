var saludo1 = function(nombre) {

    console.log(nombre);

}("Hola Esteban");

var saludo2 = (nombre => `Hola ${nombre}`)("Hola Paula");

console.log(saludo2);