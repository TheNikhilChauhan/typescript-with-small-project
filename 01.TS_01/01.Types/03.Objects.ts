//Objects

let user1: {
  name: string;
  age: number;
} = {
  name: "Thanos",
  age: 44,
};
console.log(user1);
console.log(`The name is: ${user1.name} and age is: ${user1.age}`);

//Object inside a function

function greet(user: { name: string; age: number }) {
  console.log("Hello " + user.name);
}

let user = {
  name: "Yujiro",
  age: 45,
};

greet(user);

// Ease of using the object type
//but this way is not feasable to do so
// you need to use keyword 'type' or 'interface'

interface UserType {
  firstName: string;
  lastName: string;
  age: number;
}

function greet2(user: UserType) {
  console.log(`Hello ${user.firstName} ${user.lastName}`);
}

let user2: UserType = {
  firstName: "Knight",
  lastName: "King",
  age: 76,
};

greet2(user2);
