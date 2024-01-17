/*
Primitive Data Types work on Stack Memory.
In stack memory always a copy of data is passed.
So if you change the other variable it will never 
affect the original value.
*/

let varOne = "Avinash"

let varTwo = "Aakash"

varTwo = "Anshul"

// console.log(`Value Of varOne is ${varOne}`);
// console.log(`Value Of varTwo is ${varTwo}`);

/*
Non Primitive Data Types work on Heap Memory.
In heap memory always the reference of data is passed.
So if you change the other variable it will affect and
change the original value.
*/

let objOne = {
    fname: "Avinash",
    age: 32
}

let objTwo = objOne

objTwo.fname = "Anshul"

console.log(`First name of objOne is : ${objOne.fname}`);
console.log(`First name of objTwo is : ${objTwo.fname}`);

