function runVarLoop() {
  for (var count = 0; count < 3; count++) {
    console.log("hello var... " + count);
  }
  console.log("outside the loop", count); // 3
}
// console.log("outside the function", count);
// ReferenceError: count is not defined

function runLetLoop() {
  for (let index = 0; index < 3; index++) {
    console.log("hello let... " + index);
  }
  // console.log("outside the loop", index);
  // ReferenceError: index is not defined
}

runVarLoop();
console.log("---------------------------------------");
runLetLoop();
