// primitive datatypes are like numbers strings booleans which directly hold values 

// refrence datatypes are like array and objects which stores the refrence to the memory location of data

//  primitive data types
let a = 20;
let b = 30;
b = 20;
console.log(a);
console.log(b);

// refrence datatypes
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4] (both changes)
console.log(arr2); // [1,2,3,4]