class SingleObject {
  login () {
    console.log('login ...')
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (instance == null) {
      instance = new SingleObject()
    }
    return instance
  }
})()

const instance1 = SingleObject.getInstance()
const instance2 = SingleObject.getInstance()

