function function_ka_name(){
    console.log("hi");
}

function_ka_name(); // function_ka_name is called "refrence"   and   () is called "execution" 

let sum=0;
function add(num1,num2){
    sum=Number(num1)+Number(num2);  // check kar lege ki Number hi hai na 
    console.log(sum);

}

add(4,"7");
// -----------------------------------------------------------

function substract(num1,num2){
    return Number(num1)-Number(num2);
}

let result=substract(9,3);
console.log(result);

// -------------------------------------------------------------

function fun1(username){
    if(username==undefined) // or  if(!username)
        return "please enter username";
    return `hi my name is ${username}`;
}

console.log(fun1()); // please enter username
console.log(fun1("Ashish")); // hi my name is Ashish

// ------------------------------------------------------------

function fun2(username="raj"){
    return `hi my name is ${username}`;
}
console.log(fun2()); // hi my name is raj
console.log(fun2("prathmesh")); // hi my name is prathmesh


