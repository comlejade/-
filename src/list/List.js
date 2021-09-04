import $ from 'jquery'
import { GET_LIST } from '../config/config'
import creatItem from './CreateItem'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = $('<div></div>')
  }

  // 获取数据
  loadData () {
    return fetch(GET_LIST).then(res => {
      return res.json()
    })
  }

  // 生成列表
  initItemList (data) {
    data.map(itemData => {
      // 创建一个 Item 然后 init
      let item = creatItem(this, itemData)
      item.init()
      return item
    })
  }

  // 渲染
  render () {
    this.app.$el.append(this.$el)
  }

  init () {
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(res => {
      this.render()
    })
  }
}