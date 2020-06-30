// Array reverse

let current = 0
let table = []
while (current < 5) {
  const entry = `square of ${current} is ${current * current}`
  table.push(entry)
  current += 1
}
console.log(`reverse ${table.reverse()}`)
console.log(`new table: ${table}`)

for (let line of table) {
  console.log(line)
}

// isTruthy
//
//
const values = [0, 1, '', 'text', undefined, null, [], [2, 3]]
const isTruthy = (value) => {
	if (Array.isArray(value) && !value.length){
		return false
	} else {
		return Boolean(value)
	}
}
for (value of values) {
	console.log(isTruthy(value))
}

// Combining different types
//
const first = [3, 7, 8, 9, 1]
console.log(`aggregating ${first}`)
let total = 0
for (let d of first) {
  total += d
}
console.log(total)


const second = [0, 3, -1, NaN, 8]
console.log(`aggregating ${second}`)
total = 0
for (let d of second) {
  total += d
}
console.log(total)

//Destructuring assignment
//
const creature = {
  genus: 'Callithrix',
  species: 'Jacchus',
  testing: 'Testing'
}
const {genus, testing} = creature
console.log(`genus is ${genus}`)
console.log(`species is ${testing}`)

const {utilities, clip} = require("../utilities.js")
const data = [-1, 5, 3, 0, 10]
console.log(`clip(${data}) -> ${clip(data)}`)

const verbose_sum = (first, second) => {
  console.log(`Going to add ${first} to ${second}`)
  let total = first + second
  return total
  console.log(`Finished summing`)
}

var result = verbose_sum(3, 6)
console.log(result)
