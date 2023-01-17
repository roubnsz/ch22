console.log("Sesión js04");

const nombresCh22 = ["Leonardo", "Melanie", "Juan"];
const nombresCh14 = new Array("Andres", "Sebas", "Maga");

console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];

//esta linea crea un array de 24 elementos
const promedioEdadesCh14 = new Array(24);

console.log(promedioEdadesCh22);
console.log(promedioEdadesCh14);
//conocer la longitud de un arreglo
console.log(`Num de elementos ${promedioEdadesCh22.length}`);
console.log(`Num de elementos ${promedioEdadesCh14.length}`);

/* Se recomienda declarar los arrays(objetos) con const
para prevenir que se cambie el tipo de dato*/

const armasCh22 = ["manoplas", "picahielo"];

//Leer un elemento de arreglo
console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Jessica tiene un ${armasCh22[0]}`);

//cambiar un dato del arreglo
// los objetos son datos mutables
armasCh22[0] = "filero";

let  nombreClica = "Los Wichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica = "The wichales"; //se cambia la variable completa 

//agregamos un nuevo dato al arreglo, al final.
armasCh22[2] = "machete";// en un indice que existe lo reemplaza en este unicamente lo crea.

armasCh22[armasCh22.length] = "macana";// para saber cual era elultimo y agregarlo
armasCh22.push("cadena", "bate");// Push agrega al final y la mas usada


armasCh22.unshift("navaja", "desarmador");// unshift agrega al principio
console.log(armasCh22);


//Ciclo for
/*
Sintaxis: for(instruccionInicio; comparacion; expresionFinal){
    instrucciones;
}
for(let i = 0; i <= 10; i++){
    instrucciones;
}
*/ 
//Iteramos los arreglos
for(let i = 0; i < armasCh22.length; i++){
    console.log(`Indice ${i} tiene ${armasCh22[i]}`);
}

//armasCh22.forEach( callbackFunciion )
function iterarArreglo( elemento, indice, arreglo){
    console.log( `Indice ${indice} tienes ${elemento}`);
}
armasCh22.forEach(iterarArreglo);

//el mismo con funcion flecha
armasCh22.forEach((elemento, indice) =>
console.log(`AF ${indice} tiene ${elemento}`));

//va a iterar los indices del arreglo
for(let arma in armasCh22)
console.log(`ForIn ${arma} tiene ${armasCh22[arma]}`);

// va a iterar los elementos del arrego
for(let arma of armasCh22)
console.log(`for of arma: ${ arma}`);

//iterar de forma descendente las armas
for(let i = armasCh22.length -1; i >=0; i--){
    console.log(`Armas: ${armasCh22[i]}`);
}

//Para el ciclo for no es necesario indicar el inicio,
//la comparacion, la expresion final.
let iteracion = 0;
for( ; ; ){
    console.log("Valor de i " + iteracion);
    if(iteracion === 10) break;
    iteracion++;
}

// La instruccion break rompe con la iteracion.
// La istruccion continue continua con la siguiente instruccion;
for(let i = 0; i <= 10; i++){
    if(i === 5) break;
    console.log("For con break: " + i);
}

for(let i = 0; i <= 10; i++){
    if(i === 5) continue;
    console.log("For con break: " + i);
}

const participantes = [
    ["Jose", "Maria", "Pedro"],
    ["Tan", "Javi", "Andrea", "Santiago"],
    ["Melanie", "Pavel"]
];
console.log(participantes[1][2]);


for(let fila = 0; fila < participantes.length; fila++) {
    console.log(participantes[fila]);
    for(let columna = 0; columna < participantes[fila].length; columna++){
        console.log(participantes[fila][columna]);
    }
}

// Usando break en ciclos anidados
//dejar de mostrar los nombres, cuando se encuentre Tan

//Usando una variable como bandera
let continuarIteraciones = true;
for (let fila = 0 ; fila< participantes.length; fila++){
    if( continuarIteraciones){
        for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${fila}][${columna}]`);
            if ( continuarIteraciones)
                console.log("Uso de break " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tan") continuarIteraciones= false;
        }
    }   
}

// Usando Break
cicloFila:
for(let fila = 0; fila < participantes.length; fila++) {
    cicloColumna:
    for(let columna = 0; columna < participantes[fila].length; columna++){
        console.log(`[${fila}][${columna}]`);
        console.log("uso de break " + participantes[fila][columna]);
        if(participantes[fila][columna] === "Tan") break cicloFila;
    }
}

cicloFila:
for(let fila = 0; fila < participantes.length; fila++) {
    cicloColumna:
    for(let columna = 0; columna < participantes[fila].length; columna++){
        if(participantes[fila][columna] === "Tan") continue cicloFila;
        console.log(`[${fila}][${columna}]`);
        console.log("uso de continue " + participantes[fila][columna]);      
    }
}

// While
let numIteracion = 0;
//while(confirm("Quieres segir iterando?")){
 //   console.log("iteracion n. " + numIteracion++);
//}

// Preguntar de 1-10 y saber que numero penso el usuario

let numero =1;
//while( !confirm(`${numero} es tu numero?`)){
//    number++;
//}
//console.log("Tu numero es el " + number);


number = 0;
//while( !confirm(`${++numero} es tu numero?`));// ! es negacion
//console.log("Tu numero es el " + number);

//ciclo do-while
/*
Sintaxis:
    do {
        instrucciones;
    } while(condicion_verdadera);
*/
let valor = 3;
while(valor < 5){
    console.log("while " + valor);
    valor++;
}

valor = 10;
do{
    console.log("do while " + valor);
    valor++;
}while( valor < 5);


/*
    FIFO:  first input first output
    LIFO: last input first output
*/
// FIFO
const alimentosPerecederos = [];
//Agregando una caja.
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("manzanas miercoles");
//sacando manzanas del lunes
console.log("Sacando a la venta " + alimentosPerecederos.shift());// Lunes
console.log("Sacando a la venta " + alimentosPerecederos.shift());// Miercoles

//LIFO
//ferreteria
const productos = ["desarmadores", "cemento"];
//agrego luces navideñas en diciembre
productos.push("Luces navideñas");
console.log("Sacando a la venta " + productos.pop());

