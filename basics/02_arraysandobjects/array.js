const arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.push(6); //This is to insert an element at the end in an array
console.log(arr);

arr.pop(); // This is to remove 1 element from the end of the array
console.log(arr);

arr.unshift(7); // This will insert a value at the start and shift the index of whole array
console.log(arr);

arr.shift(); // This will remove the value from the start and shift the index in reverse direction
console.log(arr);

// This is to ask question with arrays and they will return the result
console.log(arr.includes(4)); // If 4 is in the array it will return true
console.log(arr.indexOf(5)); // To get the index of the given value

// Join to convert array into string
const newArr = arr.join();

console.log(newArr);
console.log(typeof newArr);

// Slice
const myarr = [1, 2, 3, 4, 5];

console.log("A = ", myarr);

const myn1 = myarr.slice(1, 3);
console.log("Sliced Value = ", myn1);

console.log("Update Array = ", myarr);

// Splice
const myarr2 = [1, 2, 3, 4, 5, 6];

console.log("B = ", myarr2);

const myn2 = myarr2.splice(1, 3); // Splice(Starting index, Number of values you want to remove)
console.log("Spliced Value = ", myn2); // Splice will remove the value from the original Array.

console.log("Update Array = ", myarr2);

// Pushing Array inside Array
const Arr = ["A", "B", "C"];
const Arr2 = ["D", "E", "F"];

// Arr2.push(Arr)
// console.log(Arr2);

const Arr3 = Arr2.concat(Arr);
console.log(Arr3);

const Arr4 = [...Arr, ...Arr2]; // This is spread operator
console.log(Arr4);

const Arr5 = [1, 2, 3, 4, [4, 5, 6], 7, 8, [6, 7, [1, 2, 3]]]; // When you have Array inside array than you can use Flat and you have to give a depth that upto which extent you want to remove the array and covert it into single array. If you use Infinity it will convert everything.

console.log(Arr5.flat(Infinity));

// Checking And Converting things into Array using Array.methods

console.log(Array.isArray("Avinash")); // This is to check if the value passed is an Array or not. If not False else True

const Arr6 = Array.from("AVINASH"); // This will convert this string into an Array.
console.log(Arr6);
