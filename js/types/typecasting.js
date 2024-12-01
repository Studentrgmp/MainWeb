//ITC

console.log(5+3);//8

console.log(53+3+"3");//563

console.log(4+3+"6"+"hi"+1);//76hi1

console.log(4+55+"6"-2);//563

console.log("100"-"2");//98

console.log("hello"-1);//NAN

console.log(2+77+null-1);//78

console.log(4+3*"3");//13

console.log(undefined+null);//NAA

console.log(4+3/"2");//5.5

console.log(null+"null");//nullnull

// ExTC

let a=String(2)
console.log(a,typeof a);//2 string

let b=Number("1")
console.log(b,typeof b);//1 'number'

let b1=Number("hello")
console.log(b1,typeof b1);//NaN 'number'

let b2=Boolean(0);
console.log(b2,typeof b2);//false 'boolean'

let b3=Boolean(1)
console.log(b3,typeof b3);//true 'boolean'

let b4=Number(true)
console.log(b4,typeof b4);//1 'number'

let b5=Number(false)
console.log(b5,typeof b5);//0 'number'

let b6=Boolean(null)
console.log(b6,typeof b6);//false 'boolean'

console.log(typeof NaN,typeof null);

const j="25"
const e=3
let sum=j-e
console.log(sum);