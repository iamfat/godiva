<template>
  <div class="home">
    <mu-content-block>
      <mu-raised-button label="添加新的分析" icon="add" primary/>
    </mu-content-block>
    <mu-content-block>
      <mu-row gutter>
        <template v-for="(row,index) in 5">
          <mu-col width="100" tablet="33" desktop="25">
            <mu-paper style="height:200px;padding:5px 10px;margin-bottom:15px" :zDepth="1">
              <h3><router-link :to="'/analysis/'+index">2015-2017年度仪器使用数据对比</router-link></h3>
              <mu-avatar icon="insert_chart"/>
            </mu-paper>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="修改" @click="$router.push('/analysis/'+index)"/>
              <mu-menu-item title="删除" />
            </mu-icon-menu>
          </mu-col>
        </template>
      </mu-row>
    </mu-content-block>
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
</style>
