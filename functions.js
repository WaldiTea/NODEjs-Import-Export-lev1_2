const { mix, num } = require("./data");

// names
//##########
giveFirstElement = (arr) => {
  return arr[0];
}

giveAllNotLast = (arr) => {
  let newArr = [...arr];
  newArr.splice(-1, 1);
  return newArr;
}

giveLastElement = (arr) => {
  return arr[arr.length - 1];
}

giveAllNotFirst = (arr) => {
  let newArr = [...arr];
  newArr.splice(0, 1);
  return newArr;
}

giveChosenElement = (arr, n) => {
  if(n < 0 || n > arr.length) {
    return arr[arr.length - 1]
  } else {
    return arr[n];
  }
}

// mix
//##########
removeChosenElement = () => {
  const newMixArr = mix.filter((item) => item !== "remove");
  return newMixArr;
}

// num
//##########
removeDuplicates = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

sumArray = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// random
//##########
randomNum = (x, y) => {
  let random = Math.floor(Math.random() * (y - x)) + x;
  return random;
}

// strings
//##########
capitalizeInitial = (word) => {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
}

capitalizeWord = (word) => {
  let newWord = word.toUpperCase();
  return newWord;
}

checkIncludeLetter = (word, letter) => {
  if(word.charAt(word.length - 1) === letter) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
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
}