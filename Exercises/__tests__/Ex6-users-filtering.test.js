const {
  getActiveUsers,
  getUsersAboveAge,
  getUserEmails,
  sortUsersAlphabetically,
} = require("../Ex6-users-filtering");

describe("user filtering helpers", () => {
  const users = [
    { id: 1, name: "Mohammad", age: 25, isActive: true, email: "m@test.com" },
    { id: 2, name: "Sameh", age: 17, isActive: false, email: "s@test.com" },
    { id: 3, name: "Omar", age: 30, isActive: true, email: "o@test.com" },
    { id: 4, name: "Ali", age: 22, isActive: true, email: "a@test.com" },
    { id: 5, name: "Maya", age: 19, isActive: false, email: "ma@test.com" },
  ];

  describe("getActiveUsers", () => {
    test("returns only users whose isActive value is true", () => {
      expect(getActiveUsers(users)).toEqual([users[0], users[2], users[3]]);
    });

    test("returns an empty array when there are no active users", () => {
      expect(getActiveUsers([{ isActive: false }, { isActive: 1 }])).toEqual(
        [],
      );
    });
  });

  describe("getUsersAboveAge", () => {
    test("returns users older than the given age", () => {
      expect(getUsersAboveAge(users, 22)).toEqual([users[0], users[2]]);
    });

    test("does not include users whose age equals the given age", () => {
      expect(getUsersAboveAge(users, 25)).toEqual([users[2]]);
    });
  });

  describe("getUserEmails", () => {
    test("returns email addresses in the same order as the users", () => {
      expect(getUserEmails(users)).toEqual([
        "m@test.com",
        "s@test.com",
        "o@test.com",
        "a@test.com",
        "ma@test.com",
      ]);
    });
  });

  describe("sortUsersAlphabetically", () => {
    // test("returns users sorted by name alphabetically", () => {
    //   expect(sortUsersAlphabetically(users)).toEqual([
    //     { id: 4, name: "Ali", age: 22, isActive: true, email: "a@test.com" },
    //     {
    //       id: 1,
    //       name: "Mohammad",
    //       age: 25,
    //       isActive: true,
    //       email: "m@test.com",
    //     },
    //     { id: 2, name: "Sameh", age: 17, isActive: false, email: "s@test.com" },
    //     { id: 3, name: "Omar", age: 30, isActive: true, email: "o@test.com" },
    //     { id: 5, name: "Maya", age: 19, isActive: false, email: "ma@test.com" },
    //   ]);
    // });

    test("returns users sorted by name alphabetically", () => {
      expect(sortUsersAlphabetically(users).map((user) => user.name)).toEqual([
        "Ali",
        "Maya",
        "Mohammad",
        "Omar",
        "Sameh",
      ]);
    });

    test("does not mutate the input array", () => {
      const usersToSort = [...users];

      sortUsersAlphabetically(usersToSort);

      expect(usersToSort).toEqual(users);
    });
  });
});
