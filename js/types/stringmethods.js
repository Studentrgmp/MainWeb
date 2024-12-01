let str="hello"
console.log(str[0]="k");
console.log(str);

// it will take number as an parameter and gives the strings char of given index  
console.log(str.charAt(2));

// it will take char as an parameter and gives the index of that char
console.log(str.indexOf("l"));

// it will marge two or more srings
console.log(str.concat(" World"));
console.log(str.repeat(3));

// slics will extract the part of the string and gives the new one
// slics will take one ot two parameters.
// if one means from their(index) onwards it include all the char of the string
// if two it inculdes starting parameters and excludes ending parameters 
console.log(str.slice(1,3));

console.log(str.lastIndexOf("o"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let str1="  world  "

// trimstart will remove the void space which are  preceding(front) to the string
// console.log(str.trimestart())
// trimend will remove the void space which are after the to string
console.log(str1.trimStart());
console.log(str1.trimEnd());
console.log(str1);

// trim it will remove the void space start and end of the string
console.log(str1.trim());
console.log(str1);
console.log(str1.endsWith(" "));
console.log(str1.startsWith(" "));
console.log(str.includes("ol"));

let StrNum="00"
// padstart the first value takes length of the string and second one will add the value in front of it 
console.log(StrNum.padStart("5","65"));
console.log(StrNum.padStart("3","4"));

// padend the first value takes length of the string and second one will add the value in front of it
let StrNum1="20"
console.log(StrNum1.padEnd("5","25"));
console.log(StrNum1.padEnd("4","0"));

//  a var which  does not intit with value will through undefined
let y;
console.log(y);
console.log(typeof undefined);


// null is an error / bug in js becz it is value typed both variable pointing  to diff memory address ,if any change done in the variable it won't effect the other that is why it is iprimitive data type of null is object(non-perimitive data type).
let g=null;
let c=1
console.log(g);
console.log(typeof null);
g=c;
console.log(g);