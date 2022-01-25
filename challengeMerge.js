
const merge = function (array1, array2) {
  const arrayNew = [...array1, ...array2]
  arrayNew.sort()
  return arrayNew
}



console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]); console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([2, 5, 6], [1, 3, 4]), "=?", [1, 2, 3, 4, 5, 6]);



