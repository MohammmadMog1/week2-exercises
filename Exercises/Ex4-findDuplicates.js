function findDuplicates_way1(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

function findDuplicates_way2(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(duplicates)];
}
// console.log(findDuplicates_way2([true, NaN, undefined, NaN, null, true, null]));
// console.log(findDuplicates_way2([1, 1, 2, 2, "m", "m", "s", true, true]));
// console.log(findDuplicates_way2([1, 1, 1, 1, 2, 2]));
// console.log(findDuplicates_way1([1, 1, 2, 2, "m", "m", "s", true, true]));
// console.log(findDuplicates_way1([1, 1, 1, 1, 2, 2]));
// console.log(findDuplicates_way1([true, NaN, undefined, NaN, null, true, null]));

module.exports = {
  findDuplicates_way1,
  findDuplicates_way2,
};
