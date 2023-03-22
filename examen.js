
// Ejercicio 1
function f(a,b,c) {
    let prom = (a+b+c)/3;
    let vals = [a, b, c];
    for(var i=0; i<vals.length; i++) {
        if (vals[i] > prom) {
            return vals[i];
        }
    }
    return -1;
}
// console.log(f(1,2,3));

// Ejercicio 2
function f2(precio, porcentaje, aplicar) {
    if (aplicar == true) {
        return precio * porcentaje;
    }
    return precio;
}
// console.log(f2(10, 0.5, true));

// Ejercicio 3
let hoteles = [
    {
        nombre: "Acantilados",
        ubicacion: "Mar del plata",
        disponible: true
    },
    {
        nombre: "Costa",
        ubicacion: "Palermo",
        disponible: false
    }
];
function filtrar(array) {
    resultado = [];
    for (var i=0; i<array.length; i++) {
        if (array[i].disponible == true) {
            resultado.push(array[i])
        }
    }
    return resultado;
}
// console.log(filtrar(hoteles));



