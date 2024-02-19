//This is context based and it will store the values of current context.

const user = {
  username: "Avinash",
  age: 21,

  welcomeUser: function() {
    console.log(`Hello ${this.username}`);
    console.log(this);
  },
};

// user.welcomeUser();

user.username = "Atul";

// user.welcomeUser();

// If you try to print this in global context and have nothing in it like here than THIS will give you empty object.
// But if you try that in Browser it will show you WINDOW OBJECT.
// This WINDOW OBJECT is a GLOBAL OBJECT in a Browser and that's why we can capture click, form submit and all those things from browser.

// console.log(this);

function newOne() {
  let username = "Avinash";
  // console.log(this.username); // Node do not understand this.username here as this do not work outside object.
}

newOne();

// Arrow function

const arrow1 = () => {
  console.log(`Hello`);
};

arrow1();

// Above arrow function can also be written as --

const arro2 = () => console.log(`Hello New Arrow`); // This is implicit return -- No need to use return keyword inside a function as its a one liner.

arro2();

const arro3 = (num1, num2) => num1 + num2;
console.log(arro3(5, 4));

// Above function can also be written as --

const arro4 = (num1, num2) => num1 + num2;
console.log(arro4(4, 5));

// If you want to pass Object in it --

const arro5 = () => ({ username: "Avinash" });
console.log(arro5());

// IIFE -- Immediately Invoked Function Expression

// Here when you want to save your code from Global Polution than we use IIFE or Named IIFE

(function myfunc() {
  console.log(`Hello`);
})(); // This is Named Iife as you  provided a name myfunc

(() => console.log("Avinash"))();

// In IIFE there is one issue that they do not when to stop so we have to end the function with ;. If you do not do that the compiler wont come out and this will create errors. We ended myfunc iife that's why we are able to use an arrow function below it.

((name) => console.log(`${name}`))("Avinash"); // This is how you pass a value in IIFE
