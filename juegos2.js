const prompt = require("prompt-sync")({ sigint: true});

let preguntas = [
    "Como se llama la gata de Vero?",
    "Cuantos anios tiene Mimi?",
    "En que provincia nacio Vero?",
    "Como se llama la marca de Vero?"
]
let respuestas = [
    "Mimi", 3, "San Juan", "Versivila"
]
let puntaje = 0;
for(let n_pregunta=0; n_pregunta < preguntas.length; n_pregunta++) {
    // para cada pregunta, permito hasta 3 intenetos para responder bien
    let oportunidad = 3;
    // en el while, cada vez baja en 1 el valor de oportunidad (si responden mal)
    // 3 >= 0?true ; 2 >= 0?true ; 1 >= 0?true ; 0 >= 0?true pero 0 > 0?false
    while(oportunidad > 0) {
        var rta = prompt(preguntas[n_pregunta]);
        if (rta == respuestas[n_pregunta]) {
            console.log('Correcto!');
            // si respondio correctamente, aumento el puntaje
            puntaje = puntaje + 1; 
            // hago que deje de intentar esta pregunta (porque ya contesto bien)
            oportunidad = 0;
        } else {
            // si respondio mal, no aumento el puntaje
            console.log('Incorrecto.')
        }
        oportunidad = oportunidad - 1;
        // console.log('oportunidad = ' + oportunidad);
    }
}
console.log('Su puntaje es: ' + puntaje);