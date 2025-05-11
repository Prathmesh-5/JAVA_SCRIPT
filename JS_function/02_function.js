// rest operator : jub hum items add karte jate hai aur hume nahi pata rahta hai ki user kitna item add karega 

function f1(...items){
    return items;
}

console.log(f1(433,990,120,300)); // [ 433, 990, 120, 300 ]

// ----------------------------------------------------------------------

function arrf2(arr1,arr2){  
    return [...arr1,...arr2];
}

let result1=arrf2([100,120,140],[111,222,333,444])

console.log(result1);  // [ 100, 120, 140, 111, 222, 333, 444 ]

// ------------------------------------------------------------------------
let user={
    name:"hitesh",
    age:25,
    id:90900
}

function userFun(user){
    console.log(`user name = ${user["name"]} , age is ${user["age"]} , id is ${user.id}`);
    
    return user

}

let result2=userFun(user);
console.log(result2); 
// user name = hitesh , age is 25 , id is 90900
// { name: 'hitesh', age: 25, id: 90900 }



