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
