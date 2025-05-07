// Method os declaring :

let arr1=[32,"apple",false];
console.log(arr1[1]); // apple

let arr2=new Array(76,"banana",true);
console.log(arr2[1]); // banana

// Checking Type of above both :

console.log(`${typeof(arr1)} and ${typeof(arr2)}`); // object and object

// display both array :

console.log(`arr1 => ${arr1} and arr2 => ${arr2}`); // arr1 => 32,apple,false and arr2 => 76,banana,true
console.log(arr1); // [ 32, 'apple', false ]

// finding length of array :
console.log(arr1.length);

// add an element in the last of an array : (push)

arr1.push(44,77,"rraajj");
console.log(arr1); // [ 32, 'apple', false, 44, 77, 'rraajj' ]

// delete last element : (pop)
arr1.pop();
console.log(arr1); // [ 32, 'apple', false, 44, 77 ]
arr1.pop();
console.log(arr1); // [ 32, 'apple', false, 44 ]

console.log(arr1.pop()); // 44

// Concatenate two array :
let x=[2,4,6,8];
let y=[10,12,14,16,18,20];
x1=x.concat(y);
console.log(x1); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

// unshit -> aage se value add hoga
// shift -> aage ka value pop ho jayega

x1.unshift(999);
console.log(x1); // [ 999,  2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]
x1.shift()
console.log(x1); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]


// slice and splice :

let xnew=x1.slice(2,5);
console.log(xnew); // [ 6, 8, 10 ]
console.log(x1); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

xnew=x1.splice(2,6);
console.log(xnew); // [ 6, 8, 10, 12, 14, 16 ]
console.log(x1); // [ 2, 4, 18, 20 ]














