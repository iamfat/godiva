<template lang="pug">
#app
  el-menu.el-menu-demo(theme="dark" mode="horizontal")
    el-menu-item(index='logo')
      a.brand G
  router-view
</template>

<script>
import { Menu, MenuItem } from 'element-ui'

export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  }
}
</script>

<style lang="stylus">
body
  margin 0
.brand
  color #FFF
  font-size 36px
</style>
