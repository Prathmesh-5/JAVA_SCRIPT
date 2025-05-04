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






