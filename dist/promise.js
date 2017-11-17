"use strict";

function tareaAsincrona() {
    var promesa = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Proceso asincrono terminado");
            resolve();
        }, 1000);
    });
    return promesa;
}

tareaAsincrona().then(function () {
    console.log("Todo OK!");
}, function () {
    console.error("Todo mal!");
});

console.log("Codigo secuencial");