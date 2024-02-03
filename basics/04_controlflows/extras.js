// When you use forEach loop it will not return anything.
//
// Thats why we have to use filter as it return the value.
//

const myNum = [1, 2, 3, 4, 5, 6];

const result = myNum.filter((num) => num > 4);

console.log(result);

// Points to remember with filter --
// 1. filter need a call back function.
// 2. if you use { } than you have to use return keyword.
// 3. filter need a condition inside the call back function and that must be true.

// You can replicate this with forEach as well but you have to use conditional statement --
const newNum = [];

myNum.forEach((element) => {
  if (element > 2) {
    newNum.push(element);
  }
});

console.log(newNum);

// But here you have to use a new array and than push the value from forEach inside that.

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

//map() --

const latest = myNum.map((num) => num + 10);
console.log(latest);

// map() is another way to use it but below are the good things of map --
// 1.map will automatically return values.
// 2. map will run on each and every value but filter will only run on those which are true based on the given conditions.

//chaning --

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => { return num + 10})

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

// reduce() --

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
