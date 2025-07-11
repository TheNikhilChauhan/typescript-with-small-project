//Pick

interface User1 {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
}

type UserProfile = Pick<User1, "name" | "email">;

const displayUser = (user: UserProfile) => {
  console.log(`Name: ${user.name} and Email: ${user.email}`);
};

displayUser({
  name: "Ross Geller",
  email: "geller@gmail.com",
});

//Partial

interface User2 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User2, "name" | "email" | "age">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(user: UpdatePropsOptional) {
  console.log(
    `The user name is ${user.name}, age is ${user.age} and email is ${user.email}`
  );
}
updateUser({
  email: "ross@gmail.com",
  name: "Ross Geller",
  age: "29",
});

//Readonly

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

//Record
interface User3 {
  id: string;
  name: string;
}

type Users = Record<string, User3>;

const users: Users = {
  abc123: { id: "abc123", name: "Joey Tribbiani" },
  xyz789: { id: "xyz789", name: "Chandler Bing" },
};
console.log(users["xyz789"]);

//map

//initialize empty map
const userMap = new Map<string, User3>();

userMap.set("abc123", { id: "abc123", name: "Joey Tribbiani" });
userMap.set("xyz789", { id: "xyz789", name: "Chandler Bing" });

console.log(userMap.get("abc123"));

//Exclude

type Event1 = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Event1, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event ${event}`);
};

handleEvent("click");
