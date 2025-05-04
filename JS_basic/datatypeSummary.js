/*
                                           D A T A T Y P E
                                          /               \
                                         /                 \
                                    PRIMITIVE        NON_Primitive 
                                       (7)
                                (Call by value)    (Call by refrence)
                                |                  |
                                |-> String         |-> Array
                                |                  |
                                |-> Number         |-> Functions
                                |                  |
                                |-> undefined      |-> Objects 
                                |
                                |-> null
                                |
                                |-> Boolean
                                |
                                |-> Symbol
                                |
                                |-> BigInt
*/

// example of Symbol data_type :

let num1=Symbol(66);
let num2=Symbol(66);
console.log(num1===num2); // false
console.log(num1==num2); // false

// example of BigIint :
let x1=987654321345678n; // ye x1 ab BigInt ban chuka hai
let x2=BigInt(987654321345678); // ye x2 ab BigInt ban chuka hai
let x3=7n; // ye bhi ban chuka hai

// example of array : arrays ko hamesha square bracket ke under likha jata hai [sda,adsf,afasf,asa]
let arrOfFruit=["apple", "banana", "pineApple", "blueBerry"];
console.log(arrOfFruit[1]); // banana

// example of Objects :

let datas={
   name:"Pulkit",
   age:20,
   course:"BTech",
   branch:"IT"
};

console.log(datas.name);
console.log(datas["name"]);
console.log(datas["age"]);

// example of function :

const myFun=function(){
   console.log("Hello World");
   
}
myFun(); // Hello World





