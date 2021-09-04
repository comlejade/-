class Product {
  constructor(name) {
    this.name = name
  }

  init () {
    console.log('init')
  }

  fn1 () {
    console.log('fn1')
  }

  fn2 () {
    console.log('fn2')
  }
}

class Creator {
  create (name) {
    return new Product(name)
  }
}
