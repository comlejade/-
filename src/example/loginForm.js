class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show () {
    if (this.state === 'show') {
      console.log('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框已显示')
  }

  hide () {
    if (this.state === 'hide') {
      console.log('已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框已隐藏')
  }
}

LoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

const lf1 = LoginForm.getInstance()

const lf2 = LoginForm.getInstance()

console.log(lf1 === lf2)