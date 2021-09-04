import getCart from './Cart'
import $ from 'jquery'

export default class ShoppingCart {
  constructor(app) {
    this.app = app
    this.$el = $(`<div></div>`).css({
      'padding-bottom': '10px',
      'border-bottom': '1px solid #aaa'
    })
    this.cart = getCart()
  }

  initBtn () {
    let $btn = $('<button>购物车</button>')
      let _this = this
    $btn.on('click', function () {
      _this.showCart()
    })
    this.$el.append($btn)
  }

  showCart () {
    console.log(this.cart.getList())
  }

  render () {
    this.app.$el.append(this.$el)
  }

  init () {
    this.initBtn()
    this.render()
  }
}