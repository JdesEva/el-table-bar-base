# el-table-bar-base

## 自定义 element-ui 表格滚动条组件

## by Jdes on 2019-02-18

### 由于 npm 的 OTP 验证问题,原来的 el-table-bar 迁移至 el-table-bar-base 请使用者删除原始包后下载 el-table-bar-base 原有功能不变

```
## update Log

#v1.1.0
修复Edge,FireFox下横向滚动条无法滚动的问题

#v2.0.0-beta

新增功能:
横向滚动条自适应屏幕，当表格长度大于一屏幕，且横向出现滚动条时，可以设置开启此功能。
开启之后，横向滚动条会出现在窗口底部，自动适应，当表格底部出现在视窗内，则滚动条自动复位至表格底部

感谢 @suchenglin2017  提供的新思路


## tips

开启横向滚动条自适应功能之后，可能会出现滚轮滚动，表格滚动到底部时，滚动条没有复位的情况。此时，鼠标移动（进出表格）即可解决，或者调低 滚轮响应延迟

此项问题不是 bug 是因为做了函数节流优化，为了性能不得不做出的妥协，往周知。

另：滚轮响应延迟在 FireFox 下会有短暂响应延迟，功能不受影响

```

### API

```
  +-----------+---------------+-------------+-----------------------------+
  |  props    |     type      |    default  |   explain                   |
  +-----------+---------------+-------------+-----------------------------+
  |  fixed    |    Boolean    |    false    |  开启滚动条自适应             |
  +-----------+---------------+-------------+-----------------------------+
  |  bottom   |    Number     |     15      |  滚动条自适应距离窗口底部距离  |
  +-----------+---------------+-------------+-----------------------------+
  |  delay    |    Number     |     300(ms) |  滚轮响应延迟                |
  +-----------+---------------+-------------+-----------------------------+

```

### example

# default

![image](https://github.com/JdesHZ/el-table-bar-base/blob/master/examples/images/default.png)

# fixed

![image](https://github.com/JdesHZ/el-table-bar-base/blob/master/examples/images/fixed.png)

![image](https://github.com/JdesHZ/el-table-bar-base/blob/master/examples/images/fixed2.png)

## Install

# You can use Yarn or NPM

```
yarn add el-table-bar-base
```

#OR

```
npm i el-table-bar-base
```

## Usage

# main.js

```
import ElTableBar from 'el-table-bar-base'
import 'el-table-bar-base/lib/ElTableBar.css'

Vue.use(ElTableBar)
```

## Examples

```
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
