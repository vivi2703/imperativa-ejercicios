// Preguntas y respuestas.

// [] ===> tecla a la derecha de la 'p'
// {} ===> shift + tecla a la derecha de la 'p'
// =  ===> 2da tecla a la derecha del '0'

const prompt = require("prompt-sync")({ sigint: true});

let preg1 = "Como se llama la gata de Vero?"; let respuesta_correcta1 = "Mimi";
let preg2 = "Cuantos anios tiene Mimi?"; let respuesta_correcta2 = 3;
let preg3 = "En que provincia nacio Vero?"; let respuesta_correcta3 = "San Juan";

// Empieza el juego
let oportunidad = 3;
let puntaje = 0;
// pregunta 1 
//console.log('oportunidad = ' + oportunidad);
// while(oportunidad >= 0) {
while(oportunidad > 0) { // 3 >= 0?true ; 2 >= 0?true ; 1 >= 0?true ; 0 >= 0?true pero 0 > 0?false
    var rta1 = prompt(preg1);
    if (rta1 == respuesta_correcta1) {
        console.log('Correcto!');
        puntaje = puntaje + 1;
        oportunidad = 0;
    } else {
        console.log('Incorrecto.')
    }
    oportunidad = oportunidad - 1;
    // console.log('oportunidad = ' + oportunidad);
}
oportunidad = 3;
while(oportunidad > 0) {
    var rta2 = prompt(preg2);
    if (rta2 == respuesta_correcta2) {
        console.log('Correcto!');
        puntaje = puntaje + 1;
        oportunidad = 0;
    } else {
        console.log('Incorrecto.')
    }
    oportunidad = oportunidad - 1;
    // console.log('oportunidad = ' + oportunidad);
}
oportunidad = 3;
while(oportunidad > 0) {
    var rta3 = prompt(preg3);
    if (rta3 == respuesta_correcta3) {
        console.log('Correcto!');
        puntaje = puntaje + 1;
        oportunidad = 0;
    } else {
        console.log('Incorrecto.')
    }
    oportunidad = oportunidad - 1;
    // console.log('oportunidad = ' + oportunidad);
}
console.log('Su puntaje es: ' + puntaje);