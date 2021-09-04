class Adaptee {
  specificRequest () {
    return '德国标准的插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request () {
    let info = this.adaptee.specificRequest()
    return `${info} -> 转换器 -> 中国标准插头`
  }
}

const target = new Target()

const res = target.request()

console.log(res)