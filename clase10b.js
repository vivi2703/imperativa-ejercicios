Strings
● miTexto.length:
○ Devuelve la longitud del texto miTexto.
● miTexto.indexOf(textoABuscar):
○ Devuelve el índice donde está el texto a buscar, si no existe devuelve -1.
● miTexto.slice(inicio, fin): // inicio y fin son posiciones
○ Devuelve el subtexto de miTexto que empieza en inicio y termina en la
posición fin.
● miTexto.slice(ini):
○ Devuelve el subtexto de miTexto que empieza en ini hasta el final.
● miTexto.slice(-n):
○ Devuelve el subtexto de miTexto que empieza en la posición n contando
desde atrás hasta el final.

● miTexto.trim():
○ Devuelve miTexto eliminando los espacios que existan al principio y al final.
● miTexto.split(“,”): // cualquier string
○ Devuelve un array con strings a partir de separar miTexto donde existe una
“,”.

● miTexto.split(“”): // carácter vacío
○ Devuelve un array con todos los caracteres del texto separados.
● miTexto.split(): // sin parámetros
○ Devuelve un array con un único elemento que es miTexto.
● miTexto.replace(textoABuscar, nuevoTextoParaReemplazar):
○ Devuelve a miTexto, pero reemplazando textoABuscar por
nuevoTextoParaReemplazar (primera vez).

● miTexto.toUpperCase():
○ Devuelve miTexto, pero convirtiendo todo a mayúsculas.
Arrays
● miArray.length:
○ Devuelve la cantidad de elementos del array.
● miArray.push(elemento1, elemento2, ...., elementox):
○ Modifica miArray agregando elemento1, elemento2, ..., elementox al final de
miArray y devuelve la nueva cantidad de elementos de miArray.

● miArray.pop():
○ Modifica miArray eliminando el último elemento y devuelve el elemento
eliminado.
● miArray.shift():
○ Modifica miArray eliminando el primer elemento y devuelve el elemento
eliminado.

● miArray.unshift(elemento1, elemento2, ..., elementox):
○ Modifica miArray agregando elemento1, elemento2, ..., elementox al
principio de miArray y devuelve la nueva cantidad de elementos de miArray.

● miArray.join():
○ Junta los elementos de miArray y devuelve todo en un string unidos por “,”.
● miArray.join(divisorDeElementos):
○ Junta los elementos de miArray y devuelve todo en un string unidos por el
texto divisorDeElementos. Por ejemplo: [“A”, “B”].join(“/”) devolverá “A/B”.

● miArray.indexOf(elemento):
○ Busca al elemento en miArray. Si existe, devuelve la primera posición donde
lo encuentra. Si no, devuelve -1.
● miArray.lastIndexOf(elemento):
○ Busca al elemento en miArray empezando desde atrás (desde el último
elemento). Si existe devuelve la posición de la primera vez que lo encuentra
contando desde atrás. Si no, devuelve -1. Por ejemplo: [“a”, “b”, “c”,
“b”].lastIndexOf(“b”) devuelve 3 porque empezó a buscar desde atrás y la
primera vez que lo encontró es en la última posición.

● miArray.includes(elemento):
○ Busca al elemento en miArray. Si existe, devuelve true. Si no, false.