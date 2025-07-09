//Interface

/* interface Person {
  name: string;
  age: number;
}

let aPerson: Person = {
  name: "Gregory",
  age: 42,
};

console.log(aPerson.name);
 */

//1

/* interface users {
  name: string;
  readonly age: number;
  lastName?: string; //optional
}

function isLegal(user: users): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

let user: users = {
  name: "Gregory",
  age: 42,
};

console.log(isLegal(user));

//implement interface as a class
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
} */

/* class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
} */

/* let employee = new Employee("Gregory", 42);

console.log(employee.name, employee.age);
employee.greet("Good Morning"); */
