"use strict";

var _templateObject = _taggedTemplateLiteral(["", " lapices cuestan ", " pesos."], ["", " lapices cuestan ", " pesos."]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Ejemplo de uso de templates literales con tags

function etiqueta(literales) {
    //console.log(arguments);

    var resultado = "";

    console.log(literales);

    for (var _len = arguments.length, substituciones = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        substituciones[_key - 1] = arguments[_key];
    }

    console.log(substituciones);

    for (var i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }

    return resultado;
}

var unidades = 5,
    costoUnitario = 10;

var mensaje = etiqueta(_templateObject, unidades, unidades * costoUnitario);
console.log(mensaje);