// SCOPE 
// and ye bhi pata chalega ki "var" ka use kyu nahi karna chahiye 
// if ke under jo bhi likhte hai use block scope kahte hai
// and iske bahar jo bhi likhte hai use kahte hai global scope

let x=100;

if(true){
    let a=10;
    b=20;
    const c=30;
    var d=40;
}

// console.log(a); // a is not defined  ✅
console.log(b); // 20  ❌  ye default var me jata hai aur print nahi hona chahiye tha lekin ho gaya
console.log(c); // c is not defined    ✅
console.log(d); // 40    ❌    print nahi hona chahiye tha lekin ho gaya
console.log(x); // 100   ✅ print ho gaya kyuki ye global scope thaa
