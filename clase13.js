function aumentarEdad(datos)
{
    for(let i=0;i<datos.length;i++)
    {
        datos[i].edad++;
    }
}
function aumentarEdad2(datos)
{
    for(let i=0;i<datos.length;i++)
    {
        if(datos[i].edad<6)
        {
            datos[i].edad++;
        }
        else if (datos[i].edad<=10)
        {
            datos[i].edad+=2;
        }
        else
        {
            //let calculo=datos[i].edad/2;
            //datos[i].edad+=calculo;
            datos[i].edad+=edad/2;
            //datos[i].edad+=edad/2;
        }
    }
}
function generarID(datos)
{
    for(let i=0;i<datos.length;i++)
    {
        datos[i].id=i+1;
    }
}
//if(datos[i].edad>6 && datos[i].edad<10)

function mostrarElementos(datos)
for(let i=0;i<misMascotas.length;i++)
{
    console.log(misMascotas[i].nombre);
    console.log(misMascotas[i].edad);
    console.log(misMascotas[i].emitirSonido());
}

let misMascotas=[
    {
        nombre:"milanesa",
        raza:"Gran danes",
        edad: 5,
        sonido:"guaf",
        emitirSonido:function( ){
            //return this.sonido +" "+ this.sonido;
            return `${this.sonido}${ this.sonido}`;
        }
    },
    {
        nombre:"salem",
        raza:"criollo",
        edad: 3,
        sonido:"miau",
        emitirSonido:function( ){
            //return this.sonido +" "+ this.sonido;
            return `${this.sonido}${ this.sonido}`;
        } 
    },
    {
        nombre:"enola",
        raza:"pomsky",
        edad: 1,
        sonido:"guau",
        emitirSonido:function( ){
            //return this.sonido +" "+ this.sonido;
            return `${this.sonido} ${ this.sonido}`;
        }
    }
]
/*
aumentarElementos(misMascotas);
aumentarEdad2(misMascotas);
aumentarElementos(misMascotas);
aumentarID(misMascotas);
console.log("con id");
for(let i=0;i<misMascotas.length;i++)
{
    console.log("ID:"+misMascotas[i].identificador);
    console.log("Nombre"+misMascotas[i].nombre);
    console.log(misMascotas[i].edad);
    console.log(misMascotas[i].emitirSonido());
}*/
console.log(misMascotas);
console.table(misMascotas);