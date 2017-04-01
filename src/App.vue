<template>
  <div id="app">
    <mu-appbar :title="title">
      <mu-icon-button icon='menu' slot="left"/>
    </mu-appbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    title: 'GoDiVA 数据可视化分析'
  })
}
</script>
