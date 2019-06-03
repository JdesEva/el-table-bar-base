# el-table-bar

## 自定义 element-ui 表格滚动条组件

## by Jdes on 2019-02-18

```
## update Log

#v1.0.8
element-ui按需引入
修复 非拖拽模式 下改变窗口大小 不会出现滚动条样式的问题。

#v1.0.9
修复 窗口最大化后 不需要滚动条 但 滚动条依然存在且无法滚动的问题

#v1.1.0
修复Edge,FireFox下横向滚动条无法滚动的问题

由于OTP验证问题 之前的包迁移至 该包下，功能不变

```

## Install

# You can use Yarn or NPM

```
yarn add el-table-bar
```

#OR

```
npm i el-table-bar
```

## Usage

# main.js

```
import ElTableBar from 'el-table-bar'
import 'el-table-bar/lib/ElTableBar.css'

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
