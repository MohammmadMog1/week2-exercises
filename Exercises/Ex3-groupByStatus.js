function groupByStatus(tasks) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("Tasks must be an array");
  }
  const groupedTasks = {};

  tasks.forEach((task) => {
    const objectKey = getStatusKey(task.status);
    if (!groupedTasks[objectKey]) {
      groupedTasks[objectKey] = [];
    }
    groupedTasks[objectKey].push(task);
  });

  return groupedTasks;
}

function getStatusKey(status) {
  if (typeof status === "string" && status.trim() !== "") {
    return status.trim();
  }

  return "Unknown";
}

const tasks2 = [
  {},
  { id: 1, title: "Learn JS" },
  { id: 2, title: "Learn JS", status: 0 },
  { id: 3, title: "Learn JS", status: false },
  { id: 4, title: "Practice JS", status: null },
  { id: 5, title: "Learn Jest", status: "completed" },
  { id: 6, title: "Practice JS1", status: "progress" },
  { id: 7, title: "Practice JS", status: "progress" },
];
console.log(groupByStatus(tasks2));

module.exports = groupByStatus;
