let mapa = new Map([
    ["Nombre", "Esteban"],
    ["Edad", "30"]
]);

console.log(mapa);
console.log(mapa.has("Edad"));
console.log(mapa.get("Edad"));

mapa.forEach((llave, valor) => {
    console.log(`La llave es: ${valor}, el valor es ${llave}`);
});