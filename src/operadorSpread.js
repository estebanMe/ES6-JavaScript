//Muy cercano al REST, se encuentra el operador "SPREAD".
//Mientras que el párametro "REST" permite especificar argumentos independientes
// que serán combinados en un arreglo, el operador "SPREAD" permite especificar
//un arreglo que será separado y cada item enviado será un argumento independiente a la función.

let numeros = [1, 2, 16, 46, 300, 200];
let max = Math.max(...numeros);

console.log(max);