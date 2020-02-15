//Built-in Objects exercises.

/*---------- String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/

/*------------------------------ Solución ------------------------------------------- */
function str(string) {
    console.log(string.length);
}

str("Hola Mundo");

/*----------------------------------------------------------------------------------- */



/*---------- Number ----------*/
/*
crear una función que reciba un number, que haga lo siguiente:
* Determinar si el numero recibido es un número entero.
* En caso de ser entero, hacer un console.log avisando que es un entero. 
* En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.

Ex:
myFunc(number);
posibles casos:
a) el número es un entero :3
b) el número ahora es un entero con valor de (valor) ;)
*/

/*------------------------------ Solución ------------------------------------------- */
function nmbr(number) {
    if (Number.isInteger(number)) {
        console.log(`El número ${number} es un entero`);
    } else {
        console.log(`El número ${number} ahora es un entero con valor ${Number.parseInt(number)}`);
    }

}

nmbr(42);

/*----------------------------------------------------------------------------------- */



/*---------- Boolean ----------*/
/*
Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
* El numero de caracteres que representan el valor del boolean recibido.

Ex:
var flag = true;
myFunc(flag);
expected result:  4 caracteres.
*/

/*------------------------------ Solución ------------------------------------------- */

function bln(boolean) {
    console.log(boolean.toString().length);
}

bln(true);

/*----------------------------------------------------------------------------------- */



/*---------- Object ----------*/
/*
crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
* El numero de propiedades que contiene el objeto.
* El nombre de cada una de las propiedades del objeto.
* El valor de cada una las propiedades del objeto.

Ex:
myFunc(obj);
*/

/*------------------------------ Solución ------------------------------------------- */
let user = {
    name: "admin",
    email: "admin@admin.com",
    password: "admin123",
}

function obj(object) {
    console.log("El número de propiedades es: " + Object.keys(object).length);
    console.log("Los identificadores son: " + Object.keys(object));
    console.log("Los valores de los identificadores son: " + Object.values(object));
}

obj(user);

/*----------------------------------------------------------------------------------- */



/*---------- Function ----------*/
/*
Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
* El número de argumentos que espera la funcion.

Ex:
var sum = new Function('a','b','c', 'return a + b + c');

myFunc(sum);
result: 3.
*/

/*------------------------------ Solución ------------------------------------------- */


function fcn(funct) {
    console.log("El número de parámetros que recibe la función es: " + funct.length);
}

fcn(new Function('a', 'b', 'return a + b'));
/*----------------------------------------------------------------------------------- */



/*---------- Array ----------*/
/*
Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:

var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/

/*------------------------------ Solución ------------------------------------------- */

let games = ["Gris", "Bayonetta"];

function arr(array, desiredLength, template) {
    let difference = desiredLength - array.length;
    if (difference === 1) {
        array.push(template);
        console.log(array);
    } else if (difference > 1) {
        console.log("El arreglo es menor por: " + difference);
    } else {
        console.log("El arreglo es mayor por: " + Math.abs(difference));
    }
}

arr(games, 3, 'Pokemon');

/*----------------------------------------------------------------------------------- */



/*---------- Date ----------*/
/*
Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */
function date() {
    var today = new Date();
    console.log(today.toISOString());
    console.log(Date.now());
}

date();
/*----------------------------------------------------------------------------------- */



/*---------- Math ----------*/
/*
Crear una función que reciba dos numeros (base y exponente). 
la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
determinada por exponente, al final mostrar este resultado usando console.log.

Ex:

myFunc(-3, 2) 
result = 9;
*/

/*------------------------------ Solución ------------------------------------------- */

function exp(base, exponent) {
    let valueabs = Math.abs(base);
    console.log(Math.pow(valueabs, exponent));
}

exp(-1, 10);

/*----------------------------------------------------------------------------------- */



/*---------- RegExp ----------*/
/*
Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
* Determine si str cumple con el patrón.
* Si cumple, remplazar el las incidencias del patron con el valor de template.
* Mostar el resultado usando console.log.
* Si no, mostrar un mensaje de no coincidencia usando console.log

Ex:
myFunc(str, template)
*/

/*------------------------------ Solución ------------------------------------------- */

var rg = new RegExp(/([A-Z])/);

function regex(str, template) {
    if (rg.test(str)) {
        newstring = str.replace(rg, template);
        console.log(newstring);
        return;
    }
    console.log("No encuentro coincidencias");
}
regex("nombre", "Ja");

/*----------------------------------------------------------------------------------- */



/*---------- Error ----------*/
/*
Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */
//function error(number) {
  //  if (number <= 10) {
  //      console.log("El valor está dentro de los parámetros");
  //      returnÑ
  //  }
  //  throw new Error("El valor está fuera de los parámetros");
//}

//error(15);


/*----------------------------------------------------------------------------------- */


/*---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso:
Crear un objeto para un usuario, que contenga su id, nombre de usuario, email, contraseña
y los comentarios (con id) que va escribiendo en la plataforma y cada vez que comente algo,
se añada un nuevo comentario en su objeto 
Mostrar la solución en código:
*/
let user2 = {
    id_user: 0,
    name: "",
    email: "",
    password: "",
    comment: [[1, "sfsa"], [2, "sfasd"]]
}

function add_comment (commentmade, user){
        let identify = user.comment;
        let array = [(identify.length + 1), commentmade]
        user.comment.push(array);
}

add_comment("Me gusta tu foto", user2);