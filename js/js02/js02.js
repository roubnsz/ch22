console.log("Sesion JS02");

/*
Funciones declaradas / funciones definidas
(function declaracion / function statement)

Una caracteristica de las funciones declaradas
es que tiene hoisting (elevacion).

*/

console.log("El resultado de 5 * 10 = " + multiplica(5, 10));

function multiplica(a, b) {
    return a * b;
}

/*
Funciones expresadas

las funciones expresadas (function expressions) son funciones
que son declaradas dentro de la asignacion de una variable.

estas funciones pueden ser anonimas (no tienen nombre).
las funcione sexpresadas no tienen hoisting.

*/
/**
 * Suma dos valores
 * @param {number} a primer operador para sumar 
 * @param {number} b segundo operador para sumar 
 * @returns resultado de a + b; 
 */
const suma = function(a, b) {
    const result = a + b;
    return result;
;}

console.log("La sumatoria de 4 + 6 = " + suma(4, 6));

/*
Funciones autoinvocadas.

Las funciones autoinvocadas( selft-invoking functions)
son funciones que se ejecutan en su definicion.
pueden ser anonimas.
*/

(function saludo(){
    console.log("Hola, me estoy autoinvocando");
})(); // los parentesis invocan la funcion

/*
Funciones flecha

Una funcion flecha (arrow functions) son similares
a las funciones expresadas, pero requiere la palabra
function. Ademas, si solo tiene una instruccion y es el retorno,
no requiere la intruccion return y las llaves {}.
las funcione flecha no tienen hoisting.
*/

const restaExpresada = function (a, b){
    return a-b;
}

const resta = (a, b) => a - b; // si lleva mas lineas o llaves si lleva el return
console.log("La resta de 20 - 2 = " + resta(20, 2));

const exponenteAlCuadrado = a => a ** 2; // si lleva solo un parametro se puede evitar parentesis
console.log("El numero 4^2 = " + exponenteAlCuadrado(4));

const imprimeSaludo = () => console.log("holaaa!");
imprimeSaludo();

/*
Funciones con parametros inicializados.
*/
function divide(a=3, b=1){
    return a / b;
}
console.log("La division de 3 / 1 = " + divide(5)); // este parametro lo tomaria a pero igual se pueden reasignar

/*
Rest parameters
El parametro rest nos permite representar una serie de valores
indefinidos en los argumentos como un array.
*/
function sumatoriaIndefinida(a, b, ...restoDatos){
    let sumatoria = a + b;
    for(let i = 0; i < restoDatos.length; i++) {
        sumatoria += restoDatos[i]; // sumatoria = sumatoria + restoDatos[i];
    }
    return sumatoria;
}
console.log("sumar varios numeros: " + sumatoriaIndefinida(2, 3, 4, 5));

/*
Funciones recursivas.
funciones recursivas es una funcion que se llama a si mismo.
*/
//Factorial de 0 = 1; 
//Factorial de 3 = 3 * 2 * 1; = 6
//Factorial de 5 = 5 * 4 * 3 * 2 * 1; = 120

function factorialConCicloFor(a){
    let total = 1;
    for(i = 1; i <=a; i ++){
        total *= i;
    }
    return total;
}
console.log(factorialConCicloFor(6));

function factorialConRecursion(a){
    if( a < 1) return 1;
    return a * factorialConRecursion(a - 1)
}

console.log("factorial 3 = " + factorialConRecursion(6));