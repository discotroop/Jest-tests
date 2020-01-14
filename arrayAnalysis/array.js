function calculateAverage(numArray) {
  let result = 0;
  for (let i = 0; i < numArray.length; i++) {
    result += numArray[i];
  }
  return result / numArray.length;
}

function calculateMin(numArray) {
  return Math.min(...numArray);
}

function calculateMax(numArray) {
  return Math.max(...numArray);
}

function analysis(numArray) {
    let result = {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    }
    result.average = calculateAverage(numArray);
    result.min = calculateMin(numArray);
    result.max = calculateMax(numArray);
    result.length = numArray.length;
    return result;
  }
  module.exports = analysis;