//REST: Junta los elementos en un arreglo.
//SPREAD: Esparce los elementos como si fueran enviados de forma separada.

function saludarRest(saludo, ...nombres) {

    for (i in nombres) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}

function saludarSpread(saludo, ...nombres) {
    console.log(`${saludo} ${nombres}`);
}

saludarRest("Hola", "Fernando", "Maria", "Susana");

let personas = ["melissa", "hernan", "Juan"];
saludarSpread("Que tal!", personas);