/*******
Arrays
*******/
/************************************************************************
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
"Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];  

console.log(months[4], months[10]);

/************************************************************************
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola
(utilizar sort).

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var order = months.sort();

console.log(order);

/************************************************************************
c. Agregar un elemento al principio y al final del array (utilizar 
unshift y push).

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
months.unshift("2020");
months.push("2021");

console.log(months);

/************************************************************************
d. Quitar un elemento del principio y del final del array (utilizar shift 
y pop).

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
months.shift(months);
months.pop(months);

console.log(months);

/************************************************************************
e. Invertir el orden del array (utilizar reverse)

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
months.reverse(months);

console.log(months);

/************************************************************************
f. Unir todos los elementos del array en un único string donde cada mes 
este separado por un guión - (utilizar join).

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

console.log(months.join('-'));

/************************************************************************
g. Crear una copia del array de meses que contenga desde Mayo hasta 
Noviembre (utilizar slice).

**************************************************************************/
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var selection = months.slice(4,11);

console.log(selection);