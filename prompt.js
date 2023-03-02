var prompt = require('prompt-sync')();

/*
var nombre = prompt('Ponga su nombre: ');
console.log(nombre);

var edad = prompt('Ponga su edad: ');
texto = 'Hola ' + nombre + ', su edad es ' + edad + ' anios';
console.log(texto);
*/

///////////////////////////////////
// Ejercicio 2
//var nombre = prompt('Ponga su nombre: ');
//console.log('Hola ' + nombre + "!");
// Ejercicio 3
//var numero1 = prompt('Ponga su numero: ');
//var numero2 = prompt('Ponga su segundo numero: ');
//console.log(numero1 + numero2);
// Ejercicio 4
var anoNacimiento = parseInt(prompt('Ponga su año de nacimiento '));
var anoActual = parseInt(prompt('Ponga su anoActual: '));
var edad = anoActual - anoNacimiento;
console.log('Tienes ' + edad + ' anos');




