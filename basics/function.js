/* {
    "fname": "Avinash",
    "empId" : "563fd2",
    "empDepart": "SE",
    "departHod": "Ankit"
}

This is JSON == JavaScript Object Notation

This is nothing but a simple object notation but do not have a name like an object.
*/

/*
https://api.github.com/users/avidev-creator
This is a simple API that we can use to practicce.
*/

/* You can use Json Formatter to view this in a better way. */

function mySum(num1, num2) {
  return num1 + num2;
}

console.log(mySum(5, 4));

// This is how you declare and initialize a function.

// you must provide return value else it will not return anything.
// Anything written after return keyword is not executed in a function.
// here num1 and num2 = parameters and 5,4 = arguements.

function loginMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginMessage("Avinash"));

// here if you dont pass anything than we have created an if statement as it will take an undefined value not a null.
// you can also type if(!username)

function cartPrice(...price) {
  return price;
}

console.log(cartPrice(200, 400, 500));
//Rest Operator
//This is a rest operator and it will bundle everything and put it inside price and this will always be an array.
//

//Passing Object in function--

const users = {
  fname: "Avinash",
  age: 32,
};

function newUser(anyObject) {
  return `Hello My Name is ${anyObject.fname} and I am ${anyObject.age} old`;
}

console.log(newUser(users));

// Passing Array in a function.

const myArray = [100, 300, 500, 1600];

function arrayHandler(getArray) {
  return getArray[2];
}

console.log(arrayHandler(myArray));
