const multiplicationTable = function (maxValue) {
  const table = []
  for (let i = 0; i < maxValue; i++) {
    const row = []
    for (let j = i + 1; j <= maxValue * (i + 1); j = j + i + 1) {
      row.push(j)
    }
    let strRow=row.join(" ")
    table.push(strRow)
  }
  let strTable=table.join("\n")
  return strTable
};



console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));