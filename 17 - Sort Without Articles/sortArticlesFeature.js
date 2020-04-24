const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

/// sort the array to alphabetize without any the a ans etc.

// const removeArticles = (str) => {
//   words = str.split(" ");
//   if (words.length <= 1) return str;
//   if (words[0] == "a" || words[0] == "the" || words[0] == "an")
//     return words.splice(1).join(" ");
//   return str;
// };
// new function that will separate the a the an words.
function strip(bandName) {
  // instead of deleting or pulling out the "a" "the" or "an"
  // were going to replace it with a RegEx. Regular expression.
  // the carrot signals the start of the expression. the "i" makes it insensitive
  // no it wont laugh at you when you fall, just helps to catch "A, a, AN, An, an etc" the space
  // inbetween is so you don't catch anyone  of those words in a word. Like "Another"
  return bandName.replace(/^(a |the |an )/i, "").trim();
  // test this by going in the console and invoking strip('a band name')
  // when that is working pass your strip() down below to your conditional to strip items being compared
  //for the sort.
}
// HOT-SHOT look at that cleaned up arrow function.
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
// taking the element bands and setting the innerHTML to be sortedBands
document.querySelector("#bands").innerHTML =
  // mapping over the sortedBands function
  sortedBands
    .map((band) => `<li>${band}</li>`)
    // Join is here to take away the commas, to make it into one big string, instead of multiple strings that would render the commas.
    .join("");

//////// old logic syntax ////////////
// const sortedBands = bands.sort(function (a, b) {
//   if (strip(a) > strip(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
console.log(sortedBands);
