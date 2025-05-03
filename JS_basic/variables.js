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