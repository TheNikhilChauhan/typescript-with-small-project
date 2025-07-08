//function - doesn't return anything

function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Tony Stark");

//function - return the value
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(5, 4));

//return a boolean value

function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(28));

//a function that takes another function as input, and runs it after 1 second.

function anotherFun(fn: () => void) {
  setTimeout(fn, 1000);
}

anotherFun(function () {
  console.log("Ola Amigo!");
});
