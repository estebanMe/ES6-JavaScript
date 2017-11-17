"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Mediante un array de datos que nos viene repetido en sus elementos, logramos con pocas lineas de codigo
//conseguir un nuevo array sin los elementos repetidos.
var numeros = [1, 2, 3, 4, 5, 6, 5, 5, 5, 6, 6, 2];

var arrayNumeros = eliminaDuplicados(numeros);

console.log(arrayNumeros);

function eliminaDuplicados(items) {
    return [].concat(_toConsumableArray(new Set(items)));
}