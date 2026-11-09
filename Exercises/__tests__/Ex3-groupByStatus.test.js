const groupByStatus = require("../Ex3-groupByStatus");

describe("groupByStatus", () => {
  test("groups tasks by their status", () => {
    const tasksData = [
      { id: 1, title: "Learn Jest", status: "completed" },
      { id: 2, title: "Learn Jest1", status: "completed" },
      { id: 3, title: "Practice JS", status: "progress" },
    ];
    const tasksResult = {
      completed: [
        { id: 1, title: "Learn Jest", status: "completed" },
        { id: 2, title: "Learn Jest1", status: "completed" },
      ],
      progress: [{ id: 3, title: "Practice JS", status: "progress" }],
    };

    expect(groupByStatus(tasksData)).toEqual(tasksResult);
  });
  test("throws when the input is an object instead of an array", () => {
    const tasksData = { id: 1, title: "Learn JS" };

    expect(() => groupByStatus(tasksData)).toThrow("Tasks must be an array");
  });
  test("throws when the input is not an array", () => {
    expect(() => groupByStatus(1)).toThrow("Tasks must be an array");
  });
  test("groups tasks with missing or invalid statuses as Unknown", () => {
    const tasksData = [
      { id: 1, title: "Learn JS" },
      { id: 1, title: "Learn JS", status: 0 },
      { id: 1, title: "number", status: 1 },
      { id: 1, title: "Learn JS", status: false },
      { id: 4, title: "Practice JS", status: null },
      { id: 2, title: "Learn Jest", status: "completed" },
    ];
    const tasksResult = {
      Unknown: [
        { id: 1, title: "Learn JS" },
        { id: 1, title: "Learn JS", status: 0 },
        { id: 1, title: "number", status: 1 },
        { id: 1, title: "Learn JS", status: false },
        { id: 4, title: "Practice JS", status: null },
      ],
      completed: [{ id: 2, title: "Learn Jest", status: "completed" }],
    };

    expect(groupByStatus(tasksData)).toEqual(tasksResult);
  });
});
