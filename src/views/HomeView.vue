<template>
  <div class="container">
    <div class="search-container">
      <el-row>
        <el-col :span="12">
          <span class="logo-container">Godiva</span>
        </el-col>
        <el-col :span="12" class="opt-container">
          <router-link class="add-container" to="/add"><el-button type="primary">新建</el-button></router-link>
          <el-input
            class="form-input"
            placeholder="search"
            icon="search"
            v-model="search_val"
            :on-icon-click="searchHandler">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <hr class="hr" />
    <div class="folder-container">
    </div>
  </div>
</template>

<script>
import { Row, Col, Button, Input } from 'element-ui'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Input.name]: Input
  },
  data () {
    return {}
  },
  methods: {
    searchHandler () {
    }
  }
}
</script>

<style>
.container {
  margin: 10px auto;
}
.search-container {
  height: 50px;
  line-height: 50px;
}
.logo-container {
  display: inline-block;
  margin-left: 60px;
  font-size: 30px;
  font-family: monospace;
}
.opt-container {
  text-align: right;
}
.add-container {
  display: inline-block;
  margin-right: 40px;
}
.form-input {
  display: inline-block;
  margin-right: 60px;
  width: 200px;
}
.hr {
  color: #324157;
}
.folder-container {
  margin: 20px 40px;
}
</style>
