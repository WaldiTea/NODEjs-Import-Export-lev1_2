const { names, num } = require("./data");

const {
  giveFirstElement,
  giveAllNotLast,
  giveLastElement,
  giveAllNotFirst,
  giveChosenElement,
  removeChosenElement,
  removeDuplicates,
  sumArray,
  randomNum,
  capitalizeInitial,
  capitalizeWord,
  checkIncludeLetter
} = require("./functions");

console.log(giveFirstElement(names));
console.log(giveAllNotLast(names));
console.log(giveLastElement(names));
console.log(giveAllNotFirst(names));
console.log(giveChosenElement(names, 0));

console.log(removeChosenElement());

console.log(removeDuplicates(num));
console.log(sumArray(num));

console.log(randomNum(4, 10));

console.log(capitalizeInitial("hallo"));
console.log(capitalizeWord("welt"));
console.log(checkIncludeLetter("Pokemon", "o"));
