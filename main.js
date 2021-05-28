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

let a = 0,
  b = 0;
a = prompt("First number to add");
b = prompt("Second number to add");
console.log(add(a, b));
console.log(substract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));