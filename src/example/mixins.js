function mixins (...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
    // console.log(Object.assign)
  }
}

const Foo = {
  foo () {
    console.log('foo')
  }
}

@mixins(Foo)
class MyClass {

}

const myClass = new MyClass()
myClass.foo()