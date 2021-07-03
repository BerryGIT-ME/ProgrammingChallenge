/**
 * The function loops through the array and stores the values of the difference between the smalles
 * number found and the next largest number
 * @param {*} stocks
 * @returns {array of nums}
 */
let TestCase = [5, 7, 8, 15, 7];
const stocks = (stocks = []) => {
  if (stocks.length === 0 || stocks === undefined) return [-1, -1];
  if (stocks.length === 1) return [0, 0];

  let profit = [];
  let HArray = [];
  let LArray = [];
  let lowIdx = 0;
  let highIdx;
  const update = (highIdx, lowIdx) => {
    if (highIdx) {
      HArray.push(highIdx);
      LArray.push(lowIdx);
      let diff = stocks[highIdx] - stocks[lowIdx];
      profit.push(diff);
    }
  };
  for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] < stocks[lowIdx]) {
      update(highIdx, lowIdx);
      highIdx = undefined;
      lowIdx = i;
      continue;
    } else if (highIdx === undefined) {
      highIdx = i;
      continue;
    } else {
      if (stocks[highIdx] < stocks[i]) highIdx = i;
    }
  }

  update(highIdx, lowIdx);
  if (profit.length === 0) {
    return [0, 0];
  }
  if (profit.length === 1) {
    return [LArray[0], HArray[0]];
  }
  let max = profit[0];
  let index = 0;
  for (let i = 1; i < profit.length; i++) {
    if (profit[i] > max) {
      index = i;
      max = profit[i];
    }
  }
  return [LArray[index], HArray[index]];
};

console.log(stocks(TestCase));
