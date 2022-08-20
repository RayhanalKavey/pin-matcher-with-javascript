"use strict";
//Create 4 degite pin
function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
function get4degitPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return get4degitPin();
  }
}
//set pin value
function setInputValueByID(inputID, pin) {
  const inputField = document.getElementById(inputID);
  inputField.value = pin;
}
//Click the generate pin button
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = get4degitPin();
  setInputValueByID("display-pin", pin);
});

//Click the calculator buttons with getElementsByClassName
const buttons = document.getElementsByClassName("button");
for (const button of buttons) {
  button.addEventListener("click", function (value) {
    const number = value.target.innerText;
    if (isNaN(number)) {
      console.log(number);
    } else {
      const newTypedNumber =
        document.getElementById("typed-numbers").value + number;
      setInputValueByID("typed-numbers", newTypedNumber);
    }
  });
}
