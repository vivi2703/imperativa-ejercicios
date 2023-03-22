//Ejercicio 3
/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 const numeros = [5, 12, 2, 40, 33, 2, 8];*/
let num1=10;
let num2=50;
let num3=6;

/*function menorNumero(n1,n2,n3){

    if (n1 < n2 && n1 < n3) {
    return n1;
} else if(n1<n2 && n1<n3) {
}
    return n2;
}*/
function menorNumero(n1,n2,n3) {
    if (n1<=n2 && n1<=n3) {
        return n1;
    } else if (n2<=n1 && n2 <= n3) {
        return n2;
    }
    return n3;
}

console.log(menorNumero(num1, num2, num3));
// Declaro el array costante llamados numeros(no puede modificarse)
const numeros = [5, 12, 2, 40, 33, 2, 8];

function menorElemento(datos)
{
    // Declaro la variable numeroMenor y le pongo el valor numeros[0] (vale 5 en este caso)
    let numeroMenor = numeros[0];
    // Recorremos el array 'datos': datos[0], datos[1], datos[2], ..., datos[datos.length-1]
    for(var i=0; i<datos.length; i++) {
        if (datos[i] <= numeroMenor) {
            numeroMenor = datos[i];
        }
    }
    /*if (datos[0] <= numeroMenor) {
        numeroMenor = datos[0];
    }
    if (datos[1] <= numeroMenor) {
        numeroMenor = datos[1];
    }
    if (datos[2] <= numeroMenor) {
        numeroMenor = datos[2];
    }*/
    return numeroMenor;
}
let resultado = menorElemento(numeros);
console.log(resultado);

