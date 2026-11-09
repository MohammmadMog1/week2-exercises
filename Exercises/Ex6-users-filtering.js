function getActiveUsers(users) {
  return users.filter((user) => user.isActive === true);
}

function getUsersAboveAge(users, age) {
  return users.filter((user) => user.age > age);
}

function getUserEmails(users) {
  return users.map((user) => user.email);
}

function sortUsersAlphabetically(users) {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

const users = [
  {
    id: 1,
    name: "Moahhmad",
    age: 25,
    isActive: true,
    email: "Mohammed@test.com",
  },
  { id: 2, name: "Sameh", age: 17, isActive: false, email: "smaeh@test.com" },
  { id: 3, name: "Omar", age: 30, isActive: true, email: "omar@test.com" },
  { id: 4, name: "ALi", age: 22, isActive: true, email: "Ali@test.com" },
  { id: 5, name: "Maya", age: 19, isActive: false, email: "maya@test.com" },
];

console.log(sortUsersAlphabetically(users));

module.exports = {
  getActiveUsers,
  getUsersAboveAge,
  getUserEmails,
  sortUsersAlphabetically,
};
