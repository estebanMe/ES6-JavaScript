"use strict";

//REST: Junta los elementos en un arreglo.
//SPREAD: Esparce los elementos como si fueran enviados de forma separada.

function saludarRest(saludo) {
    for (var _len = arguments.length, nombres = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        nombres[_key - 1] = arguments[_key];
    }

    for (i in nombres) {
        console.log(saludo + " " + nombres[i]);
    }
}

function saludarSpread(saludo) {
    for (var _len2 = arguments.length, nombres = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        nombres[_key2 - 1] = arguments[_key2];
    }

    console.log(saludo + " " + nombres);
}

saludarRest("Hola", "Fernando", "Maria", "Susana");

var personas = ["melissa", "hernan", "Juan"];
saludarSpread("Que tal!", personas);