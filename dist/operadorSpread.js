"use strict";

//Muy cercano al REST, se encuentra el operador "SPREAD".
//Mientras que el párametro "REST" permite especificar argumentos independientes
// que serán combinados en un arreglo, el operador "SPREAD" permite especificar
//un arreglo que será separado y cada item enviado será un argumento independiente a la función.

var numeros = [1, 2, 16, 46, 300, 200];
var max = Math.max.apply(Math, numeros);

console.log(max);