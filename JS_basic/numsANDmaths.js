// CONCEPT-1 :
const score1=400;
console.log(score1); // 400

// isme 100 % garuntee hai ki ye number hi hoga
const score2=new Number(200); // new is related with object
console.log(score2); // [Number: 200]


/* agar hume ye jannana ho ki mere number ki length kitni hai to hum use pahle STRING mein convert kardege phir .length() wale method se uski length find karlege
*/
let n1=67632;
let n2=676.032070500;
let n3=67632.0000;

console.log(n1.toString().length); // 5
console.log(n2.toString().length); // 11
console.log(n3.toString().length); // 5

console.log(typeof(n1)); // number

// ek fixed decimal tak hi answer de to uske liye use hota hai -> toFixed

console.log(n2.toFixed(4)); // 676.0321
let x=12.99999;
console.log(x.toFixed(0)); // 13

console.log(x.toPrecision(3));
console.log(n1.toPrecision(3));
console.log(n2.toPrecision(7));

// number agar bada ho to sahi se kaise dikhe .toLocalString() :
let y=10000000;
// ye dono u.s.a type ka aaa raha hai
console.log(n1.toLocaleString()); // 67,632
console.log(y.toLocaleString()); // 10,000,000
// idian mein kane ke liye :
console.log(n1.toLocaleString('en-IN')); // 67,632
console.log(y.toLocaleString('en-IN')); // 1,00,00,000

// ++++++++++++ MATHS ++++++++++++

// pi ki value :
console.log(Math.PI.toFixed(4)); // 3.1416

// kisi bhi number ko absolute mein : abs
console.log(Math.abs(-72)); // 72

// round of , ceil , floor
console.log(Math.round(34.985)); // 35
console.log(Math.round(34.3)); // 34
console.log(Math.floor(34.985)); // 34
console.log(Math.ceil(34.3)); // 35

// min and max finding :
console.log(Math.min(3,5,1,2,1)); // 1
console.log(Math.max(3,5,3,2,1)); // 5
// formula 
const min=1,max=6; // eg. a dice
console.log((Math.floor(Math.random()*(max-min+1)))+min); // ab ye 1 se 6 tak mein koi bhi random value dega
