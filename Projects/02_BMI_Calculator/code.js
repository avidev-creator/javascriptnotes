const form = document.querySelector("form");
// this usecase will give you empty value if you use the below line --
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); // This will help you to prevent the page to reload.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // To check if there is any field that is empty or less than 0

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height : ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight : ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Check the BMI value and display the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is : ${bmi}.You are Underweight.</span>`;
    } else if (18.6 < bmi && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI is : ${bmi}. You have a Normal Weight.</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is : ${bmi}. You are Overweight.</span>`;
    }
  }
});
