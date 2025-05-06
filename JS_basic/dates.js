// give live date and time :

let myDate= new Date();
console.log(myDate); // 2025-05-06T11:04:30.594Z
console.log(myDate.toString()); // Tue May 06 2025 11:04:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue May 06 2025
console.log(myDate.toJSON()); // 2025-05-06T11:04:30.594Z
console.log(myDate.toISOString()); // 2025-05-06T11:04:30.594Z
console.log(myDate.toLocaleString()); // 5/6/2025, 11:04:30 AM
console.log(myDate.toLocaleDateString()); // 5/6/2025
console.log(myDate.toTimeString()); // 11:04:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // Tue, 06 May 2025 11:04:30 GMT

/* Date(year,month,date,hour,minute,second,milli_seconds)

* year = 2024, 2025 ,...
* month = 0 - 11 ; jan=0 , feb=1 , ....
* date = 1 - 31
* hour = (24 hour format) ; 0 - 23
* minute = 0 - 59
* second = 0 - 59
* milli_seconds = 0 - 999

*/

let createdDate= new Date(2025,0,5,14,55,34,400);
console.log(createdDate);
console.log(createdDate.toString());
console.log(createdDate.toDateString());
console.log(createdDate.toJSON());
console.log(createdDate.toISOString());
console.log(createdDate.toLocaleString());
console.log(createdDate.toLocaleDateString());
console.log(createdDate.toTimeString());
console.log(createdDate.toUTCString());

let x=new Date(2022,3,13);
console.log(x);
console.log(x.toString());


let y=new Date("05-01-2002");
console.log(y.toLocaleDateString("en-IN"));
console.log(y.toString("en-IN"));

// agar tumko millisecond mein chaiye time 

let milliTime=Date.now();
console.log(milliTime); // 1746531712599

console.log(x.getTime()); // 1649808000000

// agar second mein karna hai to :
console.log(Math.floor(milliTime/1000)); // 1746531833


// dd-mm-yyyy
console.log(`${createdDate.getDate()}-${createdDate.getMonth()+1}-${createdDate.getFullYear()}`); // 5-1-2025
