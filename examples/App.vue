<template>
  <div id="app">
    <el-row :gutter="20" type="flex">
      <el-col :span="12">
        <el-table-bar>
          <el-table :data="data" stripe border>
            <el-table-column label="地址" prop="address"/>
            <el-table-column label="姓名" prop="name"/>
            <el-table-column label="日期" prop="date"/>
            <el-table-column label="地址" prop="address"/>
            <el-table-column label="姓名" prop="name"/>
            <el-table-column label="日期" prop="date"/>
            <el-table-column label="地址" prop="address"/>
            <el-table-column label="姓名" prop="name"/>
            <el-table-column label="日期" prop="date"/>
          </el-table>
        </el-table-bar>
      </el-col>
      <el-col :span="12">
        <span>如果没有出现横向滚动条，请尝试缩小窗口大小观看例子</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
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
        }
      ]
    }
  }
}
</script>
