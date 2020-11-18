const form = document.getElementById("loan-form");
form.addEventListener("submit", function (e) {
  // Results display none
  document.getElementById("results").style.display = "none";

  // Loading Img
  document.getElementById("loading").style.display = "block";

  // Calculate Delay
  setTimeout(calculateResults, 1000);

  e.preventDefault();
});

// Calculte Results
function calculateResults() {
  // UI Variables
  const principal = document.getElementById("amount");
  const rate = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  // const principal = parseFloat(amount.value);
  // const calculatedInterest = parseFloat(interest.value) / 100 / 5.9;
  // const calculatedYears = parseFloat(years.value) * 12;

  // Calculate Monthly
  // const x = Math.pow(1 + calculatedInterest, calculatedYears);
  // const monthly = (principal * x * calculatedInterest) / (x - 1);

  // total =(principal * calculatedInterest *calculatedYears) /100

  // formula variables
  const p = parseFloat(principal.value);
  const r = parseFloat(rate.value);
  const t = parseFloat(years.value);

  // calculate total interest
  const interest = (p * t * r) / 100;
  // calculate monthly payment
  const payment = ((interest + p) / (t * 12)).toFixed(2);
  // calculate total amount to repaid
  const total = (interest + p).toFixed(2);

  if (isFinite(payment)) {
    monthlyPayment.value = payment;
    totalPayment.value = total;
    totalInterest.value = interest.toFixed(2);

    //   Show Results
    document.getElementById("results").style.display = "block";

    //   Hide Loading Image
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Plese check your number");
  }
}

// Show Error
function showError(error) {
  //   Show Results
  document.getElementById("results").style.display = "none";

  //   Hide Loading Image
  document.getElementById("loading").style.display = "none";

  // Create Div
  const errorDiv = document.createElement("div");
  // Add class
  errorDiv.className = "alert alert-danger";
  // create TextNode
  errorDiv.appendChild(document.createTextNode(error));

  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Insert before
  card.insertBefore(errorDiv, heading);

  // Clear Error
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}
