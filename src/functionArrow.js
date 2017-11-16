//Interpretando las funciones Arrow

var miFuncion2 = function(valor) {
    return valor;
}

let miFuncion1 = valor => valor;

console.log(miFuncion1("esteban"));
console.log(miFuncion2("Victor"));

//funcion con dos parametros

var sumar2 = function(num1, num2) {
    return num1 + num2;
}

let sumar1 = (num1, num2) => num1 + num2;

var saludar2 = function() {
    return "Hola Mundo";
}

let saludar1 = () => "Hola Mundo";

// Otro ejemplo retornando

var saludarPersona = function(nombre) {
    var salida = "Hola, " + nombre;
    return salida;
}

let saludarPersona2 = nombre => {
    let salida = `Hola ${nombre}`;
    return salida;
}

var obtenerLibro = function(id) {
    return {
        id: id,
        nombre: "Piratas Caribe"
    }
}

let obtenerLibros = (id) => ({
    id: `${id}`,
    nombre: "Carlos"
})

console.log(obtenerLibros(2))