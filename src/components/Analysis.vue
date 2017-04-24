<template>
  <div class="analysis">
    <mu-content-block>
      <mu-flat-button label="返回" icon="undo" @click="$router.push('/')" primary/>
      <mu-raised-button label="保存" icon="save" primary/>
    </mu-content-block>
    <mu-divider />
    <mu-row>
      <mu-col width="100" tablet="60" desktop="75" style="position:relative">
        <div id="chart"></div>
      </mu-col>
      <mu-col width="100" tablet="40" desktop="25" class="sidebar">
        <mu-appbar title="基本信息">
        </mu-appbar>
        <mu-content-block>
          <mu-text-field label="名称" v-model="analysis.title" labelFloat fullWidth /><br/>
          <mu-select-field v-model="analysis.source" label="数据源" fullWidth>
             <mu-menu-item value="1" title="仪器信息表"/>
             <mu-menu-item value="2" title="仪器使用信息表"/>
          </mu-select-field>
        </mu-content-block>
        <mu-appbar title="维度">
          <mu-icon-button icon="add" @click="dialogAddDimension=true" slot="right" default />
        </mu-appbar>
        <mu-list>
          <template>
            <mu-list-item title="时间">
              <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                <mu-menu-item title="设置" @click="openDialogDimensionSettings"/>
                <mu-menu-item title="删除" />
              </mu-icon-menu>
            </mu-list-item>
            <mu-divider />
          </template>
        </mu-list>

        <mu-appbar title="数值">
          <mu-icon-button icon="add" slot="right" @click="dialogAddValue=true" default />
        </mu-appbar>
        <mu-list>
          <template v-for="row in 3">
            <mu-list-item title="使用计费">
              <span slot="describe">计算方式: 合计</span>
              <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                <mu-menu-item title="设置" @click="openDialogValueSettings"/>
                <mu-menu-item title="删除" />
              </mu-icon-menu>
            </mu-list-item>
            <mu-divider />
          </template>
        </mu-list>

        <mu-appbar title="呈现方式" />
        <mu-content-block>
          <br/>
          <mu-radio label="表格" name="group" nativeValue="sheet" v-model="analysis.renderMode" />
          &#160;
          <mu-radio label="图表" name="group" nativeValue="chart" v-model="analysis.renderMode" />
          <br/><br/>
          <template v-if="analysis.renderMode=='sheet'">
            <mu-switch label="显示表头" />
          </template>
          <template v-if="analysis.renderMode=='chart'">
            <mu-checkbox label="显示图表名称" /><br/><br/>
            <mu-sub-header>图表类型</mu-sub-header><br/>
            <mu-radio label="柱状图" name="chartType" nativeValue="bar" v-model="analysis.chartMode" />
            &#160;
            <mu-radio label="饼状图" name="chartType" nativeValue="pie" v-model="analysis.chartMode" />
          </template>
        </mu-content-block>
        <br/>
        <mu-divider/>
      </mu-col>
    </mu-row>

    <mu-dialog :open="dialogAddDimension" title="添加维度" @close="dialogAddDimension=false">
      <mu-content-block>
        <mu-select-field value="time">
           <mu-menu-item value="time" title="时间"/>
           <mu-menu-item value="equipment" title="仪器"/>
           <mu-menu-item value="user" title="使用者"/>
           <mu-menu-item value="owner" title="机主"/>
        </mu-select-field>
      </mu-content-block>
      <mu-divider/>
      <mu-flat-button slot="actions" @click="dialogAddDimension=false" primary label="取消"/>
      <mu-raised-button slot="actions" primary @click="dialogAddDimension=false" label="确定"/>
    </mu-dialog>

    <mu-dialog :open="dialogAddValue" title="添加数值" @close="dialogAddValue=false">
      <mu-content-block>
        <mu-select-field value="use_time">
           <mu-menu-item value="use_time" title="使用机时"/>
           <mu-menu-item value="reserv_time" title="预约机时"/>
           <mu-menu-item value="use_fee" title="使用收费"/>
           <mu-menu-item value="reserv_fee" title="预约收费"/>
        </mu-select-field>
      </mu-content-block>
      <mu-divider/>
      <mu-flat-button slot="actions" @click="dialogAddValue=false" primary label="取消"/>
      <mu-raised-button slot="actions" primary @click="dialogAddValue=false" label="确定"/>
    </mu-dialog>

    <mu-dialog :open="dialogDimensionSettings" title="维度设置" @close="closeDialogDimensionSettings">
      <mu-sub-header>分组方式</mu-sub-header><br/>
      <mu-content-block>
        <mu-select-field value="day">
           <mu-menu-item value="day" title="按日"/>
           <mu-menu-item value="week" title="按周"/>
           <mu-menu-item value="month" title="按月"/>
           <mu-menu-item value="year" title="按年"/>
        </mu-select-field>
      </mu-content-block>
      <mu-divider/>
      <br/>
      <mu-sub-header>筛选条件</mu-sub-header><br/>
      <mu-content-block>
        <mu-date-picker hintText="检索时段" autoOk/>
        <mu-date-picker hintText="到" autoOk/> <br/>
      </mu-content-block>
      <mu-divider/>
      <mu-flat-button slot="actions" @click="closeDialogDimensionSettings" primary label="取消"/>
      <mu-raised-button slot="actions" primary @click="closeDialogDimensionSettings" label="确定"/>
    </mu-dialog>

    <mu-dialog :open="dialogValueSettings" title="数值设置" @close="closeDialogValueSettings">
      <mu-content-block>
        <mu-switch label="显示数值" :value="true" />
      </mu-content-block>
      <mu-divider />
      <mu-content-block>
        <mu-text-field label="颜色代码" value="#000000"/>
        <br/>
        <mu-select-field label="坐标轴" value="Y1">
           <mu-menu-item value="Y1" title="Y1"/>
           <mu-menu-item value="Y2" title="Y2"/>
        </mu-select-field>
      </mu-content-block>
      <mu-divider />
      <mu-content-block>
        <mu-select-field label="计算方式" value="sum">
           <mu-menu-item value="sum" title="合计"/>
           <mu-menu-item value="average" title="平均数"/>
           <mu-menu-item value="min" title="最小值"/>
           <mu-menu-item value="max" title="最大值"/>
        </mu-select-field>
      </mu-content-block>
      <mu-flat-button slot="actions" @click="closeDialogValueSettings" primary label="取消"/>
      <mu-raised-button slot="actions" primary @click="closeDialogValueSettings" label="确定"/>
    </mu-dialog>

  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export default {
  methods: {
    openDialogDimensionSettings () {
      this.dialogDimensionSettings = true
    },
    closeDialogDimensionSettings () {
      this.dialogDimensionSettings = false
    },
    openDialogValueSettings () {
      this.dialogValueSettings = true
    },
    closeDialogValueSettings () {
      this.dialogValueSettings = false
    }
  },
  data () {
    return {
      dialogDimensionSettings: false,
      dialogValueSettings: false,
      dialogAddDimension: false,
      dialogAddValue: false,
      sources: [
        {value: 1, title: '影之刃'}
      ],
      analysis: {
        title: '2015-2016年度仪器使用分析',
        renderMode: 'sheet',
        chartMode: 'bar',
        source: '1'
      }
    }
  },
  mounted () {
    var chart = echarts.init(document.getElementById('chart'))
    chart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  border-left: 1px solid #ccc;
}

#chart {
  width:100%;
  min-height: 480px;
}
</style>
