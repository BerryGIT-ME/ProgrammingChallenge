/**
 *
 * @param {*} cardArray
 * @returns {number} of complete decks
 */
const decksOfCards = (cardArray = []) => {
  let cards = cardArray;
  if (cards.length < 52) return 0;
  let H = new Set();
  let C = new Set();
  let D = new Set();
  let S = new Set();
  let decks = 0;
  let element;
  while (cards.length >= 52) {
    for (let i = 0; i < cards.length; i++) {
      element = cards[i];
      if (element === null) continue;
      if (element[1] === "H") {
        if (H.has(element[0])) continue;
        H.add(element[0]);
      } else if (element[1] === "C") {
        if (C.has(element[0])) continue;
        C.add(element[0]);
      } else if (element[1] === "D") {
        if (D.has(element[0])) continue;
        D.add(element[0]);
      } else if (element[1] === "S") {
        if (S.has(element[0])) continue;
        S.add(element[0]);
      }
      cards[i] = null;
    }
    cards = cards.filter((card) => card !== null);
    if (H.size === 13 && C.size === 13 && D.size === 13 && S.size === 13) {
      decks++;
    }
    if (decks === 0) break;
    H.clear();
    C.clear();
    D.clear();
    S.clear();
  }
  return decks;
};

let input = [
  "AC",
  "2C",
  "2D",
  "2H",
  "3S",
  "3C",
  "3D",
  "3H",
  "4S",
  "4C",
  "4D",
  "4H",
  "5S",
  "5C",
  "5D",
  "5H",
  "6S",
  "6C",
  "6D",
  "6H",
  "7S",
  "7C",
  "7D",
  "7H",
  "8S",
  "8C",
  "8D",
  "8H",
  "9S",
  "9C",
  "9D",
  "9H",
  "TS",
  "TC",
  "TD",
  "TH",
  "JS",
  "JC",
  "JD",
  "JH",
  "QS",
  "QC",
  "QD",
  "QH",
  "KS",
  "KC",
  "KD",
  "KH",
  "AS",
  "AC",
  "AD",
  "AH",
  "AC",
  "2C",
  "2D",
  "2H",
  "3S",
  "3C",
  "3D",
  "3H",
  "4S",
  "4C",
  "4D",
  "4H",
  "5S",
  "5C",
  "5D",
  "5H",
  "6S",
  "6C",
  "6D",
  "6H",
  "7S",
  "7C",
  "7D",
  "7H",
  "8S",
  "8C",
  "8D",
  "8H",
  "9S",
  "9C",
  "9D",
  "9H",
  "TS",
  "TC",
  "TD",
  "TH",
  "JS",
  "JC",
  "JD",
  "JH",
  "QS",
  "QC",
  "QD",
  "QH",
  "KS",
  "KC",
  "KD",
  "KH",
  "AS",
  "AC",
  "AD",
  "AH",
  "AC",
  "2C",
  "2D",
  "2H",
  "3S",
  "3C",
  "3D",
  "3H",
  "4S",
  "4C",
  "4D",
  "4H",
  "5S",
  "5C",
  "5D",
  "5H",
  "6S",
  "6C",
  "6D",
  "6H",
  "7S",
  "7C",
  "7D",
  "7H",
  "8S",
  "8C",
  "8D",
  "8H",
  "9S",
  "9C",
  "9D",
  "9H",
  "TS",
  "TC",
  "TD",
  "TH",
  "JS",
  "JC",
  "JD",
  "JH",
  "QS",
  "QC",
  "QD",
  "QH",
  "KS",
  "KC",
  "KD",
  "KH",
  "AS",
  "AC",
  "AD",
  "AH",
];
console.log(decksOfCards(input));
