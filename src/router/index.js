import Vue from 'vue'
import Router from 'vue-router'
import home from './home'

const Access = r => require.ensure([], () => r(require('views/error/401.vue')), 'error')

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { name: '401', path: '/401', component: Access },
      { path: '/', redirect: '/home' },
      home
    ]
  })
}
