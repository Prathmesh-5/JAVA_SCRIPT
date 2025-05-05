// string ko declare karne ka tareka : Object hota hai

// 1.
let name="Prathmesh Chauhan";

console.log(name); // Prathmesh chauhan
console.log(name[1]); // r


// 2.
let subject=new String("Computer Science");

console.log(subject); // [String: 'Computer Science']
console.log(subject[4]); // u

// ******************
console.log("My name is: ",name,"and i choose ",subject,"subject");
//*******************
console.log(`My name is ${name} and i choose ${subject} subject`); // More Prefer

// seeing some methods used in string :

// uppercase
console.log(name.toLowerCase()); // prathmesh chauhan
console.log(name.toUpperCase()); // PRATHMESH CHAUHAN
console.log(subject.toUpperCase()); // COMPUTER SCIENCE

/*  slicing
p   r  a  t  h  m  e  s   h 
0   1  2  3  4  5  6  7   8
-9 -8 -7 -6 -5 -4 -3 -2  -1

[ inclusive , exclusive )

*/
console.log(name.slice(0,5)); // Prath
console.log(name.slice(3)); // thmesh Chauhan
console.log(name.slice(-5,-2)); // auh


console.log(name.charAt(3)); // t
console.log(name.indexOf('t')); // 3

// example of replace()
console.log(name.replace(name,subject)); // Computer Science
console.log(name); // Prathmesh Chauhan

// example of includes()
console.log(name.includes("esh"));

// usage of trim()
let xyz="   raj  chauhan      ";
console.log(xyz.trim());


// usage of split()
let str="raj-chauhan  prathmesh prakhar";
console.log(str.split('-'));
