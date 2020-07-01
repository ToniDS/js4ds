//Side Effects With forEach
//
const vals_2 = [[1], [2], [3]]
const doubleInPlace = (vals) => {
  vals.forEach((x, i) => x[0] = 2*x[0])
}

const doubleInPlace2 = (ignored, index, array) => {
  array[index] *= 2
}
const vals = [1, 2, 3]

  

vals.forEach(doubleInPlace2)
doubleInPlace(vals_2)
console.log(`vals after change: ${vals}`)

//AnnotatingData

data = [
  {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
  {'date': '1977-7-16', 'sex': 'F', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'PF'},
  {'date': '1977-7-16', 'sex': 'F', 'species': 'PE'},
  {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'}
]

data.reduce((x, y, i) => data[i]["seq"]= i+1)
data.forEach((x, i) => data[i]["seq"] = i+1)
console.log(data)
const result = data.filter((x) => x.sex === 'F')
result.forEach((x) => x.year = x.date.slice(0,4))
result.forEach((x) => delete x.date)

console.log(result)
  //.filter((x) => x.sex === 'F'))
