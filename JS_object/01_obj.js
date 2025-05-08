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
