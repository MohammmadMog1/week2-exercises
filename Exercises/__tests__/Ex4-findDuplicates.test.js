const {
  findDuplicates_way1,
  findDuplicates_way2,
} = require("../Ex4-findDuplicates");

describe("findDuplicates_way1", () => {
  test("returns an empty array when there are no duplicates", () => {
    expect(findDuplicates_way1([1, 2, 3])).toEqual([]);
  });

  test("returns an empty array for an empty input", () => {
    expect(findDuplicates_way1([])).toEqual([]);
  });

  test("returns repeated numbers only once", () => {
    expect(findDuplicates_way1([1, 1, 2, 4, 1, 2, 3, 5, 6])).toEqual([1, 2]);
  });

  test("returns repeated strings only once", () => {
    expect(
      findDuplicates_way1(["Moahmmad", "Omar", "ahmad", "Moahmmad"]),
    ).toEqual(["Moahmmad"]);
  });

  test("finds repeated boolean and null values", () => {
    expect(findDuplicates_way1([true, undefined, null, true, null])).toEqual([
      true,
      null,
    ]);
  });

  test("finds duplicates in an array with mixed value types", () => {
    expect(
      findDuplicates_way1([1, 1, 2, 2, "m", "m", "s", true, true]),
    ).toEqual([1, 2, "m", true]);
  });
});

describe("findDuplicates_way2", () => {
  test("returns an empty array when there are no duplicates", () => {
    expect(findDuplicates_way1([1, 2, 3])).toEqual([]);
  });

  test("returns an empty array for an empty input", () => {
    expect(findDuplicates_way1([])).toEqual([]);
  });

  test("returns repeated numbers only once", () => {
    expect(findDuplicates_way2([1, 1, 2, 4, 1, 2, 3, 5, 6])).toEqual([1, 2]);
  });

  test("returns repeated strings only once", () => {
    expect(
      findDuplicates_way2(["Moahmmad", "Omar", "ahmad", "Moahmmad"]),
    ).toEqual(["Moahmmad"]);
  });

  test("finds repeated boolean and null values", () => {
    expect(findDuplicates_way2([true, undefined, null, true, null])).toEqual([
      true,
      null,
    ]);
  });

  test("finds duplicates in an array with mixed value types", () => {
    expect(
      findDuplicates_way2([1, 1, 2, 2, "m", "m", "s", true, true]),
    ).toEqual([1, 2, "m", true]);
  });
});
