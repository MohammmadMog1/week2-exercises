function removeNonEnglishLetters(str) {
  return [...str]
    .filter((char) => {
      const code = char.charCodeAt(0);
      return (code >= 97 && code <= 122) || char === " ";
    })
    .join("");
}

function frequency(str) {

  if (typeof str !== "string") {
    throw new TypeError("input must be a string");
  }

  const cleaned = removeNonEnglishLetters(str.toLowerCase());

  const words = cleaned.split(/\s+/).filter((word) => word !== "");
  const counts = {};
  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

module.exports = frequency;

console.log(frequency("Hello Mohammad Mohammad     ok HELLO")); // { hello: 1, my: 1, friends: 1 }
console.log(frequency("Hello Mohammad ok, Mohammad 1 1 ,,")); // { hello: 1, mohammad: 2, ok: 1 }
console.log(frequency("")); // { }
