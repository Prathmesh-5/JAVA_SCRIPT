# JAVA_SCRIPT
# n_o_t_e_s
A repo for JavaScript code

- _JS_basic/name.js_
```js
console.log("Prathmesh Chauhan");

@Prathmesh-5 ➜ /workspaces/JAVA_SCRIPT (main) $ node JS_basic/name.js
Prathmesh Chauhan
```

- _JS_basic/name.js_
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

▶️
@Prathmesh-5 ➜ /workspaces/JAVA_SCRIPT (main) $ node JS_basic/variables.js 
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

