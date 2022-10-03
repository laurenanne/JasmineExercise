window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // const obj = {amount: 0, years: 0, rate:0}
  let amount = document.getElementById("loan-amount").value = 0;
  let years = document.getElementById("loan-years").value= 0;
  let rate = document.getElementById("loan-rate").value = 0;
  calculateMonthlyPayment(getCurrentUIValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;
  calculateMonthlyPayment(getCurrentUIValues);


}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

function calculateMonthlyPayment(obj) {
  // obj = getCurrentUIValues();
  let p = obj['amount'];
  let yrs = obj['years'];
  let rate = obj['rate'];
  let i = rate/12;
  let n = yrs*12;
  let monthly = (p*i)/(1-Math.pow((1+i),-n));
  monthly = `${(monthly).toFixed(2)}`;
  updateMonthly(monthly);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;

}
