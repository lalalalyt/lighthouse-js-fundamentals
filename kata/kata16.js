const makeCase = function (input, type) {
  let words = input.split(" ")
  let newCase = ""

  if (type.indexOf("upper")!==-1) {
    let join = words.join(" ")
    newCase = join.toUpperCase()
    words = newCase.split(" ")
  }
  

  if (type.indexOf("lower")!==-1) {
    let join = words.join(" ")
    newCase = join.toLowerCase()
    words = newCase.split(" ")
  }



  if (type.indexOf("camel")!==-1) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (i !== 0 & j === 0) {
          newCase += words[i][j].toUpperCase()
        }
        else {
          newCase += words[i][j]
        }
      }
    }
  }

  if (type.indexOf("pascal")!==-1) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (j === 0) {
          newCase += words[i][j].toUpperCase()
        }
        else {
          newCase += words[i][j]
        }
      }
    }
  }

  if (type.indexOf("snake")!==-1) {
    newCase = words.join("_")
  }

  if (type.indexOf("kebab")!==-1) {
    newCase = words.join("-")
  }


  if (type.indexOf("title")!==-1) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (j === 0) {
          newCase += words[i][j].toUpperCase()
        }
        else {
          newCase += words[i][j]
        }
      }
      newCase += " "
    }
  }

  if (type.indexOf("vowel")!==-1) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] === "a" || words[i][j] === "e" || words[i][j] === "i" || words[i][j] === "o" || words[i][j] === "u") {
          newCase += words[i][j].toUpperCase()
        }
        else {
          newCase += words[i][j]
        }
      }
      newCase += " "
    }
  }


  if (type.indexOf("consonant")!==-1) {
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] !== "a" && words[i][j] !== "e" && words[i][j] !== "i" && words[i][j] !== "o" && words[i][j] !== "u") {
          newCase += words[i][j].toUpperCase()
        }
        else {
          newCase += words[i][j]
        }
      }
      newCase += " "
    }
  }



  return newCase
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is A String", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));