function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(10); // T = number
let str = identity<string>("hello"); // T = string

//Generics in array

function firstItem<T>(array: T[]): T {
  return array[0];
}

const first = firstItem<string>(["Typescript", "JavaScript", "Python"]);
console.log(first);

//Generic Interface

interface Pair<T, U> {
  first: T;
  second: U;
}

const numberPair: Pair<number, string> = {
  first: 44,
  second: "Fourty-four",
};

const stringPair: Pair<string, boolean> = {
  first: "Hi there",
  second: true,
};

console.log(stringPair, numberPair);

//Generic Class

class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(23);
const stringBox = numberBox.getValue();
console.log(stringBox);
