class RealImg {
  constructor(filename) {
    this.filename = filename
    this.loadFromDisk()
  }

  display () {
    console.log('display ... ' + this.filename)
  }

  loadFromDisk () {
    console.log('loading ... ' + this.filename)
  }
}

class ProxyImg {
  constructor(filename) {
    this.realImg = new RealImg(filename)
  }
  display () {
    this.realImg.display()
  }
}

const proxyImg = new ProxyImg('demo.png')
proxyImg.display()