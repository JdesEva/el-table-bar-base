<template>
  <div id="app">
    <el-row :gutter="20" type="flex">
      <el-col :span="4">左侧占位</el-col>
      <el-col :span="12">
        <el-table-bar fixed>
          <el-table :data="idata" stripe border>
            <el-table-column show-overflow-tooltip label="地址" prop="address"/>
            <el-table-column show-overflow-tooltip label="姓名" prop="name"/>
            <el-table-column show-overflow-tooltip label="日期" prop="date"/>
            <el-table-column show-overflow-tooltip label="地址" prop="address"/>
            <el-table-column show-overflow-tooltip label="姓名" prop="name"/>
            <el-table-column show-overflow-tooltip label="日期" prop="date"/>
            <el-table-column show-overflow-tooltip label="地址" prop="address"/>
            <el-table-column show-overflow-tooltip label="姓名" prop="name"/>
            <el-table-column show-overflow-tooltip label="日期" prop="date"/>
          </el-table>
        </el-table-bar>
      </el-col>
      <el-col :span="8">
        <span>如果没有出现横向滚动条，请尝试缩小窗口大小观看例子</span>
        <el-table-bar>
          <el-table :data="idata" stripe border>
            <el-table-column show-overflow-tooltip label="地址" prop="address"/>
            <el-table-column show-overflow-tooltip label="姓名" prop="name"/>
            <el-table-column show-overflow-tooltip label="日期" prop="date"/>
            <el-table-column show-overflow-tooltip label="地址" prop="address"/>
            <el-table-column show-overflow-tooltip label="姓名" prop="name"/>
            <el-table-column show-overflow-tooltip label="日期" prop="date"/>
            <el-table-column show-overflow-tooltip label="地址" prop="address"/>
            <el-table-column show-overflow-tooltip label="姓名" prop="name"/>
            <el-table-column show-overflow-tooltip label="日期" prop="date"/>
          </el-table>
        </el-table-bar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>占位</el-col>
    </el-row>
    <el-row>
      <el-col>占位</el-col>
    </el-row>
    <el-row>
      <el-col>占位</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      idata: [],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.idata = this.data
      }, 3000)
    })
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
