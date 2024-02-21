const promiseOne = new Promise(function (resolve, reject) {
  // Do Async Tasks here.
  // DB calls, Network Calls, Cryptography Related

  setTimeout(() => {
    console.log("Promise One");
    //resolve();
  }, 2000);
});

promiseOne.then(function (value) {
  // value.resolve("Hello World");
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// Promise Three with passing values using resolve ----

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Avinash", email: "Avi@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise Four with try and catch method ----

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Avinash", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// Async Await  with PromiseFive -----

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// Running Fetch Directly -- 

fetch('https://api.github.com/users/avidev-creator')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
