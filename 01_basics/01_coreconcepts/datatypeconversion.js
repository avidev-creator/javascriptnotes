let score = "57"

// console.log(typeof score)

let valueInNumber = Number (score) // Data type conversion from String to Number

// console.log(typeof valueInNumber);

let valueNull = null
let valueInNum = Number (null)
console.log(valueInNum); // This will return 0
console.log(typeof valueInNum); // number

let xyz = "35abc"

let value = Number (xyz)

// console.log(typeof value);
// console.log(value); // NaN -- Not A Number

let someValue = true
let boolValue = Boolean (someValue)
// console.log(typeof boolValue); // Boolean

let ab = ""
let boolAb = Boolean (ab)
// console.log(boolAb); // This will return false

let ac = "abcd"
let boolAc = Boolean (ac)
console.log(boolAc); // This will return true

