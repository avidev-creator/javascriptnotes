// IF Statement.

//
// if(condition = true){
//   body
// }

/*To evaluate the TRUE and FALSE condition we use comparision operators---
<
>
<=
>=
==
===
!=
!==
*/

if (3 > 2) {
  console.log("Executed");
}

// Shorthand for above statement is Implicit scope. But you need to end it with semicolon.

// if (3 > 2) console.log("Executed");

/* Sometimes you have to check multiple conditions so you use if-else.
 */

const temp = 40;

if (temp === 30) {
  console.log("Temperatur is 30");
} else if (temp < 30) {
  console.log("Temperatur is less than 30");
} else if (temp > 30) {
  console.log("Temperatur is greater than 30");
}

// You can also check multiple condition in 1 statement.

const userLoggedIn = true;
const card = true;

if (userLoggedIn && card) {
  console.log("Allow to shop");
}

// && = AND statement means both condition must be true than only it will go inside and execute. If any one of them is false than it will not.

const userGmail = true;
const userEmail = false;

if (userEmail || userGmail) {
  console.log("User Logged in from Gmail");
}

// || = OR statement means it will check if both or any one of them is true and it will allow to go in and execute the code.

/*---------Switch Case -------------

This is the syntax where you use key as the value that you need to check multiple times.

switch (key) {
  case value:
    
    break;

  default:
    break;
}

*/

const month = 4;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Nothing Matched");
    break;
}

// break will help you close this flow and come out as soon as it matches the value.
