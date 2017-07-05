const Home = r => require.ensure([], () => r(require('views/HomeView.vue')), 'home')

export default {
  path: '/home',
  component: Home
}
