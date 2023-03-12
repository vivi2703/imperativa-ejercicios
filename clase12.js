// Ingresar un numero

const prompt = require("prompt-sync")({ sigint: true});

/*
pares=0
mult5=0
ingresar un numero en n

for hasta n
    si es divisible por 2
            contarlo pares sumarle 1
    si es multiplo de 5
    contarlo mult5 sumarle 1
    fin fot*/

    function esMultiplo(numero, divisor){
        return numero%divisor==0;
    }
        //if (numero%divisor==0)
        // return true;
    let pares=0;
    let mult5=0;
    let n;
    n=Number(prompt("Ingresa el numero"));
    for(let i=1; i<=n;i++) {

        if (esMultiplo(1,2))
        {
            pares++;
        }

        //pares=esMultiplo(i,2)?pares+1:pares;

        if(esMultiplo(i,5))
        {
            mult5++;
        }
    
    }
     
    console.log("Hay" + pares + "numeros pares y " + mult5 + " multiplos de 5");

    let condicion;
    let edad=18;

    if(edad>=18)
    {
        condicion ="Mayor"
    }
    else
    {
        condicion ="Menor"
    }

    condicion=edad>=18?"Mayor":"Menor";

    /*function s(a,b,c,d){
        return a+b+c+d;
    }
    let i=s(5,4,3,2);
    let par = i%2==0?i/2:i*2;
    console.log(par)*/
