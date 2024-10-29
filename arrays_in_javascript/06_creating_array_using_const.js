//  const se array declare karne se array ko reassign nahi kar sakte but elements ko modify kar sakte hain

const colors = ["red", "green", "blue"];

// allowed 
colors.push("yellow");
console.log(colors);

// not allowed(reassignment)
// colors = ["purple"]; // error assignment to const variable

