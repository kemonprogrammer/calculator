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


clear.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  equation = "";
  display.value = equation;
})

undo.addEventListener("click", () => {
  if (sign === "") {
    firstNumber = firstNumber.slice(0, -1);
    alert(firstNumber);
    equation = firstNumber;
    display.value = equation;
  } else {
    secondNumber = secondNumber.slice(0, -1);
    equation = firstNumber + sign + secondNumber;
    display.value = equation;
  }
})

numbers.forEach(number => {
  number.addEventListener("click", e => {
    if (sign === "") {
      firstNumber += number.textContent;
      equation += number.textContent;
      display.value = equation;
    } else {
      secondNumber += number.textContent;
      equation += number.textContent;
      display.value = equation;
    }
  });
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
  equation = result;
  display.value = equation;

  firstNumber = result;
  secondNumber = 0;
  sign = "";
})