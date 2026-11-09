const frequency = require("../Ex5-frequency");

describe("frequency", () => {
  test("counts words case-insensitively and ignores extra whitespace", () => {
    expect(frequency("Hello Mohammad Mohammad     ok HELLO")).toEqual({
      hello: 2,
      mohammad: 2,
      ok: 1,
    });
  });

  test("ignores punctuation and numeric characters", () => {
    expect(frequency("Hello Mohammad ok, Mohammad 1 1 ,,")).toEqual({
      hello: 1,
      mohammad: 2,
      ok: 1,
    });
  });

  test("returns an empty object for whitespace-only input", () => {
    expect(frequency("    ")).toEqual({});
  });
  test("throws a TypeError when the input is not a string", () => {
    expect(() => frequency(1)).toThrow("input must be a string");
    expect(() => frequency(123)).toThrow(TypeError);
  });
});
