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
// truthy (true)
// falsy (false)

if (0) {
    console.log('run');
  } else {
    console.log('skipped');

    
// falsy (false) condition that is false 

// false
// 0
// ''
// null
// undefined
// NaN
// 1) Avoid direct comparisons in conditionals

const username = null;

if (!username) {
  console.log('no user');
}

// 2) Use triple equals === (strict equals operator) 

// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }
// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}