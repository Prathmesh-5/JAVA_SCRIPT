# JAVA_SCRIPT
# n_o_t_e_s

A repo for JavaScript code

[Java Script documentation](https://tc39.es/ecma262/)

- _JS_basic/name.js_
```js
console.log("Prathmesh Chauhan");
```
```js
Prathmesh Chauhan
```

- _JS_basic/variables.js_
```js
// ye constant ye fix hai change nahi ho sakta ✅
const accountId=910118;

// (block scoped, sirf {} block ke andar accessible, mutable, No Re-declaration) ✅
let accountEmail="prathmesh321vns@gmail.com"; 

// (function scoped, sirf function ke andar accessible, mutable, Re-declaration allowed)
var accountFirstMobNum=8081400291;  // ye ek number ki tarah dekha jayega means ispar maths ke operation perform ho sakta hai ❌
var accountSecondMobNum="7626526361"; // ye ek string ki tarah treet hoga ❌

accountState="Uttar Pradesh"; //ye defaultly var datatype mein chala jata hai ❌


console.log(accountId,accountEmail,accountFirstMobNum,accountSecondMobNum,accountState,2332,"adjag");

console.table([accountId,accountEmail,accountFirstMobNum,accountSecondMobNum,accountState]);
```
```js
910118 prathmesh321vns@gmail.com 8081400291 7626526361 Uttar Pradesh 2332 adjag
┌─────────┬─────────────────────────────┐
│ (index) │           Values            │
├─────────┼─────────────────────────────┤
│    0    │           910118            │
│    1    │ 'prathmesh321vns@gmail.com' │
│    2    │         8081400291          │
│    3    │        '7626526361'         │
│    4    │       'Uttar Pradesh'       │
└─────────┴─────────────────────────────┘
```

- _JS_basic/datatypes.js_
```js
let name="Raj"; // string data_type
let number=3232; // integer data_type
let loggedIn=true; // boolean data_type
let state; // undefined 
let temperature=null; // empty hai

// number => integer data_type of range 2^53
// string => "xyz"
// boolean => true / false
// null => stand alone value (object data_type)
// undefined => undefined data_type
//symbol => unique

console.log(state,temperature);

// agar kisi ka data_type pata karna ho to :

console.log(typeof(state)); // undefined
console.log(typeof state); // undefined
console.log(typeof undefined); // undefined
console.log(typeof("Prathmesh")); // string
console.log(typeof(temperature)); // object
console.log(typeof(null)); // object
```
```js
undefined null
undefined
undefined
undefined
string
object
object
```

- _JS_basic/conversionOperation.js_
```js
let a1=23,a2="23",a3="",a4="raj",a5=true,a6=null,a7;   // a7 wala undefined hai
```
```js
// Converting into a Number :
console.table([Number(a1),Number(a2),Number(a3),Number(a4),Number(a5),Number(a6),Number(a7)]);

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   23   │
│    1    │   23   │
│    2    │   0    │
│    3    │  NaN   │
│    4    │   1    │
│    5    │   0    │
│    6    │  NaN   │
└─────────┴────────┘
```
```js
// Converting into a string :
console.table([String(a1),String(a2),String(a3),String(a4),String(a5),String(a6),String(a7)]);

┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │    '23'     │
│    1    │    '23'     │
│    2    │     ''      │
│    3    │    'raj'    │
│    4    │   'true'    │
│    5    │   'null'    │
│    6    │ 'undefined' │
└─────────┴─────────────┘
```
```js
// Converting into a Boolean :
console.table([Boolean(a1),Boolean(a2),Boolean(a3),Boolean(a4),Boolean(a5),Boolean(a6),Boolean(a7),Boolean(1)]);

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  true  │
│    1    │  true  │
│    2    │ false  │
│    3    │  true  │
│    4    │  true  │
│    5    │ false  │
│    6    │ false  │
│    7    │  true  │
└─────────┴────────┘
```

- _JS_basic/operation.js_
```js
let num0=3;
let num1=-num0;
console.log(num1); // -3

console.log("raj"+" suman"); // raj suman

console.log("raj"+2 , 9+"raj"); // raj2 9raj

console.log(3+10+"kali"+8+5); // 13kali85

console.log(4+7); // 11
console.log(4-7); // -3
console.log(4*3); // 12
console.log(4**3); // 64
console.log((-5)**3); // -125
console.log(8%3); // 2
console.log(16/3); // 5.333333333333333
console.log(19.5*4) // 78
console.log(19.5*4.0); //78
console.log(78/4); //19.5
console.log(78.875%4.88); // 0.7950000000000017

let a,b,c;
a=b=c=5;
console.log(a,b,c) // 5 5 5

// seeing POST_INCREMENT & PRE_INCREMENT :

let x1,y1,x2,y2;

x1=6;
y1=x1++;
console.log("\nx1 = ",x1,"y1 = ",y1,"\n"); // x1=7 y1=6

x2=9;
y2=++x2;
console.log("x2 = ",x2,"y2 = ",y2); // x2=10 y2=10
```

- _JS_basic/comparison.js_
```js
console.log(2>1); // true
console.log(2<1); // false
console.log(6.0==6); // true
console.log(6.0>6); // false
console.log(6.0<6); // false
console.log(7.8211<7.821); // false
console.log(7.8211>7.821); // true
console.log(7!=7); // false

console.log("\n");
console.log("3">1); // true
console.log("3"<1); // false
console.log("3"==3.1); // false
console.log("03">1); // true

console.log("\n");

// in this equality and comparison works differently : null is treated as 0 in comparison not in equality
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log("\n");

// undefined ka kya scene hai :
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

console.log("\n");


// strictly check =>  === :

console.log("2"===2); // false because data type different hai
console.log(2===2); // true because data type bhi same hai and value bhi sai hai 
console.log(3===2); // false because datatype to same hai par value sahi nahi hai
console.log("2"==="2"); // true because datatype bhi same hai and value bhi
```

- _JS_basic/comparison.js_
```js
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
```

- _JS_basic/littleStackHeapConcept.js_
```js
// PRIMITIVE mein SATACK memory use hoti hai (copy mein changes hota hai)
// NON-PRIMITIVE mein HEAP memory use hota hai (agar changes hota hai to original mein bhi change ho jayega)

// S T A C K  use :
let schoolName="prathmesh chauhan"; // primitive data_type

let homeName=schoolName; // homeName ke under schoolName ki copy gayi hai na ki original wala

homeName="raj chauhan";

// now final homeName=raj chauhan  and  schoolName=prathmesh chauhan 


// H E A P  use :
// object ka example lete hai kyuki ye non primitive hai to heap memory use hoga
let user1={
    email:"abcdef12@gmail.com",
    upiId:"abcde@ybl"

};

let user2=user1; // user2 ko bhi original wala refrence mila hai means agar ab user2 mein kuch changes karoge to uska user1 bhi change 

user2.upiId="vvvv@ybl"; // now user1.upiId bhi "vvvv@ybl" ho gaya hoga

console.log(user1.upiId);
console.log(user2.upiId);
```
```js
vvvv@ybl
vvvv@ybl
```
![alt text](image.png)

- _JS_basic/stringINjs.js_
```js
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
```
```js
Prathmesh Chauhan
r
[String: 'Computer Science']
u
My name is:  Prathmesh Chauhan and i choose  [String: 'Computer Science'] subject
My name is Prathmesh Chauhan and i choose Computer Science subject
prathmesh chauhan
PRATHMESH CHAUHAN
COMPUTER SCIENCE
Prath
thmesh Chauhan
auh
t
3
Computer Science
Prathmesh Chauhan
true
raj  chauhan
[ 'raj', 'chauhan  prathmesh prakhar' ]
```

- _JS_basic/numsANDmaths.js_
```js
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
```
```js
400
[Number: 200]
5
11
5
number
676.0321
13
13.0
6.76e+4
676.0321
67,632
10,000,000
67,632
1,00,00,000
3.1416
72
35
34
34
35
1
5
2
```

- _JS_basic/dates.js_
```js
// give live date and time :

let myDate= new Date();
console.log(myDate); // 2025-05-06T11:04:30.594Z
console.log(myDate.toString()); // Tue May 06 2025 11:04:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue May 06 2025
console.log(myDate.toJSON()); // 2025-05-06T11:04:30.594Z
console.log(myDate.toISOString()); // 2025-05-06T11:04:30.594Z
console.log(myDate.toLocaleString()); // 5/6/2025, 11:04:30 AM
console.log(myDate.toLocaleDateString()); // 5/6/2025
console.log(myDate.toTimeString()); // 11:04:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Tue, 06 May 2025 11:04:30 GMT

/* Date(year,month,date,hour,minute,second,milli_seconds)

* year = 2024, 2025 ,...
* month = 0 - 11 ; jan=0 , feb=1 , ....
* date = 1 - 31
* hour = (24 hour format) ; 0 - 23
* minute = 0 - 59
* second = 0 - 59
* milli_seconds = 0 - 999

*/

let createdDate= new Date(2025,0,5,14,55,34,400);
console.log(createdDate);
console.log(createdDate.toString());
console.log(createdDate.toDateString());
console.log(createdDate.toJSON());
console.log(createdDate.toISOString());
console.log(createdDate.toLocaleString());
console.log(createdDate.toLocaleDateString());
console.log(createdDate.toTimeString());
console.log(createdDate.toUTCString());

let x=new Date(2022,3,13);
console.log(x);
console.log(x.toString());


let y=new Date("05-01-2002");
console.log(y.toLocaleDateString("en-IN"));
console.log(y.toString("en-IN"));

// agar tumko millisecond mein chaiye time 

let milliTime=Date.now();
console.log(milliTime); // 1746531712599

console.log(x.getTime()); // 1649808000000

// agar second mein karna hai to :
console.log(Math.floor(milliTime/1000)); // 1746531833


// dd-mm-yyyy
console.log(`${createdDate.getDate()}-${createdDate.getMonth()+1}-${createdDate.getFullYear()}`); // 5-1-2025
```
```js
2025-05-06T11:52:58.058Z
Tue May 06 2025 11:52:58 GMT+0000 (Coordinated Universal Time)
Tue May 06 2025
2025-05-06T11:52:58.058Z
2025-05-06T11:52:58.058Z
5/6/2025, 11:52:58 AM
5/6/2025
11:52:58 GMT+0000 (Coordinated Universal Time)
Tue, 06 May 2025 11:52:58 GMT
2025-01-05T14:55:34.400Z
Sun Jan 05 2025 14:55:34 GMT+0000 (Coordinated Universal Time)
Sun Jan 05 2025
2025-01-05T14:55:34.400Z
2025-01-05T14:55:34.400Z
1/5/2025, 2:55:34 PM
1/5/2025
14:55:34 GMT+0000 (Coordinated Universal Time)
Sun, 05 Jan 2025 14:55:34 GMT
2022-04-13T00:00:00.000Z
Wed Apr 13 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
1/5/2002
Wed May 01 2002 00:00:00 GMT+0000 (Coordinated Universal Time)
1746532378077
1649808000000
1746532378
5-1-2025
```
## ARRAY in Java Script :
- multiple data types ho sakte hai
- dynamic size
- object hai
- JavaScript arrays are zero-indexed (means 0 se start hoga defaultly)
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
- SHALLOW COPY : copy wale mein jo changes karoge wo original mein bhi ho jayega
- DEEP CPOY : copy wale mein jo change karoge wo original wale mein nahi hoga 

- _JS_array/01_arrays.js_
```js
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
```
```js
apple
banana
object and object
arr1 => 32,apple,false and arr2 => 76,banana,true
[ 32, 'apple', false ]
3
[ 32, 'apple', false, 44, 77, 'rraajj' ]
[ 32, 'apple', false, 44, 77 ]
[ 32, 'apple', false, 44 ]
44
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
[
  999,  2,  4,  6,  8,
   10, 12, 14, 16, 18,
   20
]
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
[ 6, 8, 10 ]
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
[ 6, 8, 10, 12, 14, 16 ]
[ 2, 4, 18, 20 ]
```

- _JS_array/02_arrays.js_
```js
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
```
```js
[
  'iron man',
  'spider man',
  'captain america',
  'thor',
  [ 'super man', 'bat man', 'flash' ]
]
[ 'iron man', 'spider man', 'captain america', 'thor' ]
[
  'iron man',
  'spider man',
  'captain america',
  'thor',
  'super man',
  'bat man',
  'flash'
]
[ 1, 2, 3, 4, 5, 6 ]
[
  1, 2, 6, 4, 3, 9, 9,
  6, 4, 8, 6, 4, 6, 5,
  7, 6, 4, 5, 8, 7, 0
]
[ 'ris' ]
[ 'r', 'i', 's' ]
[ 'r', 'i', 's' ]
[ 100, 200, 300 ]
```

## Objects in js :

- _JS_object/01_obj.js_
```js
// 2 dareke hai obj ko use karne ka 1- . , 2- [""]   jyada achha second wala hai

let id=Symbol("student_id");

let data={
    name:"Prathmesh Chauhan",
    branch:"CSE",
    roll:150,
    [id]:369,
    "section":"A", //aise bhi likh sakte hai and isme tumko second wala hi use karna padega use karne ke liye
    isloggedIn:true
};

console.table([data.name,data.branch,data.roll,data[id],data["section"],data.isloggedIn]);
/*
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │ 'Prathmesh Chauhan' │
│    1    │        'CSE'        │
│    2    │         150         │
│    3    │         369         │
│    4    │         'A'         │
│    5    │        true         │
└─────────┴─────────────────────┘
*/
console.table([data["name"],data["branch"],data["roll"],data[id],data["section"],data["isloggedIn"]]);  // jyada sahi  approach hai
/*
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │ 'Prathmesh Chauhan' │
│    1    │        'CSE'        │
│    2    │         150         │
│    3    │         369         │
│    4    │         'A'         │
│    5    │        true         │
└─────────┴─────────────────────┘
*/


Object.freeze(data); // object ko freeze karne ke liye iske bad koi changes nahi ho payega 
data["roll"]=160
console.log(data["roll"]); // 150


// an object with greeting :


let wish={
    name:"Suman",
    who:"mother",
}


wish.greeting=function(){
    console.log("mom mom mom");
    return "My whole world is you";
    }

console.log(wish.greeting());
/*
mom mom mom
My whole world is you
*/

console.log(wish); // { name: 'Suman', who: 'mother', greeting: [Function (anonymous)] }  : anonomous is bacause function ka koi naam nahi hai

wish.greeting2=function bestWISH(){
    console.log(`hello my mother name is : ${this.name}`);
    return "wow you are great";
}
console.log(wish.greeting2())
/*
hello my mother name is : Suman
wow you are great
*/
console.log(wish); // {name: 'Suman',who: 'mother',greeting: [Function (anonymous)],greeting2: [Function: bestWISH]}

```
```js
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │ 'Prathmesh Chauhan' │
│    1    │        'CSE'        │
│    2    │         150         │
│    3    │         369         │
│    4    │         'A'         │
│    5    │        true         │
└─────────┴─────────────────────┘
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │ 'Prathmesh Chauhan' │
│    1    │        'CSE'        │
│    2    │         150         │
│    3    │         369         │
│    4    │         'A'         │
│    5    │        true         │
└─────────┴─────────────────────┘
150
mom mom mom
My whole world is you
{ name: 'Suman', who: 'mother', greeting: [Function (anonymous)] }
hello my mother name is : Suman
wow you are great
{
  name: 'Suman',
  who: 'mother',
  greeting: [Function (anonymous)],
  greeting2: [Function: bestWISH]
}
```

- _JS_object/02_obj.js_
```js
let singleUser=new Object(); // singelton object;

singleUser["id"]=123;
singleUser["email"]="xyz123@gmail.com";
console.log(singleUser);
// { id: 123, email: 'xyz123@gmail.com' }


singleUser["userA"]={
    name:"raj",
    age:22,
    roll:150
}

console.log(singleUser);
/*
{
  id: 123,
  email: 'xyz123@gmail.com',
  userA: { name: 'raj', age: 22, roll: 150 }
}
*/

let obj1={
    obj2:{
        obj3:{
            name:"pprraatthhmmeesshh"
        }
    }
}

console.log(obj1.obj2.obj3["name"]); // pprraatthhmmeesshh

// concatenate karna by spreading 
let O1={
    1:'a',
    2:'b'
}

let O2={
    3:'c',
    4:'d'
}

console.log({...O1 , ...O2}); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Array of Objects means objects ka array ->

let arrayOfObject1=new Array(
    {
        user0:"apple",
        id:111
    },
    {
        user1:"microsoft",
        id:222
    },
    {
        user2:"linux",
        id:999
    }

)

console.log(arrayOfObject1[0]); // user0 wala aa jayega  -> { user0: 'apple', id: 111 }
console.log(arrayOfObject1[1]); // user1 wala aa jayega  -> { user1: 'microsoft', id: 222 }
console.log(arrayOfObject1[2]); // user2 wala aa jayega  -> { user2: 'linux', id: 999 }

// -------------------------

let arrayOfObject2=[
    {
        user0:"apple",
        id:111
    },
    {
        user1:"microsoft",
        id:222
    },
    {
        user2:"linux",
        id:999
    }

]

console.log(arrayOfObject2[0]); // user0 wala aa jayega  -> { user0: 'apple', id: 111 }
console.log(arrayOfObject2[1]); // user1 wala aa jayega  -> { user1: 'microsoft', id: 222 }
console.log(arrayOfObject2[2]); // user2 wala aa jayega  -> { user2: 'linux', id: 999 }

// agar hume kisi object ki sari keys chahiye :

console.log(Object.keys(O1)); // [ '1', '2' ]  aray mila
console.log(typeof(Object.keys(O1))); // object
let y=Object.keys(O2);
console.log(y); // [ '3', '4']  aray mila

console.log(Object.keys(singleUser)); // [ 'id', 'email', 'userA' ]    array mila

console.log(Object.values(O1)); // [ 'a', 'b' ]  array mila
console.log(Object.values(singleUser)); // [ 123, 'xyz123@gmail.com', { name: 'raj', age: 22, roll: 150 } ]    array mila

// *** important ***
console.log(y[1]); // 4

console.log(Object.entries(O1)); // [ [ '1', 'a' ], [ '2', 'b' ] ]   ARRAY of ARRAY mila

```
```js
{ id: 123, email: 'xyz123@gmail.com' }
{
  id: 123,
  email: 'xyz123@gmail.com',
  userA: { name: 'raj', age: 22, roll: 150 }
}
pprraatthhmmeesshh
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
{ user0: 'apple', id: 111 }
{ user1: 'microsoft', id: 222 }
{ user2: 'linux', id: 999 }
{ user0: 'apple', id: 111 }
{ user1: 'microsoft', id: 222 }
{ user2: 'linux', id: 999 }
[ '1', '2' ]
object
[ '3', '4' ]
[ 'id', 'email', 'userA' ]
[ 'a', 'b' ]
[ 123, 'xyz123@gmail.com', { name: 'raj', age: 22, roll: 150 } ]
4
[ [ '1', 'a' ], [ '2', 'b' ] ]
```

- _JS_object/03_objDestructureANDapi_intro.js_
```js
// Object mein se value ko acces karne ka naya tareka => destructuring

let course={
    name1:"Btech",
    name2:"Mtech",
    name3:"Mba",
    name4:"IT"
}

// -----  acchaa tarika  ------

let {name1,name2,name3,name4}=course; // DE-STRUCTURING 
console.table([name1,name2,name3,name4]);
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'Btech' │
│    1    │ 'Mtech' │
│    2    │  'Mba'  │
│    3    │  'IT'   │
└─────────┴─────────┘
*/

// -----  bekar tarika  ------
console.table([course.name1,course.name2,course.name3,course.name4]);
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'Btech' │
│    1    │ 'Mtech' │
│    2    │  'Mba'  │
│    3    │  'IT'   │
└─────────┴─────────┘
*/


/*  API dikhti kaisi hai inka format kaisa hota hai :

{
  "name":"xyz",
  "age":20,
  "sex":"male"
}

or aisa bhi ho sakta hai 

[
 {
   "dsbk":"dsnck"
   "khc":"sdn"
 },

 {
   "ddd":dbcb
   "hdb":"dcnsl"
   "bdsa":"ewi"
 }


]


*/
```

## Functions in js :

- _JS_function/01_function.js_
```js
function function_ka_name(){
    console.log("hi");
}

function_ka_name(); // function_ka_name is called "refrence"   and   () is called "execution" 

let sum=0;
function add(num1,num2){
    sum=Number(num1)+Number(num2);  // check kar lege ki Number hi hai na 
    console.log(sum);

}

add(4,"7");
// -----------------------------------------------------------

function substract(num1,num2){
    return Number(num1)-Number(num2);
}

let result=substract(9,3);
console.log(result);

// -------------------------------------------------------------

function fun1(username){
    if(username==undefined) // or  if(!username)
        return "please enter username";
    return `hi my name is ${username}`;
}

console.log(fun1()); // please enter username
console.log(fun1("Ashish")); // hi my name is Ashish

// ------------------------------------------------------------

function fun2(username="raj"){
    return `hi my name is ${username}`;
}
console.log(fun2()); // hi my name is raj
console.log(fun2("prathmesh")); // hi my name is prathmesh

```
```js

hi
11
6
please enter username
hi my name is Ashish
hi my name is raj
hi my name is prathmesh

```