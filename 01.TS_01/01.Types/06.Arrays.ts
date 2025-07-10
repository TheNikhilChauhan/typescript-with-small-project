//Array

function getMax(nums: number[]) {
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxCount) {
      maxCount = nums[i];
    }
  }
  return maxCount;
}

console.log(getMax([1, 2, 3, 5, 4]));

//2. list of users, filter out the users that are legal

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  isLegal([
    {
      firstName: "Edmond",
      lastName: "Dantes",
      age: 26,
    },
    {
      firstName: "Louis",
      lastName: "Phillipe",
      age: 16,
    },
    {
      firstName: "Floyd",
      lastName: "Danglar",
      age: 29,
    },
  ])
);
