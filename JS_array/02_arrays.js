let marval=["iron man","spider man","captain america","thor"];
let dc=["super man","bat man","flash"];

marval.push(dc);
console.log(marval);
/*
[
  'iron man',
  'spider man',
  'captain america',
  'thor',
  [ 'super man', 'bat man', 'flash' ]
]
*/
marval.pop();
console.log(marval); // [ 'iron man', 'spider man', 'captain america', 'thor' ]

marval=marval.concat(dc);
console.log(marval);
/*
[
  'iron man',
  'spider man',
  'captain america',
  'thor',
  'super man',
  'bat man',
  'flash'
]
*/

// spread jo hai wo concatenate ke jaisa hi kaam karta hai 

let a1=[1,2,3];
let a2=[4,5,6];

let y=[...a1 , ...a2];
console.log(y); // [1,2,3,4,5,6]

// use of flat :

let complexArr=[1,2,[6,4,3,[9,9,6,[4]],8,6,4,[6,5]],7,6,[4,5],[8],7,0];
let easyThatArr=complexArr.flat(Infinity); // depth likna hota hai 1 / 2 / 3 ... to bachne ke liye Infinity likh do
console.log(easyThatArr); // [1, 2, 6, 4, 3, 9, 9, 6, 4, 8, 6, 4, 6, 5, 7, 6, 4, 5, 8, 7, 0]

let str="ris";
let newArr=Array(str);
console.log(newArr); // ['ris']

let str2="ris";
console.log(Array.from(str2)); // [ 'r', 'i', 's' ]

let obj={
  name : "ris"
};
console.log(Array.from(obj.name)) // [ 'r', 'i', 's' ]

// uses of (of) :
let score1=100,score2=200,score3=300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
