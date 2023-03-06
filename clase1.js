let edad=23 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas) 


function impar(edad){ // funcion que se encargar de validar si es impar o no su edad
    if ((edad % 2) !== 0 ){ 
        console.log("¿Sabías que tu edad es impar?")}}

if(edad<0){ // Pregunta si es un numero negativo
    console.log("Error, edad inválida. Por favor ingrese un número válido." )
}
else if(edad<18) { 
    console.log("No puede pasar al bar.") 
    impar(edad)
}
else if(edad<21){ 
    console.log("Puede pasar al bar, pero no puede tomar alcohol.") 
    impar(edad)
} 
else if(edad==21){ 
    console.log("bienvenido rey!!!") // Pregunta si tiene 21
    impar(edad)
}
else{ 
    console.log("Puede pasar al bar y tomar alcohol.") 
    impar(edad)
}
function totalAPagar(vehiculo, litrosConsumidos) {
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
