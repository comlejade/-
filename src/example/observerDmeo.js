class Subject {
  constructor() {
    this.state = {}
    this.observers = []
  }

  getState () {
    return this.state
  }

  setState (state) {
    this.state = state
    this.notifyAllObservers()
  }

  notifyAllObservers () {
    this.observers.forEach(observer => {
      observer.update()
    })
  }

  attach (observer) {
    this.observers.push(observer)
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }

  update () {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

const s = new Subject()
const o1 = new Observer('o1', s)
const o2 = new Observer('o2', s)
const o3 = new Observer('o3', s)

s.setState('hahha')