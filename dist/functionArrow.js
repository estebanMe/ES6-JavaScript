"use strict";

//Interpretando las funciones Arrow

var miFuncion2 = function miFuncion2(valor) {
    return valor;
};

var miFuncion1 = function miFuncion1(valor) {
    return valor;
};

console.log(miFuncion1("esteban"));
console.log(miFuncion2("Victor"));

//funcion con dos parametros

var sumar2 = function sumar2(num1, num2) {
    return num1 + num2;
};

var sumar1 = function sumar1(num1, num2) {
    return num1 + num2;
};

var saludar2 = function saludar2() {
    return "Hola Mundo";
};

var saludar1 = function saludar1() {
    return "Hola Mundo";
};

// Otro ejemplo retornando

var saludarPersona = function saludarPersona(nombre) {
    var salida = "Hola, " + nombre;
    return salida;
};

var saludarPersona2 = function saludarPersona2(nombre) {
    var salida = "Hola " + nombre;
    return salida;
};

var obtenerLibro = function obtenerLibro(id) {
    return {
        id: id,
        nombre: "Piratas Caribe"
    };
};

var obtenerLibros = function obtenerLibros(id) {
    return {
        id: "" + id,
        nombre: "Carlos"
    };
};

console.log(obtenerLibros(2));