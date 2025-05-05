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





