// 状态备忘
class Memento {
  constructor(content) {
    this.content = content    
  }

  getContent () {
    return this.content
  }
}

// 备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }

  add (memento) {
    this.list.push(memento)
  }

  get (index) {
    return this.list[index]
  }
}

// 编辑器
class Editor {
  constructor() {
    this.content = null
  }

  // 保存当前内容到编辑器
  setContent (content) {
    this.content = content
  }

  // 获取编辑器当前内容
  getContent () {
    return this.content
  }

  // 将内容保存到 备忘录
  saveContentToMemento () {
    return new Memento(this.content)
  }

  // 获取备忘录
  getContentFromMemento () {
    this.content = memento.getContent()
  }
}

const editor = new Editor()
editor.setContent('111')

console.log(editor.getContent())
// 当前 editor 写入
editor.setContent('222')
console.log(editor.getContent())
// 存到备忘录列表
const careTaker = new CareTaker()
careTaker.add(editor.saveContentToMemento())
console.log(careTaker.get(0).getContent())