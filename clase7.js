// Suma

/*console.log(5+ 4);

// Resta

console.log( 10 - 6);

// Multipilicacion

console.log( 3 +4);

// Modulo

console.log( 10 % 2);

// Incremento

let numero = 6
console.log( ++numero );

// Decremento
let otroNumero = 10;
console.log( --otroNumero );

// Comparacion simple

console.log( 5 == `5`);

// coparacion estetica

console.log( 5 === `5`);

// Desigualdad simple 

console.log( 5 != `5` );

// Desigualdad estetica

console.log( 5 !== `5`);

 // Mayor que
console.log( 6 >= 6);

// Mayor op igual que

console.log( 6 >= 6);
// Menor

console.log( 7 < 7 );

// Menor o igual que

console.log( 7 > 7 );

// AND &

console.log( false && true);

// QR

console.log( false || false);

//contactacion

let nombre = `Vivi`;
let apellido = `Vila`;


console.log( nombre +` `+ apellido);


let clima = `LLuvia`;
let dia = `Domingo`;

if ( clima == `Soleado` && dia == `Domingo`){
    console.log(`Lindo dia para pasear`)



}else if ( clima == `Soleado` && dia == `Domingo` ){
    console.log(`Podria salir igual`);
}else{
    console.log(`Mejor me quedo en casa practicando Js`);
}

 // if ternario

 let fruta = `Manzana`;
 fruta ==`Manzana`?`Buenisimo, me gusta la manzana`:`Ufa, queria manzana`;
 //console.log(resultado);
 
 // switch


console.log(10>=15&&10!=11);
console.log(false||false);
console.log(false| 3==4);
console.log(3==4);
console.log(12%2==0&&12!==21);
//console.log(8-15 == 8 || 7>6 = -2)
console.log(3+5 == "8" && 5-4 === 1)
console.log('Zapato' == 'trampa' || "hola" <= "chau")
console.log("Gato" && "Perro")
console.log("Gato" || "Perro")*/

// let num=-7;

