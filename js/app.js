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
    const typedField = document.getElementById("typed-numbers");
    const typedFieldValue = typedField.value;
    if (isNaN(number)) {
      if (number === "C") {
        typedField.value = "";
      } else if (number === "<") {
        const convertToArray = typedFieldValue.split("");
        convertToArray.pop();
        const newTypedNumber = convertToArray.join("");
        setInputValueByID("typed-numbers", newTypedNumber);
      }
    } else {
      const newTypedNumber = typedFieldValue + number;
      setInputValueByID("typed-numbers", newTypedNumber);
    }
  });
}
//get element value by id
function getElementValueByID(ID) {
  const elementField = document.getElementById(ID);
  return elementField.value;
}
//Compare if the pin is correct ot not
let count = 3;
document.getElementById("verify-pin").addEventListener("click", function () {
  const typedFieldValue = getElementValueByID("typed-numbers");
  const pinFieldValue = getElementValueByID("display-pin");
  if (pinFieldValue === "") {
    return alert("Generate pin.");
  } else if (typedFieldValue === "") {
    return alert("Input pin.");
  }
  if (typedFieldValue === pinFieldValue) {
    document.getElementById("pin-success").style.display = "block";
    document.getElementById("pin-failure").style.display = "none";
    console.log("correct pin");
  } else if (typedFieldValue !== pinFieldValue && count > 0) {
    console.log("Incorrect pin");
    document.getElementById("pin-success").style.display = "none";
    document.getElementById("pin-failure").style.display = "block";
    document.getElementById("count").innerText = count;
    count--;
    // console.log(count);
  } else {
    document.getElementById("count").innerText = "create new pin";
    console.log(count, "exceed");
  }
});
