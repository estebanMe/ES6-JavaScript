let numeros = [5, 6, 30, 60, 45, 90];
console.log(numeros);
for (let numero of numeros) {
    console.log(numero);

}

let registros = [
    { nombre: "Esteban", edad: "20" },
    { nombre: "Victor", edad: "30" },
    { nombre: "Claudia", edad: "23" },
    { nombre: "Lucia", edad: "35" }
]

for (let registro of registros) {
    console.log(`El registro: ${registro.nombre} con su edad ${registro.edad}`);
}