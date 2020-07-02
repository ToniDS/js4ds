//Delays
//
class Delay{
  constructor(initial){
    this.next = initial
  }
  call(next) {
    let previous = this.next
    this.next = next
    return previous
  }
}

/*let example = new Delay('a')
for (let value of ['b', 'c', 'd']) {
  console.log(value, '->', example.call(value))
} */

//Filtering
//
class Filter {
  constructor(){
    this.arguments = Array.from(arguments);
  }
  call(test){
    if (this.arguments.includes(test)){
      return null 
    } else return test
  }
}

let filter_example = new Filter('a', 'e', 'i', 'o', 'u')
for (let value of ['a', 'b', 'c', 'd', 'e']) {
  console.log(value, '->', filter_example.call(value))
}

//Pipelines
//
class Pipeline {
  constructor(){
    this.callables = Array.from(arguments);
  }
  call(argument){
    let res = 0;
    for (let callable of this.callables){
      res = callable.call(argument)
      if (res === null) {
        return res
      }
    }
    return res
  }
}
const pl_example = new Pipeline(new Filter('a', 'e', 'i', 'o', 'u'),
                             new Delay('a'))
for (let value of ['a' ,'b', 'c', 'd', 'e']) {
  console.log(value, '->', pl_example.call(value))
}
//Active expressions
//
class Active {
  constructor (name, transform) {
    this.name = name
    this.transform = this.update_transform()
    this.subscribers = []
  }

  subscribe (someone) {
    this.subscribers.push(someone)
  }
  
  update_transform(transform){
    if (transform!= None){
      return transform
    } else {
      return (x) => 3*x
    }
  }

  update (input) {
    console.log(this.name, 'got', input)
    const output = this.transform(input)

    for (let s of this.subscribers) {
      s.update(output)
    }
  }
 
}

const start = new Active('start')
const left = new Active('left', (x) => 2 * x)
const right = new Active('right', (x) => x + 1)
const final = new Active('final', (x) => x)
start.subscribe(left)
start.subscribe(right)
left.subscribe(final)
right.subscribe(final)

start.update(123)
