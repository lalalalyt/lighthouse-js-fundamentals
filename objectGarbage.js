
const smartGarbage = function (trash, bins) {
  for (const type in bins) {
    if (trash === type) {
      bins[type] += 1

    }
  }
return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
