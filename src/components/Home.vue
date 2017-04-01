<template>
  <div class="home">
    <mu-content-block>
      <mu-raised-button label="添加新的分析" icon="add" default/>
    </mu-content-block>
    <mu-list>
      <template v-for="(row,index) in 5">
        <mu-list-item>
          <span slot="title" @click="$router.push('/analysis/'+index)">2015-2017年度仪器使用数据对比</span>
          <mu-avatar slot="left" icon="insert_chart"/>
          <span slot="describe">
            实在编不下去，这就是个demo
          </span>
          <mu-paper style="width:320px;height:200px;margin:20px" :zDepth="2" />
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="修改" @click="$router.push('/analysis/'+index)"/>
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </template>
    </mu-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome 1to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
