/* ek object main value ko access karne ko do tarike hote hai 
- Dot Notation
- Bracket Notation

Dot notation
imagine tumhare notebook ka naam math hai aur pen pe likha hai blue pen so tum do notation se kuch aise acces kar sakte ho 
notebook.math 
pen.bluepen

Bracket notation
Agar tumhare label mein space ho, jaise "first name", toh dot notation use nahi kar sakte ho, kyunki wo error dega.
Aise mein Bracket Notation use karte hain:
person["first name"] = "Aashish Kumar";
console.log(person["first name"]); // "Aashish Kumar"
*/

let person = {
    "first name": "aashish",
    age : 20,
    city: "surat"
};

// dot notation 
console.log(person.age);

// braket notation
console.log(person["first name"]);

//adding properties
person["country"] = "india";
console.log(person.country);
