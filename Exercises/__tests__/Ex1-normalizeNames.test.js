const normalizeNames = require("../Ex1-normalizeNames")
/**
 * Tests the normalizeNames function to ensure that it:
 * - Removes leading and trailing whitespace.
 * - Filters out empty and non-string values.
 * - Removes non-English characters.
 * - Normalizes character casing.
 * - Returns an empty array for invalid input.
 */

describe("input validation", () => {
    test("Return the names with spaces removed and character casing changed.",()=>{
        expect(normalizeNames(["  ahmad ", "SARA", "oMaR"])).toEqual(["Ahmad", "Sara", "Omar"]);
    })
    test("Return names without empty names",()=>{
        expect(normalizeNames(["","  ahmad ", "SARA"," ","oMaR"])).toEqual(["Ahmad", "Sara", "Omar"]);
    })
    test("Return names without numbers",()=>{
        expect(normalizeNames([2,"  ahmad ", "SARA"," ","oMaR",3])).toEqual(["Ahmad", "Sara", "Omar"]);
    })
    test("Return ignores non-strings", () => {
        expect(normalizeNames([1, null, undefined, {}, "ok"])).toEqual(["Ok"]);
    });
    test("returns [] for invalid input", () => {
        expect(normalizeNames(null)).toEqual([]);
        expect(normalizeNames("not array")).toEqual([]);
    });
    test("Return Corruct Strings", () => {
        expect(normalizeNames(["123ggg", "@@@", "محمد", "aHMAD"])).toEqual([ 'Ggg', 'Ahmad' ]);
    });
})
