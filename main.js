const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const undo = document.querySelector("#delete");
const comma = document.querySelector("#comma");
const enter = document.querySelector("#enter");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"));
const negative = document.querySelector("#negative");

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
    firstNumber = firstNumber.slice(0, -1)
  } else {
    secondNumber = secondNumber.slice(0, -1)
  }
  showEquation();
})

numbers.forEach(number => {
  number.addEventListener("click", () => {
    if (sign === "") {
      firstNumber += number.textContent
    } else {
      secondNumber += number.textContent
    }
    showEquation();
  });
})

operators.forEach(operator => {
  operator.addEventListener("click", () => {

    /**
     * If an operator is clicked after the secondNumber was inserted, 
     * it should click Enter 
     */
    if (sign !== "") {

      /* if double clicking operators, nothing should happen */
      if (secondNumber === "") {
        return
      }
      enter.click()
    }
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
})

negative.addEventListener("click", (e) => {
  /* If the user is typing the 1st number */
  if (sign === "") {
    if (firstNumber[0] === "-") {
      firstNumber = firstNumber.slice(1);
    } else {
      firstNumber = "-" + firstNumber;
    }
  } else {
    /* Otherwise the user is typing the 2nd number */
    secondNumber = (secondNumber[0] === "-") ? secondNumber.slice(1) : "-" + secondNumber;
  }
  showEquation();
})

comma.addEventListener("click", () => {
  if (sign === "") {
    if (firstNumber.includes(".")) return
    else {
      firstNumber += ".";
    }
  } else {
    if (secondNumber.includes(".")) return
    else {
      secondNumber += ".";
    }
  }
  showEquation();
})

/* Keyboard Input */
window.addEventListener("keydown", e => {
  const key = document.querySelector(`button[data-key="${e.key}"]`);
  if (key != null) {
    key.click();
  }
})