//Ejemplo de parametros REST ES6

function agregarAlumnos(arr_alumnos, ...alumnos) {
    console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }

    return arr_alumnos;

}

let alumnos_arr = ["Fernando"];

let alumnos_arr2 = agregarAlumnos(alumnos_arr, "Esteban", "Victor", "Claudio");

console.log(alumnos_arr2);