const removeSpaces = (str) =>
  str
    .split("")
    .filter((el) => el !== " ")
    .join("");

const reverseString = (str) => str.split("").reverse().join("");

const asciiValues = (str) =>
  str
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");

const transformString = (str) => {
  const length = str.length;
  if (length % 15 === 0) return asciiValues(reverseString(removeSpaces(str)));
  if (length % 5 === 0) return asciiValues(removeSpaces(str));
  if (length % 3 === 0) return reverseString(removeSpaces(str));
  return str;
};

console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("PizzaPizzaPizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate ")); // Output: "eikooCpihCetalocohC"
