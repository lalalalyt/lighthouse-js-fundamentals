const squareCode = function (message) {
  let letter = ""
  const reverse = []
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== " ") {
      letter += message[i]
    }
  }
  const column = Math.ceil(Math.sqrt(letter.length))
  const row = Math.ceil(letter.length / column)

  
  for (let i = 0; i < column; i++) {
    reverse[i] = []
    for (let j = 0; j < row; j++) {
      reverse[i][j] = letter[j * column + i]
    }
    reverse[i] = reverse[i].join("")
  }

  return reverse.join(" ")

}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));