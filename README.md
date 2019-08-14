# `el-table-bar-base`

> 自定义`element-ui` 表格滚动条组件 by Jdes on 2019-02-18

> 由于 `npm` 的 OTP 验证问题,原来的 `el-table-bar` 迁移至 `el-table-bar-base` 请使用者删除原始包后下载 `el-table-bar-base` 原有功能不变

## update Log

### v2.0.6

· 说明文档更新

#### v2.0.5

· 修复 `offsetLeft` 在嵌套路由下出现的计算偏差

· 使用 `getBoundingClientRect` 获取相应的距离参数

· 新增 `static` 模式

#### v2.0.3

· 更新浏览器兼容性，修改 `Firefox` 兼容策略

#### v2.0.2

· 正式版本更新

· 修复若干 bug

· 感谢 [suchenglin2017](https://github.com/suchenglin2017) 提供的新思路

#### tips

> 开启横向滚动条自适应功能之后，可能会出现滚轮滚动，表格滚动到底部时，滚动条没有复位的情况。此时，鼠标移动（进出表格）即可解决，或者调低 滚轮响应延迟
> 此项问题不是 bug 是因为做了函数节流优化，为了性能不得不做出的妥协，望周知。
> 另：滚轮响应延迟在 `FireFox` 下会有短暂响应延迟，功能不受影响

### API

| props  | type    | default | explain                           |
| ------ | ------- | ------- | --------------------------------- |
| fixed  | Boolean | false   | 开启滚动条自适应                  |
| bottom | Number  | 15      | 滚动条自适应距离窗口底部距离      |
| delay  | Number  | 300(ms) | 滚轮响应延迟                      |
| static | Boolean | false   | 静态表格,有预设值的表格请设置此项 |

### 示例&example

#### default

![image](examples/images/default.png)

#### fixed

![image](examples/images/fixed.png)

![image](examples/images/fixed2.png)

### 安装&Install

You can use Yarn or NPM

```shell
yarn add el-table-bar-base
```

OR

```shell
npm i el-table-bar-base
```

### 用法&Usage

`main.js`

```js
import ElTableBar from 'el-table-bar-base'
import 'el-table-bar-base/lib/ElTableBar.css'

Vue.use(ElTableBar)
```

### 模板语法&`Template`

```html
<template>
  <div>
    <el-table-bar>
      <el-table>
        ...
      </el-table>
    </el-table-bar>
  </div>
</template>
```
