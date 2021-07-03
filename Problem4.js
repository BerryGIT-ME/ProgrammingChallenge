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

let TestCase = [
  "9C",
  "KS",
  "AC",
  "AH",
  "8D",
  "4C",
  "KD",
  "JC",
  "7D",
  "9D",
  "2H",
  "7C",
  "3C",
  "7S",
  "5C",
  "6H",
  "TH",
];
console.log(decksOfCards(TestCase));
