// 明星
let star = {
  name: 'zhang xxx',
  age: 20,
  phone: '137891794'
}

// 经纪人
let agent = new Proxy(star, {
  get (target, key) {
    if (key === 'phone') {
      return '194r038409'
    }

    if (key === 'price') {
      return 1000000
    }

    return target[key]
  },
  set (target, key, val) {
    if (key === 'customPrice') {
      if (val < 1000000) {
        console.log('价格太低')
      } else {
        target[key] = val
      }
    }
  }
})

