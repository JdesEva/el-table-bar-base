<template>
  <div id="app">
    <!-- <el-row :gutter="20" type="flex">
      <el-col :span="8">
        <span>如果没有出现横向滚动条，请尝试缩小窗口大小观看例子</span>
        <el-table-bar fixed>
          <el-table :data="idata" stripe border>
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
          </el-table>
        </el-table-bar>
      </el-col>
    </el-row>
    <br >
    <br >
    <el-row>
      <el-col style="height:400px;overflow:hidden;">
        <el-table-bar height="400px">
          <el-table :data="idata" stripe border>
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
          </el-table>
        </el-table-bar>
      </el-col>
    </el-row> -->
    <el-button type="primary" @click="addColumn">动态列</el-button>
    <el-button type="danger" @click="removeColumn">移除列</el-button>
    <el-button @click="vdata = data">1</el-button>
    <el-button @click="vdata = []">2</el-button>
    <el-button @click="vdata = [...data, ...data]">3</el-button>
    <el-button @click="vdata = data.slice(0, 10)">4</el-button>
    <el-button @click="vdata = [...data, ...data.slice(0, 10)]">5</el-button>
    <el-button @click="vdata = [...data, ...data, ...data]">6</el-button>
    <el-row>
      <el-col :span="4">
        <h4>动态列</h4>
        <el-table-bar ref="vRef" fixed>
          <el-table :data="vdata" stripe border>
            <el-table-column
              v-for="(item, index) in TableColumn"
              :key="`a-${index}`"
              show-overflow-tooltip
              :label="item.label"
              :prop="item.prop"
            />
          </el-table>
        </el-table-bar>
      </el-col>
      <el-col :span="8">
        <el-table-bar fixed>
          <el-table
            style="width: 100%; border-radius: 5px"
            highlight-current-row
            :row-style="{ height: 0 }"
            :data="vdata"
            stripe
            border
            @cell-click="visibile = true"
          >
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column
              sortable
              show-overflow-tooltip
              label="日期"
              prop="date"
            />
            <el-table-column
              show-overflow-tooltip
              label="地址"
              prop="address"
            />
            <el-table-column show-overflow-tooltip label="姓名" prop="name" />
            <el-table-column show-overflow-tooltip label="日期" prop="date" />
          </el-table>
        </el-table-bar>
        <el-pagination
          :current-page.sync="currpage"
          :page-size="10"
          background
          layout="prev, pager, next, jumper"
          :page-count="total"
          @current-change="_initTableList"
        />
      </el-col>
    </el-row>
    <el-dialog :visible.sync="visibile"> 13123123123 </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {
      idata: [],
      vdata: [],
      currpage: 1,
      total: 100,
      visibile: false,
      TableColumn: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ],
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
        this.vdata = this.data
      }, 3000)
    })
  },
  methods: {
    _initTableList () {
      // this.vdata = []
      this.$nextTick(() => {
        setTimeout(() => {
          this.vdata = [...this.data]
        }, 2000)
      })
    },
    addColumn () {
      this.TableColumn = [...this.TableColumn, ...this.TableColumn]
    },
    removeColumn () {
      this.TableColumn = this.TableColumn.slice(0, 2)
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
