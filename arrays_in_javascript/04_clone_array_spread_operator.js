// array ko clone karne k liye slice ya spread operator use hota hai 

let originalarray = [1,2,3];

// cloning with slice 
let clone1 = originalarray.slice();
clone1.push(4);
console.log(originalarray);
console.log(clone1);

// cloning with spread operator 
let clone2 = [...originalarray];
clone2.push(5);
console.log(originalarray);
console.log(clone2);