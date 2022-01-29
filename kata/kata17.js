const urlDecode = function (text) {
  const object1 = {}
  let property = []
  const array1 = text.split("%20")
  const string1 = array1.join(" ")

  const array2 = string1.split("&")
  for (let i = 0; i < array2.length; i++) {
    property = array2[i].split("=")
    object1[property[0]] = property[1]
  }
  return object1
};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
