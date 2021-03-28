/*******
Strings
*******/
/**************************************************************
a. Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).
***************************************************************/
var fullName = 'Melisa Daniela Bellico';
var res = fullName.toUpperCase ();
console.log(res);

/***************************************************************
b. Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los primeros 5 caracteres guardando
el resultado en una nueva variable (utilizar substring).
****************************************************************/
var fullName = 'Melisa Daniela Bellico';
var newStr = fullName.substring(0, 5);
console.log(newStr);

/***************************************************************
c. Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres guardando
el resultado en una nueva variable (utilizar substring).
****************************************************************/
var fullName = 'Melisa Daniela Bellico';
var newStrtwo = fullName.substring(19, 22);
console.log(newStrtwo);

/***************************************************************
d. Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con la primera letra en mayúscula y las
demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).
****************************************************************/
var fruit = 'strawberries';
var newStrThree = fruit.substring(0,1);
var newStrFour = fruit.substring(1);
var capAndLower = newStrThree.toUpperCase() + newStrFour.toLowerCase();
console.log(capAndLower);

/*****************************************************************
e. Crear una variable de tipo string con al menos 10 caracteres
y algún espacio en blanco. Encontrar la posición del primer espacio
en blanco y guardarla en una variable (utilizar indexOf).

******************************************************************/
var lastPetsNames ='Luna Sam Lassai Michu';
var blank = lastPetsNames.indexOf (" ");
console.log(blank);

/*****************************************************************
f. Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos
de los ejercicios anteriores para generar un nuevo string que tenga
la primera letra de ambas palabras en mayúscula y las demás letras
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).
******************************************************************/
var carModel = 'mitsubishi outlander';
var blankTwo = carModel.indexOf (" ");
var firstLetterFirstWord = carModel.substring(0,1);
var firstLetterSecondWord = carModel.substring(11,12);
var firstWord = carModel.substring(1,10);
var secondWord = carModel.substring(12,20);
var firstPlusSecondWord = firstLetterFirstWord.toUpperCase() + firstWord.toLowerCase() + " " + firstLetterSecondWord.toUpperCase() + secondWord.toLowerCase();
console.log(blankTwo);
console.log(firstPlusSecondWord);