/*if(num>0);
{
    console.log(`Es positivo`);
}
else if(num==0)
{
    console.log(`Es cero`);
}
else {
    console.log(`Es negativo`)
}

let operacion=`+`;
let num1=23;
let num2=2;
let resultadp=0;
if (operacion==`+`)
{
    resultado= num1+num2;
}

if (operacion==`+`)
{
    resultado= num1+num2;
}
else if(opeacion==`*`)
{
    resultado= num1+num2;
}
console.log(resultado);
switch (resultado)
{
    case `+`:
    resultado= num1+num2;
    break;
    case `-`:
        resultado= num1+num2;
        break;
}
// y &&
// o || 

let numero=10;
if(numero>0 && numero %2==0)
{
    console.log(`es positivo y par`);
}
else if(numero<0 && numero%2!=0 )
{
    console.log(`Es negativo y es impar`);
}
else if (numero<0)
{
    console.log(`Es negativo y par`);
    Debe medir mas o igual de 1,40m y menos de 2 metros.
    si mide menos de 1,40 hasta 1,20, debera venir acompañado.
    si mide menos de 1,20m, no podra subir ni acompañado.
}

function puedeSubir(altura, acompanado)
{
    if (altura>=1.40 && altura<2)
    {
        return true;
    }
    else if(altura<1.40 && altura>=1.20 && acompanado==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

    let altura=1.30;
    let compania=true;

    console.log(puedeSubir(altura, compania));


    let edad=29

    if(edad>0 && edad<18) {
        console.log("No puede pasar al bar")
    }
  else if(edad>=18 && edad<21)
    {
        console.log("Puede pasar al bar, pero no puede tomar alcohol")
        if (edad%2!=0)  {console.log("tu edad es impar")};  
    }
    else if(edad<0)
    {
        console.log("no puede pasar al bar")
        if (edad%2!=0)  {console.log("tu edad es impar")};  
    }
    else if (edad==21) {
        console.log("Felicidades eres mayor de edad")
        if (edad%2!=0)  {console.log("tu edad es impar")}; 
    }
    else if (edad==21) {
        console.log("sabias que es impar?")
        if (edad%2!=0)  {console.log("tu edad es impar")}; 
    }
    else {
        console.log("Puede pasar al bar a tomar alcohol")
        if (edad%2!=0)  {console.log("tu edad es impar")}; 
    } 
    function totalAPAgar(vehiculo ,litroConsumidos){
        if (vehiculo=="coche") {
             let pago = litroConsumidos*86
            if (litroConsumidos >=0 && litroConsumidos <=25) {
                pago = pago + 50
            } else (litroConsumidos > 25) 
                pago = pago +25;
        }
        else

        return totalAPAgar
    }
    console.log(totalAPAgar("coche,", 30))
    
   function totalAPAgar(vehiculo, litroConsumidos)
    {
    let total = 0
    if (vehiculo == "coche")
    {total = litroConsumidos + 86}

    else if (vehiculo == "moto")
    {total = litroConsumidos * 70}
 &&!@#$%^&*()_+}{P:"|?><"}
    else if (vehiculo == "autobus")
    {total = litroConsumidos * 55}

    if (litroConsumidos > 0 && litroConsumidos < 25)
    {total = total + 25}

    return total
    }
    //console.log(`El total a pagar es $ $ {total} ${veiculo}`);
    console.log("");
    console.log("El total a pagar es $ " + totalAPAgar(veiculo, litroConsumidos)); */
    /*function totalAPagar(vehiculo, litrosConsumidos) {
        let total = 0
        if (vehiculo == "coche")
        {total = litrosConsumidos * 86 }
    
        else if (vehiculo == "moto")
        {total = litrosConsumidos * 70 }
    
        else if (vehiculo == "autobus") 
        {total = litrosConsumidos * 55 }
    
    
        if (litrosConsumidos > 0 && litrosConsumidos < 25)
        {total = total + 50}
    
        else if (litrosConsumidos >25)
        {total = total + 25}
    
        return total
    }
    console.log("");
    console.log("El total a pagar es $ " + totalAPAgar(veiculo, litroConsumidos));

    let total = 0

let opcion_base = "pollo"
if (opcion_base == "pollo"){
    total += 150
}
else if(opcion_base == 'carne'){
    total += 200
}
else if(opcion_base == 'veggie'){
    total += 100
}
else{
    console.log("error opcion base");
}




let tipo_de_pan = "blanco"
if (tipo_de_pan == "blanco"){
    total += 50
}
else if(tipo_de_pan == 'negro'){
    total += 60
}
else if(tipo_de_pan == 's/gluten'){
    total += 75
}



console.log("total = " + total); 
let dia = "Viernes"
let clima = "Soleado"

if ( clima == `Soleado` && dia == `Sabado`){
    console.log(`Lindo dia para pasear`);
} else if(clima == `Soleado` && dia == `Domingo`){
    console.log(`Lindo dia para pasear`)
}else if(clima == `Soleado` && dia == `Viernes`){
    console.log(`Lindo dia para pasear`)
}else {
        console.log(`Hoy es un dia feo`);
}

let lenguaje = "javascript";
if ( lenguaje === `javascript`){
    console.log(`Estoy aprendiendo`);
}else {
        console.log(`aprendere mas tarde`);
        function puedePasar(nombre) {
    if (nombre == "Cosme Fulanito"){
        return(false)
    }else{
        return (true)
    }
}
} 
let dia = "jueves"
function finDeSemana (dia){
	switch (dia){
		case (dia == "viernes"):
		 	console.log("buen finde");
		    break;
	    case (dia == "lunes"):
		 	console.log("buena semana");
	        break;
        default:
			console.log("buen dia");
}
}
finDeSemana("lunes")
function factorial(num1) {
    if (num1 === 0 || num1 === 1)
      return 1;
    for (let i = num1 - 1; i >= 1; i--) {
      num1 *= i;
    }
    return num1;
  }

  console.log(factorial(5));
function sumatoria(numero2) {
    let a=0
    let b=1
    let c= 0
    for(let i=1; i<=numero2; i++){
        c =a + b;
        b = a;
        a = c;
        console.log(c)
    }*/

    let nombreComida = 'Gato barato'
    let respuesta = "dele a su gatito y casara ratoncitos"

    //funcion declarada
    function comer(nombre){
        return 'la comida se llama ' + nombre
    }

    comer('gato barato')

    //funcion expresada
    const besar = function (labios){
        return 'chape violento a ' + labios
    }    

    console.log( besar('mimi'))

    //arrow fuction

    const mirar = algo => 'estoy mirando a ' + algo

    let arrow = (par1, par2, par3) => {


        }