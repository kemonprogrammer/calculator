const display = document.querySelector("#display");
const operators = Array.from(document.querySelectorAll(".operator"));
const numbers = Array.from(document.querySelectorAll(".number"));


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


display.value = "";

numbers.forEach(number => {
  number.addEventListener("click", e => {
    display.value += number.textContent;
  });
})

let a = 0,
  b = 0;