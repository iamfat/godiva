const Add = r => require.ensure([], () => r(require('views/AddView.vue')), 'add')

export default {
  path: '/add',
  component: Add
}
