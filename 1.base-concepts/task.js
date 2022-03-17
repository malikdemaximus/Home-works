function solveEquation(a, b, c) {
  let arr = [];
  let d = 0;
  // код для задачи №1 писать здесь
  d = b * b - 4 * a * c;
  console.log(d);
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
