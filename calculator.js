
"use script";

const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");
const multiplyEl = document.getElementById("multiply");
const divideEl = document.getElementById("divide");

const calculationResult = document.getElementById("calculation-result");

function add(number1, number2) {
  return number1 + number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number1 || number2) return number1 / number2;
  else return "Error"
}

document.addEventListener("DOMContentLoaded", function () {
  addEl.addEventListener("click", () => performOperation(add));
  subtractEl.addEventListener("click", () => performOperation(substract));
  multiplyEl.addEventListener("click", () => performOperation(multiply));
  divideEl.addEventListener("click", () => performOperation(divide));
});

const performOperation = (func) => {
  const num1 = parseFloat(document.getElementById("number1").value) || 0;
  const num2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = func(num1, num2);
  calculationResult.textContent = result;
};
