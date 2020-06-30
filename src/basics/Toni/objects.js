const creature = {
  'order': 'Primates',
  'family': 'Callitrichidae',
  'genus': 'Callithrix',
  'species': 'Jacchus'
}

console.log(`creature is ${creature}`)
console.log(`creature.genus is ${creature.genus}`)
for (let key in creature) {
  console.log(`creature[${key}] is ${creature[key]}`)
}

for (let value of Object.values(creature)) {
	console.log(value)
}

let g = "genus"

console.log(creature.g)
console.log(creature[g])
console.log(creature["g"])
console.log(creature["genus"])
//console.log(creature[genus]) - does not work
