const judgeVegetable = function(vegetables,metric) {
  let highest=0
  let submitter=""
  for (let vege of vegetables){
    if (vege[metric]>highest) {highest=vege[metric];
        submitter=vege["submitter"]   
    }
  }
  console.log(submitter)
}

//test
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)