const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const undo = document.querySelector("#delete");
const enter = document.querySelector("#enter");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));


let firstNumber = "";
let secondNumber = "";
let sign = "";
let result = 0;
let equation = "";


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

const showEquation = () => {
  equation = firstNumber + sign + secondNumber;
  display.textContent = equation;
}

showEquation();

clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  sign = "";
  showEquation();
})

undo.addEventListener("click", () => {
  if (sign === "") {
    firstNumber = firstNumber.slice(0, -1);
  } else {
    secondNumber = secondNumber.slice(0, -1);
  }
  showEquation();
})

numbers.forEach(number => {
  number.addEventListener("click", () => {
    if (sign === "") {
      firstNumber += number.textContent;
    } else {
      secondNumber += number.textContent;
    }
    showEquation();
  });
})

operators.forEach(operator => {
  operator.addEventListener("click", () => {
    firstNumber = Number(display.textContent);
    sign = operator.textContent;
    showEquation();
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
    result = divide(firstNumber, secondNumber);
    if (result === Infinity) result = "NaN";
  } else {
    result = "Error";
  }
  sign = "";
  firstNumber = result;
  secondNumber = "";
  showEquation();
  firstNumber = "";
})

window.addEventListener("keydown", e => {

  const key = document.querySelector(`button[data-key="${e.key}"]`);
  if (key != null) {
    key.click();
  }
})