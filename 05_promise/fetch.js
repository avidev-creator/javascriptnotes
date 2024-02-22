// Fetch with Promise --------------------------------------

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

// Fetch with multiple .then ------------------------------------

fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    return data;
  })
  .then((result) => {
    console.log(result);
    let newResponse = result.filter(
      (product) => product.name === "corned beef"
    );
    return newResponse;
  })
  .then((filteredResult) => {
    console.log(filteredResult);
  });

// Fetch with multiple .then and using filter function -------------

fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    return data;
  })
  .then((result) => {
    console.log(result);
    let newResponse = result.filter(
      (product) => product.name === "corned beef"
    );
    return newResponse;
  })
  .then((filteredResult) => {
    console.log(filteredResult);
  });


// Fetch with async and await ---------------------------------

async function fetchdata() {
  const rawdata = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  const jsondata = await rawdata.json();
  const processesData = jsondata.filter(
    (product) => product.name === "corned beef"
  );

  let objData;
  for (const items of processesData) {
    objData = items;
  }

  console.log(objData.name);
}

fetchdata();
