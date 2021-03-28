/***********************
Variables and Operators
***********************/
/*************************************************************
a. Crear dos variables numéricas y utilizar el operador suma
para guardar el valor de la suma de ambos números en una tercer
variable.
**************************************************************/
var firstNumber, secondNumber;
firstNumber = 80;
secondNumber = 20;
var sum = firstNumber + secondNumber;
console.log(sum);

/*****************************************************************
b. Crear dos variables de tipo String y concatenarlas guardando el
resultado en una 3er variable.
******************************************************************/
var firstName = 'Melisa';
var nationality = 'Argentine';
var personalInformation = firstName + " " + nationality;
console.log(personalInformation);

/**********************************************************************
c. Crear dos variables de tipo String y sumar el largo de cada variable
(cantidad de letras del string) guardando el resultado la suma una 3er
variable (utilizar length).
**********************************************************************/
var city = 'Rosario';
var country = 'Argentina';
var residenceLength = city.length + country.length;
console.log(residenceLength);