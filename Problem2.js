/**
 * Task: flatten out the given array
 * Limitations: Do not make use of array functions other than push() and conCat()
 *
 * Method:  -loop through the array and test if any element is an array itself
 *          -upon reaching such an element, split the array into three
 *          -1 Array before the element
 *          -2 The element that is an array itself
 *          -3 The remaining part of the array
 *          - conCat all three arrays and repeat the process untill no element in the array is an array
 *
 */
let arrayToFlat = [1, 2, [3, 4, [5, 6], 7, [8, 9]]];

// loop through the array
let flat = false;
let tempStore1;
let tempStore2;
let tempStore3;
while (!flat) {
  for (let i = 0; i < arrayToFlat.length; i++) {
    //check if any element of the array is an array itself

    if (arrayToFlat[i].length) {
      // array found, split the array into the 3
      // copy first part
      let tempStore1 = [];
      let j = 0;
      while (j < i) {
        tempStore1[j] = arrayToFlat[j];
        j++;
      }
      // copy the second part
      tempStore2 = arrayToFlat[i];
      // copy the third part if it exist
      if (arrayToFlat[i + 1]) {
        // copy the third part
        tempStore3 = [];
        let k = i + 1;
        let index = 0;
        while (k < arrayToFlat.length) {
          tempStore3[index] = arrayToFlat[k];
          k++;
          index++;
        }
        arrayToFlat = tempStore1.concat(tempStore2).concat(tempStore3);
      } else {
        arrayToFlat = tempStore1.concat(tempStore2);
      }
    }
  }

  flat = true;
}

console.log(arrayToFlat);
