/*Sumar todas las notas y dividirlas entre la cantidad de notas a promediar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3
Algoritmo para convertir una cantidad de pesos a dólares.
Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su salario actual.
Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor que 7 mostrar aprobado, de lo contrario, mostrar desaprobado.
Ingresar un número y mostrar si es número par o impar. 
Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el mensaje "ACCESO DENEGADO".
Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la tabla de multiplicar de dicho número.
Elaborar un programa que muestre el mayor de 10 números ingresados.
Elaborar un programa que muestre la cantidad de números pares e impares entre 2 números.
scribir un programa que, ingresando un número, imprima los números desde 1 hasta ese mismo.
 */
//const prompt = requiere ("prompt-sync")({ sigint: true});

//function promedio(nota1,nota2, nota3)
//{
    //return (nota1,nota2+nota3)/3
//}

//let n1=Number(prompt("Ingresa primer nota:"));
//let n2=Number(prompt("Ingresa segunda nota:"));
//let n3=Number(prompt("Ingresa tercera nota:"));

//console.log("El promedio es: " + promedio(n1,n2,n3));

/*
let cantidad=Number(prompt("Cuantas notas "));
for(let i=1; i<=cantidad:i++)
{
    nota=Number(prompt("Ingresa primer nota"));
    total =total+nota;
}
total /3

*/
let nota;
let total=0;
let cantidad=Number(prompt("Cuantas notas"));
for(let i=1; i<=cantidadi++)
{
    nota=Number(prompt("Ingresa primer nota"));
    total =total+nota;
}
promedio=total /cantidad;
console.log("El promedio es : " + promedio);

let valorDolar;
let pesos;
let dolares;

valorDolar=Number(prompt("Ingrese valor dolar:"));
pesos=Number(prompt("Pesos a cambiar:"));

dolares=pesos/valorDolar;
console.log("Obtiene " + dolares + " dolaes ");

/*
1 dolar----valor
x dolares ---pesos
*/



