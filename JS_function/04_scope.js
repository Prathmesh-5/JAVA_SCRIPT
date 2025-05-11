function hacker(){     // ▫️2
    let type="white";  // ▫️3
    let workAs="ethically"; // ▫️4

    function user(){  // ▫️6 
        let name="Anonymous";   // ▫️7
        console.log(workAs); // ethically  // ▫️8
        return ""; // ▫️9
    }
    user();  // ▫️5
    console.log(name); // name is not defined   // ▫️10
    
    return "";  // ▫️11  yaha se ab bahar nikal jayega 
}
hacker()   // ▫️1

// ++++++++++++++++++++  mini Hoisting concept ++++++++++++++++++

/* thoda sa HOISTING ka concept dekh liya jaye :
abhi to filhal itna pata hai ki function 2 tareke se declare kar sakte ek 
bina variable mein hold karaye aur dusra tareka variable mein hold kara ke

▫️1. jo pahle tareka hai bina variable mein hold karey :

✅
functionA calling 
block of functionA

✅
block of functionB
functionB calling 

▫️2. jo dusra tareka hai variable mein hold kara ke  :

❌
functionC calling
block of functionC

✅
block of functionD
functionD calling

eg. :-
*/

// 1st method :

// ✅
funA();   // A
function funA(){
    console.log("A");
}

// ✅
function funB(){
    console.log("B");
}
funB();  // B


// 2nd method :
// ✅
let funD=function(){
    console.log("D");
}
funD();   // D

// ❌
funC();
let funC=function(){
    console.log("C");
}
