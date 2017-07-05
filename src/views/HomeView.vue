<template lang="pug">
div
  h1 Gini-Vue-Template
  div.container
</template>

<script>
import User from 'components/User.vue'

export default {
  name: 'home-view',
  components: { User },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  text-align center
h1
  font-family fantasy
  margin 40px auto
  text-align center
  font-size 60px
  color #369d8b
</style>
