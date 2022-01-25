const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (kk) {
  let goodStations = []
for (let station of kk) {
  if ((station[1] >= 20) && (station[2] == "school" || station[2] == "community centre")) {
    goodStations.push(station[0])
  }
}
console.log(goodStations)
}
chooseStations(stations);