"use strict";

var items = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7]);

console.log(items);

items.delete(4);

console.log(items);

//Borrar todo el set

items.clear();

console.log(items);