/*

Crear una función que reciba por parámetro dos valores numéricos. 
Si la suma de dichos valores resulta ser un número par, 
se deberá retornar un mensaje que diga “Se ha pasado la condición”.
 Ahora, si la multiplicación de dichos números resulta ser un número impar, 
 se deberá retornar un false. Para cualquier otro casi, retornar -1.


Realizar una función que indique si una persona se encuentra en condiciones de viajar a Qatar para ver el mundial. 
Para eso, debemos realizar una función  que reciba dos parámetros:
La edad de la persona (Number)
Si tiene entradas para el partido que desea (Booleano)
La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
Si tiene entradas y su edad es mayor o igual a 18: retornar un valor booleano true.
Si no tiene entradas o su edad es menor a 18 años: retornar un String que diga “Deberás comprar entradas o viajar con un adulto acompañante”.
Para cualquier otro caso: retorna un valor booleano false.

*/
/*
Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.

*/
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

function edadesMenores(edades)
{
    let arrayMenores=[];
    for(let i=0; i<edades.length;i++)
    {
        if(edades[i]<18)
        {
            arrayMenores.push(edades[i]);
        }

    }
    return arrayMenores;
}
function menor(edades)
{
    let menorEdad=edades[0];
    for(let i=1; i<edades.length;i++)    
    {   if(edades[i]<menorEdad)
        {
            menorEdad=edades[i];
        }
    }
    return menorEdad;
}

function puedeViajar(edad, entrada)
{
    if(edad>=18 && entrada==true)
    {
        return true;
    }else if(edad <18 || entrada==false)
    {
        return "Deberas comprar entradas o viajar con un adulto";
    }
    return false;
}

function sumar(numero1, numero2)
{
    let suma=numero1+numero2;
    let multiplicacion=numero1*numero2;
    if (suma%2===0){
        return "Se ha pasado la condicion";
    }
    else if(multiplicacion%2!==0)
    {
        return false;
    }
    return -1  
}
console.log(sumar(3,5));
console.log(puedeViajar(18,false));
console.log(edadesMenores(edades));
console.log(menor(edades));