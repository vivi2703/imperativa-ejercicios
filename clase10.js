/*let nombres = ["Nacho", "Dario", "Javier"];
let edades = [34, 28, 37, 40, 43];
let valoresDeVerdad = [true, false, true];
let variados = ["Nacho", 34, true, false, [34, 28, 37, 40, 43]];
//console.log(variados[4][1]);
console.log(edades + valoresDeVerdad);

let notas = [3, 5, 10, 9, 7, 8, 8, , 8];

notas.push(1);
notas.push(2);
notas.push(4);

let elUltimo = notas.pop();

console.log(notas);
console.log(elUltimo);
let notas = [3, 5, 10, 9, 7, 8, 8, , 8];

notas.push();
notas.push();

notas.unpush(1);

notas.push(4);
notas.push(4);

notas.pop();

console.log(notas);

let notas = [3, 5, 10, 9, 7, 8, 8];

console.log(notas);
const prompt = requiere("prommpt-syne")({ signint: true});

let arrayCorreosPendientes = [
`iroman@digitalhouse.com`,
`loki%digitalhouse.com`,
`loki@digitalhouse.com`,
`thanosdigitalhouse.com`,
`thanos@digitalhouse.com`,
]
// array de correos admitidos
let arrayCorreosAgregados = [
`iroman@digitalhouse.com`,
`loki@digitalhouse.com`,
`thanosdigitalhouse.com`,
];
let arrayCorreosDescartados = [];

function esValida(correo)
{
    let lugar=correo.indexOf("@");
    if (lugar===-1){
        return false;}
        else{
            return true;
        }
        // return correo.indexOf(@)!==-1
}
function verificarCoreeos(correo, validos, descartados){
    // tu codigo
    for(let pos=0; pos<arrayCorreosDescartados.length; pos++){
      if(esValido(correos[pos])){
}
else
{
     descartados.push(correos[pos]);
}
correos.shift(correos[pos]);
}
verificarCoreeos(arrayCorreosDescartados,arrayCorreosPendientes,arrayCorreosAdmitidos);
console.log("--Array de correos admitidos: " + "longitud de array" + arrayCorreosDescartados);
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Destacados:" + "longuitud de array" + "longuitud de array" +arrayCorreosPendientes);
console.log(arrayCorreosPendientes);

let nuevoMeil=promt("Ingresa tu meil: ");
if (esValida(nuevoMeil))
{
    arrayCorreosAdmitidos.push
}

//tarea d ela clase 10
 let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])*/

let peliculas = [
    `star wars`,
    `totoro`,
    `rocky`,
    `pulp fiction`,
    `la vida es bella`,
]
console.log(peliculas[2]);
// El nombre de la funcion es aMayusculas
// aMayusculas recibe un parametro llamado listaDePeliculas

/*function aMayusculas(listaDePeliculas){
    for(let pos=0; pos<listaDePeliculas.length; pos++){
        let x = listaDePeliculas[pos].toUpperCase();
        console.log(x)
    }

}*/
function aMayusculas(listaDePeliculas){
    let respuesta = []
    for(let pos=0; pos<listaDePeliculas.length; pos++){
        let x = listaDePeliculas[pos].toUpperCase();
        respuesta += [x]
    }
    return respuesta
}
let en_mayuscula = aMayusculas(peliculas);
console.log(en_mayuscula)


    








