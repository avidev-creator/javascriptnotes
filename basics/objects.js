// Whenever you use a Constructor to create an Object than it will always create a Singleton.

//Creating object with literals --

const newUser = {
  fname: "Avinash",
  lastLoggedIn: "Monday",
  age: 32,
  "full name": "Avinash Dubey",
};

console.log(newUser.fname); // This is the most common way to access a key from an object.

console.log(newUser["full name"]); // There is no other way to use full name. You have to use [] to call it.

// Use Symbol as a Key in an Object

let mySym = Symbol("key1");

const secondUser = {
  [mySym]: "New Key", // Symbol can only be defined and used inside a square bracket. Else it will get converted into a string.
  age: 15,
  isActive: "True",
};

console.log(secondUser.mySym);

console.log(secondUser[mySym]);

console.log(secondUser); // This will show you the exact datatype of Symbol.

// Creating an Object with contructor == Singleton

let thirdUser = new Object();

thirdUser.fname = "Avinash";
thirdUser.age = 32;
thirdUser.email = "Avi@gmail.com";

console.log(thirdUser);

// Assigning 2 objects into key1

let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };

let obj3 = { obj1, obj2 }; // Do not use this as it will create objects into objects.

console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2); // Always use empty {} at the start as it is the destination where it will merge the sources. If you not use it and just passed obj1 and obj2 than system will merge obj2 inside obj1 and display it.

console.log(obj4);

// You can also use spread operator.

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// Object Destructuring

const obj6 = { fname: "Atul", age: 35 };

const { fname: name } = obj6; // This is called as destructuring as you dont have to write obj6.fname to get the value from it.

console.log(name);
