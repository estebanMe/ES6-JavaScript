"use strict";

//Ejemplo de parametros REST ES6

function agregarAlumnos(arr_alumnos) {
    for (var _len = arguments.length, alumnos = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        alumnos[_key - 1] = arguments[_key];
    }

    console.log(arguments);

    for (var i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;
}

var alumnos_arr = ["Fernando"];

var alumnos_arr2 = agregarAlumnos(alumnos_arr, "Esteban", "Victor", "Claudio");

console.log(alumnos_arr2);