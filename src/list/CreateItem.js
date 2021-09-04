import Item from './Item'

// 用代理模式处理折扣
function createDiscountItem (itemData) {
  return new Proxy(itemData, {
    get: function (target, key) {
      if (key === 'name') {
        return `${target[key]} 【折扣】`
      }

      if (key === 'price') {
        return target[key] * 0.8
      }

      return target[key]
    }
  })
}

// 工厂函数
export default function (list, itemData) {
  if (itemData.discount) {
    itemData = createDiscountItem(itemData)
  }
  return new Item(list, itemData)
}