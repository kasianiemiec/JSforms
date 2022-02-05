//chanllenge 1
function clickButton() {
  let button = document.querySelector("#special-button");
  alert("Hooray!");
}
let button = document.querySelector("#special-button");
button.addEventListener("click", clickButton);

//challenge 2
function allertPassword() {
  let searchInput = document.querySelector("#password-input");
  alert(`Your super secret password is: ${searchInput.value}`);
}
let form = document.querySelector("#password-form");
form.addEventListener("submit", allertPassword);

//challenge 3
function allertValues(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let usernameInput = document.querySelector("#username-input");
  alert(`Your e-mail address is: ${emailInput.value}`);
  alert(`Your username is: ${usernameInput.value}`);
}
let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", allertValues);
