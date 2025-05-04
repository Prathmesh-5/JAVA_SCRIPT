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


