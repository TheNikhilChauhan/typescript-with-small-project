//Number

let count: number = 10;
console.log(count);

//type inference
let msg = "Hello, TypeScript";
console.log(msg);

//type annotations
let message: string = "Hey there! How are you?";
console.log(message);

//boolean
let isActive: boolean = true;
console.log(isActive);

//null and undefined

let result: null = null;
let data: undefined = undefined;

console.log(result, data);

//symbol
const s1: symbol = Symbol("Air");
const s2 = Symbol("Air");
console.log(s1 === s2);

//function - doesn't return anything

function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Tony Stark");
