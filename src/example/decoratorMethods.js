function readonly (target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Person {
  constructor() {
    this.first = 'a'
    this.last = 'b'
  }

  @readonly
  name () {
    console.log(`${this.first} ${this.last}`)
  }
}

const p = new Person()
p.name()
p.name = function() {}
