// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

FastClick.attach(document.body)

// simple history management
const historystate = window.sessionStorage
historystate.clear()
let historyCount = historystate.getItem('count') * 1 || 0
historystate.setItem('/', 0)

router.beforeEach(function (to, from, next) {

  const toIndex = historystate.getItem(to.path)
  const fromIndex = historystate.getItem(from.path)

  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
    	historystate.setItem('direction', 'forward')
    } else {
    	historystate.setItem('direction', 'reverse')
    }
  } else {
    ++historyCount
    historystate.setItem('count', historyCount)
    to.path !== '/' && historystate.setItem(to.path, historyCount)
    historystate.setItem('direction', 'forward')
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
