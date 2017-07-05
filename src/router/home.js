const Home = r => require.ensure([], () => r(require('views/HomeView.vue')), 'home')

let router = (store) => {
  return {
    path: '/home',
    component: Home,
    // 在此处做权限路由的拦截 今后可能考虑重定向到401页面
    beforeEnter (to, from, next) {
      if (store.state.user == null) {
        next({ name: '401' })
      } else {
        next()
      }
    }
  }
}
