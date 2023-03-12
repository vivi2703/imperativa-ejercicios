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
    let oportunidad = 3;
    while(oportunidad > 0) {
        var rta = prompt(preguntas[n_pregunta]);
        if (rta == respuestas[n_pregunta]) {
            console.log('Correcto!');
            puntaje = puntaje + 1;
            oportunidad = 0;
        } else {
            console.log('Incorrecto.')
        }
        oportunidad = oportunidad - 1;
        // console.log('oportunidad = ' + oportunidad);
    }
}
console.log('Su puntaje es: ' + puntaje);