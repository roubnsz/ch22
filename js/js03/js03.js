
console.log("Sesion JS03");

// Declaracion de  bloque.

const datosUsuario = {nombre:"Jessica", ciudad:"CDMX"};

{
/*  Esto es una declaracion de bloque
    en donde las variables declaradas(let , const)
    solo tendran alcance dentro del bloque o
    bloques anidados dentro del bloque.
*/
    const datosUsuario = {nombre:"Wicho", ciudad:"Aguascalientes"};
    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    const numPersonas = 49;
    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    }
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);

// Condicional if
/*
Sintaxis:   if(condicionVerdadera) intruccion;

            if(condicionVerdadera) instrucciones;
            else{ instruccion contraria}
*/

const respuesta = true; //confirm("¿Te gusta el Rock?");
//console.log(respuesta);
let mensaje;

if(respuesta){
    mensaje = "entonces pongo Rolling Stones";
}
else
    mensaje = "Entonces que te gusta?";
console.log(mensaje);

// Operador ternario.
/*
sintaxis:   condicion ? condicionVerdadera : condicionFalsa;
*/

let teamFrio = true;//confirm("¿Te gusta el frio?");
//let mensajeTernario = teamFrio ? "Te mando Hielo" : "Te mando un cafe"; // ahorrando codigo
console.log(`Te voy a servir: ${ teamFrio ? "Helado":"Ponche"}`);


let cantante = "Morrison";
console.log(`tu cantante es ${ cantante === 'Morrison' ? "vocal":
                            cantante === 'Angus Young' ? "guitarra" : "guitarrista"}`);

/*                            
let marcaReloj;
if( cantante === 'Shakira' ) marcaReloj = "Rolex";
else{
    if( cantante === 'Pique') marcaReloj = "Casio"
    else marcaReloj = "el sol";
}
console.log(`tu reloj es ${marcaReloj}`);
*/


//condicional if, else, else if
/*
Sintaxis:   if(condicionVerdadera) intruccion;
            else if(segundaCondicion) instruccion
            else if(terceraCondicion) instruccion
            else instruccion;
*/

let  nombrePersona  =  'Karla' ;
let  marcaReloj ;
if (  nombrePersona  ===  'Shakira'  ) 
    marcaReloj  =  'Rolex' ;
else  if (  nombrePersona  ===  'Pique'  ||  nombrePersona  === 'Karla'  ) 
    marcaReloj  =  'Casio' ;
else if ( nombrePersona ===  ' Sergio ' )   
    marcaReloj  =  'el sol' ;
else 
    marcaReloj  =  'uno de autos' ;

console.log ( ` ${ nombrePersona } tu reloj es ${  marcaReloj } ` ) ;


// Operadores logicos and(&&) y or(||)
/* AND
A       B ->     C
true    true    true
true    false   false
false   true    false
false   false   false

OR
A       B ->    C
true    true    false
true    false   true
false   true    true
false   false   true
*/

/*
  Condicional switch
Sintaxis:
    switch(expresion){
        case valor1:
            instrucciones;
            break
        case valor2:
            instrucciones;
            break
        case valorN:
            instrucciones
            break
        default:
            instrucciones;
    }
*/
nombrePersona = 'Juan';
let marcaCalzado = '';

switch(nombrePersona){
    case 'Ruben':
        marcaCalzado = 'Nike';
        break;
    case 'Sergio':
    case 'Juan':
        marcaCalzado = 'Puma';
        break;
    case 'Raul':
        marcaCalzado = 'Jordan'
        break;
    default:
        marcaCalzado = 'N/A'
}
console.log(`switch - ${nombrePersona} tu marca de calzado es ${marcaCalzado}`);

/*
    Preguntar el numero de mes, del 1 al 12
    de acuerdo al mes indicado desplegar en consola
    la estacion del año:
    mes 12, 1, 2 = invierno
    mes 3, 4, 5 = Primavera
    mes 6, 7, 8 = Verano
    mes 9, 10, 11 = Otoño

    usar switch
*/

let mes = 8;//parseInt(prompt("ingresa un mes con numero del 1 - 12"));
let estacionAño = "";
switch(mes){
    case 12:
    case 1:
    case 2:
        estacionAño = 'Invierno';
        break;
    case 3:
    case 4:
    case 5:
        estacionAño = 'Primavera';
        break;
    case 6:
    case 7:
    case 8:
        estacionAño = 'Verano';
        break;
    case 9:
    case 10:
    case 11:
        estacionAño = 'Otoño';
        break;
    default:
        estacionAño = 'el numero ungresado no es un mes';
}
console.log(`El numero ingresado ${mes} pertenece a la estacion ${estacionAño}`);



let seleccionMes = 15;//parseInt(prompt('Inserta un numero del 1 - 12'))
let estacionDelAño;

if(seleccionMes === 1 || seleccionMes === 2 || seleccionMes === 12) estacionDelAño = 'Invierno';
else if(seleccionMes === 3 || seleccionMes === 4 || seleccionMes === 5) estacionDelAño ='Primavera';
else if(seleccionMes === 6 || seleccionMes === 7 || seleccionMes === 8) estacionDelAño = 'Verano';
else if(seleccionMes === 9 || seleccionMes === 10 || seleccionMes === 11) estacionDelAño = 'Otoño';
else estacionDelAño = 'N/A';

console.log(`El numero ingresado ${seleccionMes} pertenece a la estacion ${estacionDelAño}`);


//---------Refactorizando
function factorial( number ){
    if( number < 1) 
        return 1;
    return number * factorial( number - 1 )
}
console.log("Factorial 5 = " + factorial(5) ); //120

//Factorizado

function factorialTernario(number){
    return number < 1 ? 1:
    number * factorial(number - 1);
}
console.log(`Factorial 5 = ${factorialTernario(5)}`);


