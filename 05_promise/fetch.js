// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");

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
