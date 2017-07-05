import Vue from 'vue'
import Router from 'vue-router'
import home from './home'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/home' },
      home
    ]
  })
}
