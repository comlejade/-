class Circle {
  draw () {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }

  draw () {
    this.circle.draw()
    this.setRedBorder(this.cirlce)
  }

  setRedBorder (circle) {
    console.log('设置红色边框')
  }
}

const circle = new Circle()
const decorator = new Decorator(circle)

decorator.draw()
