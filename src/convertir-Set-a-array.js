// Mediante un array de datos que nos viene repetido en sus elementos, logramos con pocas lineas de codigo
//conseguir un nuevo array sin los elementos repetidos.
let numeros = [1, 2, 3, 4, 5, 6, 5, 5, 5, 6, 6, 2];

let arrayNumeros = eliminaDuplicados(numeros);

console.log(arrayNumeros);

function eliminaDuplicados(items) {
    return [...new Set(items)];
}