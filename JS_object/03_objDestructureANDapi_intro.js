// Object mein se value ko acces karne ka naya tareka => destructuring

let course={
    name1:"Btech",
    name2:"Mtech",
    name3:"Mba",
    name4:"IT"
}

// -----  acchaa tarika  ------

let {name1,name2,name3,name4}=course; // DE-STRUCTURING 
console.table([name1,name2,name3,name4]);
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'Btech' │
│    1    │ 'Mtech' │
│    2    │  'Mba'  │
│    3    │  'IT'   │
└─────────┴─────────┘
*/

// -----  bekar tarika  ------
console.table([course.name1,course.name2,course.name3,course.name4]);
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'Btech' │
│    1    │ 'Mtech' │
│    2    │  'Mba'  │
│    3    │  'IT'   │
└─────────┴─────────┘
*/


/*  API dikhti kaisi hai inka format kaisa hota hai :

{
  "name":"xyz",
  "age":20,
  "sex":"male"
}

or aisa bhi ho sakta hai 

[
 {
   "dsbk":"dsnck"
   "khc":"sdn"
 },

 {
   "ddd":dbcb
   "hdb":"dcnsl"
   "bdsa":"ewi"
 }


]


*/