class SingleObject {
  login () {
    console.log('login ...')
  }
}

SingleObject.getInstance = (function () {
  let instance
  // console.log(instance)
  return function () {
    console.log(instance)
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

// console.log(instance)

let obj1 = SingleObject.getInstance()
// obj1.login()
// console.log(obj1)

let obj2 = SingleObject.getInstance()

// console.log(obj2)