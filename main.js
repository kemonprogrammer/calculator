const display = document.querySelector("#display");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const clear = document.querySelector("#clear");
const enter = document.querySelector("#enter");


let firstNumber = 0;
let secondNumber = 0;
let sign = "";
let result = 0;
let equation = "";

display.value = "";

const add = (a, b) => {
  return +a + +b;
}

const substract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return a / b;
}



numbers.forEach(number => {
  number.addEventListener("click", e => {
    if (sign === "") {
      equation += number.textContent;
      display.value = equation;
    } else {
      secondNumber += number.textContent;
      equation += number.textContent;
      display.value = equation;
    }
  });
})

clear.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  equation = "";
  display.value = equation;
})

operators.forEach(operator => {
  operator.addEventListener("click", () => {
    firstNumber = Number(display.value);
    sign = operator.textContent;
    equation += sign;
    display.value = equation;
  })
})

enter.addEventListener("click", () => {

  if (sign === "+") {
    result = add(firstNumber, secondNumber)
  } else if (sign === "-") {
    result = substract(firstNumber, secondNumber)
  } else if (sign === "*") {
    result = multiply(firstNumber, secondNumber)
  } else if (sign === "/") {
    result = divide(firstNumber, secondNumber)
  } else {
    alert("Error");
  }
  display.value = result;
  firstNumber = result;
  equation = firstNumber;
  sign = "";
})

let a = 0,
  b = 0;