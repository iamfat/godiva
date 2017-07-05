import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import add from './add'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/home' },
      home,
      add
    ]
  })
}
