// dia = variable
// 'viernes' = el valor de la variable dia.
let dia = 'viernes'; 

// Funciones
// funcion(parametro1, parametro2) ==> valor
function dolar_a_pesos(cant_usd) {
    return 370 * cant_usd;
}
console.log('10 dolares son: ' + dolar_a_pesos(10) + ' pesos.');
console.log('100 dolares son: ' + dolar_a_pesos(100) + ' pesos.');
console.log('150 dolares son: ' + dolar_a_pesos(150) + ' pesos.');
console.log('1000 dolares son: ' + dolar_a_pesos(1000) + ' pesos.');
// dolar_a_peso(1) => 370
// dolar_a_peso(2) => 740

// Creamos un array de nombres y apellidos
let array = [
    {nombre: 'Vero', apellido: 'Vila'}, // array[0]
    {nombre: 'Joaquin', apellido: 'Ramirez'}, // array[1]
    {nombre: 'Mimi', apellido: 'Munita'} // array[2]
]
console.log(array[0].nombre);
console.log(array[1].nombre);
console.log(array[2]);
console.log('##############')
// Recorro con un 'for' el array y escribo sus valores
for (let i=0; i<array.length; i++) {
    console.log('==========================')
    console.log('Nombre: ' + array[i].nombre);
    console.log('Apellido: ' + array[i].apellido);
}

