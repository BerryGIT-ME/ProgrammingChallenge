/**
 * dictionary of words is stored in a json file
 * credits for the json file: https://github.com/dwyl/english-words/find/master
 * @param {*} str
 */

// testcases
let TestCase = ["M>P", "L>A", "A>M"];

let fs = require("fs");
let dictionary;
let rawdata = fs.readFileSync("words_dictionary.json");
dictionary = JSON.parse(rawdata);

const checkword = (str = []) => {
  let word = str.join("");
  if (dictionary[word] === 1) return 1;
  return 0;
};

const word = (str = []) => {
  // combine to form a char array
  let combine = str.join("").split(">").join("").toLocaleLowerCase().split("");

  // remove duplicates
  let unique = new Set(combine);

  // convert back to array
  let char = Array.from(unique);

  if (checkword(char) === 1) return char.join("").toUpperCase();

  // otherwise shift the array and repeat
  let wordExist = false;
  while (!wordExist) {
    char = rotate(char, 1);
    let value = checkword(char);
    if (value == 1) break;
  }
  return char.join("").toUpperCase();
};

const rotate = (A, K) => {
  let myArray = [...A];
  let L = myArray.length;

  let tempStore1 = myArray[(L - K) % L];
  let index = 0;
  let tempStore2;

  let used = new Set();
  for (let element of myArray) {
    tempStore2 = myArray[index];
    myArray[index] = tempStore1;
    used.add(index);
    tempStore1 = tempStore2;
    index = (index + K) % L;
    if (used.has(index)) {
      index++;
      index = index % L;
      tempStore1 = A[index];
      index = (index + K) % L;
    }
  }
  return myArray;
};

console.log(word(TestCase));
