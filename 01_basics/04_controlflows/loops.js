// Simple process of loop.
// Step 1 -- define an itterator (i)
// Step 2 -- check condition (i < 10)
// Step 3 -- end the loop ( i = i+2) or change condition

// For Loop

for (let i = 0; i < 10; i++) {
  // console.log("hello Avinash");
}

for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 3; i++) {
    console.log(j + "*" + i + "=" + j * i);
  }
}

const myArr = ["avi", "atul", "ramesh"];
for (let index = 0; index < myArr.length; index++) {
  // here the lenght of array is 3 but as array index start from 0 so we run < array.length
  const element = myArr[index];
  console.log(element);
}

// Checking further condition inside a loop

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Found 5");
  }
  console.log(i);
}

// Simillarly you can use break and continue to stop the loop or let it run.

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Found 5");
    break;
  }
  console.log(i);
}

// If you type break than it will exit the loop. If you type continue it will keep it running.

// While Loop

let i = 0;
while (i < 10) {
  console.log("Avinash");
  i = i + 2;
}

// here the syntax is little different -- but the process is same.
// Step 1 -- define an itterator (i)
// Step 2 -- check condition (i < 10)
// Step 3 -- end the loop ( i = i+2)

// Do While Loop

let h = 1;

do {
  console.log(h);
  h++;
} while (h < 10);
// here if h = 11 than also this will run atleast once.
// In Do while loop the system will execute first than check the condition.
