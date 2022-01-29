const camelCase = function(input) {
 let newWord = ""
 const wordArray = input.split(" ")
 for (let i=0; i<wordArray.length; i++) {
  for (let j=0; j<wordArray[i].length; j++){
    if (j===0 && i!==0) {newWord += wordArray[i][j].toUpperCase()}
    else {newWord += wordArray[i][j]}
  }
 }
 return newWord
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));