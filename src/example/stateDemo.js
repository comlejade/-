// 状态 红 黄 绿灯
class State {
  constructor(color) {
    this.color = color
  }

  handle (context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

// 主体
class Context {
  constructor() {
    this.state = null
  }

  getState () {
    return this.state
  }

  setState (state) {
    this.state = state
  }
}

// 测试
const context = new Context()

const red = new State('red')
red.handle(context)
console.log(context.getState())

const green = new State('green')
green.handle(context)
console.log(context.getState())

const yellow = new State('yellow')
yellow.handle(context)
console.log(context.getState())
