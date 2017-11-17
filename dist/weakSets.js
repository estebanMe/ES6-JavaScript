"use strict";

//Solo sirven para almacenar referencia a unos objetos

var set = new WeakSet();

var persona1 = {
    nombre: "Esteban"
};

var persona2 = {
    nombre: "Victor"
};

set.add(persona1);
set.add(persona2);

set.delete(persona1);

console.log(set);