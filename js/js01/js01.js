console.log("Sesion js01");

/* 7 datos primitivos de JavaScript
- String ("Hola Mundo")
- Number ( 1800.22 )
    Los numeros utilizan 64 bits para almacenarlo
    pero, solo se usan 53 bits para representar el numero 

- BigInt ( 1800n )
    convertir un dato numero a BigINT
    let bigIntVar = BigInt( maxNumber );
    bigIntVar + 1n

- Boolean ( true / false)
- Undefined ( No esta definido )
- Null
    Intencionalmente se borra el tipo de dato
- Symbol

tipos de datos Object:
- Object
    const myObject = { clave: "valor", datoBoolean: true, edad: 20 }
    myObject.clave
    res= "valor"
- Array
    const myArray = [15, "un texto", true];
    myArray[1];
    res= "un texto"
    modificar
    myArray[0] = "esto es un 15"
    res= ["esto es un 15", "un texto, true"]

    myArray.join(" ");
    res='esto es un 15 un texto true'

Funciones
*/

//conversiones de datos

const numString = '1569';
numString + 3;
res= '15693'

parseInt(numString + 3);
console.log(numString);

console.log(5/0);

console.log(3/"bob");
console.log(isNaN(NaN));
console.log(Math.pow(2,3));
console.log(typeof(Infinity));