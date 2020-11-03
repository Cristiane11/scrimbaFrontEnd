/*Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/
let message = 'some string';

console.log(typeof message);

// 1) Explicit type conversion

console.log(String(42));
console.log(Boolean(message));
/* 2) Implicit type conversion (coercion)
this example is when the JS convert the string to a number without we telling js
*/

console.log('1' * '2');