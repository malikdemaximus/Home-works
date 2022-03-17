function compareArrays(arr1, arr2) {
  // Ваш код
  if (arr1.length === arr2.length) {
    return arr1.every((value, index) => value === arr2[index]);
  }

  return false;
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  resultArr = arr
    .filter((item) => item > 0 && item % 3 === 0)
    .map((item) => item * 10);

  return resultArr; // array
}
