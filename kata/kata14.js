const calculateChange = function (total, cash) {
  let payBack = cash - total
  const change = {}
  if (Math.floor(payBack / 2000) > 0) {
    change.twentyDollar = Math.floor(payBack / 2000)
  }
  payBack = payBack % 2000
  if (Math.floor(payBack / 1000) > 0) {
    change.tenDollar = Math.floor(payBack / 1000)
  }
  payBack = payBack % 1000
  if (Math.floor(payBack / 500) > 0) {
    change.fiveDollar = Math.floor(payBack / 500)
  }
  payBack = payBack % 500
  if (Math.floor(payBack / 200) > 0) {
    change.twoDollar = Math.floor(payBack / 200)
  }
  payBack = payBack % 200
  if (Math.floor(payBack / 100) > 0) {
    change.oneDollar = Math.floor(payBack / 100)
  }
  payBack = payBack % 100
  if (Math.floor(payBack / 25) > 0) {
    change.Quarter = Math.floor(payBack / 25)
  }
  payBack = payBack % 25
  if (Math.floor(payBack / 10) > 0) {
    change.Dime = Math.floor(payBack / 10)
  }
  payBack = payBack % 10
  if (Math.floor(payBack / 5) > 0) {
    change.Nickel = Math.floor(payBack / 5)
  }
  payBack = payBack % 5
  if (Math.floor(payBack / 1) > 0) {
    change.Penny = Math.floor(payBack / 1)
  }
  return change
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));