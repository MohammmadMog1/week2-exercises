/**
 * Normalizes an array of names by removing invalid entries,
 * filtering non-English characters, and standardizing capitalization.
 *
 * @param {unknown} names - The value to be normalized.
 * @returns {string[]} An array of normalized, valid names.
 */
function normalizeNames(names) {
  if (!Array.isArray(names)) return [];

  return names
    .filter((name) => typeof name === "string" && name.trim())
    .map((name) => removeNonEnglishLetters(name.trim()))
    .filter((name) => name.length > 0)
    .map((name) => capitalize(name));
}

/**
 * Removes all characters that are not English alphabetic letters.
 *
 * @param {string} str - The input string.
 * @returns {string} A string containing only English letters.
 */
function removeNonEnglishLetters(str) {
  const [...rest] = str;
  return rest
    .filter((char) => {
      const code = char.charCodeAt(0);
      return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    })
    .join("");
}
/**
 * Capitalizes the first character and converts the remaining
 * characters to lowercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The capitalized string, or an empty string if the input is empty.
 */
function capitalize(str) {
  if (!str) return "";
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join("").toLowerCase();
}


console.log(normalizeNames(["  alice", "BOB  ", "  charlie  ", "", "   "])); // Output: [ 'Alice', 'Bob', 'Charlie' ]
console.log(normalizeNames(["alice  ", " BOB  ", "  Mohammed  ", "", 1])); // Output: [ 'Alice', 'Bob', 'Mohammed' ]
console.log(normalizeNames(["123ggg", "@@@", "علي", "aHMAD"])); // Output: [ 'Ggg', 'Ahmad' ]

module.exports = normalizeNames;
