// let obj={id:1}
// let obj1={id:2}
// console.log(obj);
// console.log(obj1);

// obj=obj1

// obj.id=4

// console.log(obj);
// console.log(obj1);

// let a=1
// let b=2
// console.log(a);
// console.log(b);

// a=b
// b=4
// console.log(a);
// console.log(b);

// let x=String(0201-129)
// console.log(x,typeof x);

// let C=String(01235)
// console.log(C,typeof C);

// let z=Boolean(011456)
// console.log(z,typeof z);

// let A=BigInt(2)
// console.log(A,typeof A);

// let S=String(013)
// console.log(S,typeof S);

// let D=String(456)
// console.log(D,typeof D);

let f=[1,2]
let g=[3,4]
console.log(f);
console.log(g);
f=g
g.push(8,9,10);
console.log(f);
console.log(g);

let str="hello"
console.log(str,typeof str);

let str1='hello'
console.log(str1,typeof str1);

let str2=`hello`
console.log(str2,typeof str2);

let a=["abc",'xzy']
let b=[`xyz`,"klmo",'hello']
console.log(a);
console.log(b);

a=b
b.push(4,5)
console.log(a);
console.log(b);

//backtick is also called as template literal.
//inside backtick we should use interpolatons that is ${} , it always fetechs the value of variable.  

let empid=1
let empName="ABC"
let empsal=1000
console.log("the empl Name is "+empName+" and id is "+empid+" salary is "+empsal);
console.log(`the empl Name is ${empName} and id is ${empid} and salary is ${empsal}`);

//string methods 

let strva="java script"
console.log(strva.split("").reverse().join(""));
console.log(strva.split("+").reverse().join("+"));

//split converts String into array
// reverese will reverse the char present in the array
//join converts array to string

let trueValue=true
let falseValue=false
console.log(trueValue,typeof trueValue);
console.log(falseValue,typeof falseValue);

let funTrue=Boolean(true)
let funFalse=Boolean(false)
console.log(funTrue,funFalse);

let trueCon=new Boolean(true)
console.log(trueCon);
let falseCon=new Boolean(false)
console.log(falseCon);

let boolEan=Boolean("");
console.log(boolEan);

console.log(3>=3);

//big int

let safeNumber=Number.MAX_SAFE_INTEGER
console.log(safeNumber);

let bigNumber=1
console.log(bigNumber,typeof bigNumber);

let bigint=BigInt(1)
console.log(bigint,typeof bigint);
console.log(bigNumber===bigint);

let bigint2=1n
console.log(bigint===bigint2);

console.log(BigInt(1)===1n);

console.log(1=="1");

console.log(!true);
console.log(!false);
console.log(Boolean(!null));
console.log(Boolean(!undefined));
console.log(Boolean(BigInt(0n)));
console.log(Boolean());

console.log(Number(BigInt(1n)));
console.log(null==undefined);
console.log(null===undefined);