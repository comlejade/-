import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

const fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 收藏
    onDoStore: function () {
      console.log('收藏成功')
      updateText()
    },
    // 取消收藏
    onDeleteStore: function () {
      console.log('已取消收藏')
      updateText()
    }
  }
})

const $btn = $('#btn')

function updateText () {
  $btn.text(fsm.state)
}

updateText()

$btn.on('click', function () {
  if (fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})
