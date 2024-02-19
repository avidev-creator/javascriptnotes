// Advanced Loops
//
// For OF Loop

const myArr = [1, 2, 3, 4, 5];

for (const item of myArr) {
  console.log(item);
}

const newArr = "Hello World";

for (const greet of newArr) {
  console.log(`Each Charachter Is :- ${greet}`);
}

// Map is another unique kind in JS which holds key and value but it do not allow any duplicate values and also it remembers the order.

const map = new Map();

map.set("Js", "Javascript");
map.set("Cpp", "C plus plus");
map.set("Rb", "Ruby");
map.set("Sw", "Swift");

for (const [key, value] of map) {
  console.log(`${key} is the shortcut for :- ${value}`);
}

// for of loop do not work on Objects. You can use it in arrays and maps.

//for in loop--

const myObj = {
  fuser: "Avinash",
  age: 32,
  email: "avi@gmail.com",
};

for (const key in myObj) {
  console.log(`${key} have the value of :- ${myObj[key]}`);
}

const A = ["avi", "atul", "rakesh"];

for (const key in A) {
  console.log(key);
}

// Here as we saw that for in loop will return the key of array == index of array.
// Now as we know array only have key = index in it that's why objects are created which can store anything as a key in it.

for (const key in A) {
  console.log(A[key]); // Now this will give you the value
}

// You can not use MAP in for in loop.

// For Each loop--

const code = ["js", "rb", "java", "python"];

code.forEach((element) => {
  console.log(element);
});

// For Each will always require a call back function.
// A Call bakc function do not have a name.
// There are 2 ways to write it --
/*
 *code.forEach(function (element){ console.log(element)})
or you can use arrow function like below --
code.forEach((element) => { console.log(element)})
or you can create a separate function as well -- 
function printMe(item){
  console.log(item)
}
code.forEach(printme) -- Here we only pass the reference of the function.
*/

//For each have some more properties --
//

code.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// Object inside Array and how to work with them--

const myCode = [
  {
    langName: "Javascript",
    fileExt: "JS",
  },
  {
    langName: "TypeScript",
    fileExt: "TS",
  },
  {
    langName: "Python",
    fileExt: "PY",
  },
];

myCode.forEach((item) => {
  console.log(item.langName); // here we have access of the object properties
});
