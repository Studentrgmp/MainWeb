// hoisting

// behaviour hoisting in var keyword

console.log(a);//undefined
var a;
console.log(a);//undefined

// behaviour hoisting in let keyword

console.log(b);//Uncaught ReferenceError: Cannot access 'b' before initialization
//tdz
let b;
console.log(b);

// behaviour hoisting in const keyword

console.log(c);//Uncaught ReferenceError: Cannot access 'c' before initialization
//tdz
const c=25;
console.log(c);//25


console.log(z);//ReferenceError: z is not defined