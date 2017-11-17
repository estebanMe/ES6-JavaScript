//Solo sirven para almacenar referencia a unos objetos

let set = new WeakSet();

let persona1 = {
    nombre: "Esteban"
}

let persona2 = {
    nombre: "Victor"
}

set.add(persona1);
set.add(persona2);

set.delete(persona1);

console.log(set);