const talkingCalendar = function (date) {
  let splitArray = date.split("/")
  let newDate
  const months = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "Septmber", "October", "November", "December"]
  for (let i = 0; i < months.length; i++) {
    if (splitArray[1] == i + 1) {
      newDate = months[i]
    }
  }
  if (splitArray[2]==1 || splitArray[2]==21 || splitArray[2]==31){
    newDate = newDate+" "+splitArray[2]+"st, "+splitArray[0]
  }
  else if (splitArray[2]==2 || splitArray[2]==22 ) {
    newDate = newDate+" "+splitArray[2]+"nd, "+splitArray[0]
  }
  else if (splitArray[2]==3 || splitArray[2]==23 ) {
    newDate = newDate+" "+splitArray[2]+"rd, "+splitArray[0]
  }
  else {
    newDate = newDate+" "+splitArray[2]+"th, "+splitArray[0]
  }
  return newDate
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));