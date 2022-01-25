const range = function (start, end, step) {
  if (start > end) {return []}
  if (step<=0) {return []}
  if (typeof start === "number"){
  const numArray=[start]
  for (let i=start; i+step<=end; i+=step){
  numArray.push(i+step)
  }
  return numArray
}
else {return []}
}

console.log(range(0,10,2))
console.log(range(10,30,5))
console.log(range(-5,2,3))

console.log(range(5,2,3))
console.log(range(-5,2,-1))
console.log(range("say",0,2))