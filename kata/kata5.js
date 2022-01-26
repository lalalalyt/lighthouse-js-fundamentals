const urlEncode = function (text) {
  let newURL = ""
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      newURL += text[i]
    }
    else if ((i !== 0) && (i !== text.length - 1)) {
      newURL += "%20"
    }
  }
  return newURL
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));