const sumLargestNumbers = function (data) {
  let large1 = 0
  let large2 = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= large1) {
      large2 = large1;
      large1 = data[i]
    }
    else if (data[i] >= large2) { large2 = data[i] }
  }
  return large1 + large2
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));