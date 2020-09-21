# echarts-taro3-vue

基于Taro3.x-Vue2框架构建的微信小程序版本echarts组件，及使用示例

## 传送门
+ [Taro3.x-React版本](https://github.com/Cecilxx/echarts-taro3-react)

## 特性
+ Taro3.x
+ Vue2

## 功能
+ [x] 柱状图
+ [x] 折线图
+ [x] 饼图
+ [x] 散点图
+ [x] 雷达图
+ [x] 热力图
+ [x] 地图
+ [x] 仪表盘
+ [x] 漏斗图

## 快速安装
```bash
npm i echarts-taro3-vue
```
## 使用

> 引入EChart组件后，拿到EChart组件实例，并调用实例<b style="color: red">refresh(option)</b>方法设置图标数据，<b style="color: red">option</b> 格式参照[echarts官网](https://echarts.apache.org/examples/zh/index.html)

举例：

```js
// 柱状图
<template>
  <view class="bar-chart">
    <e-chart
      ref="vueref0"
      canvas-id="bar-canvas"
    />
  </view>
</template>

<script lang="js">
import Taro from "@tarojs/taro";
import { EChart } from '../../components'

export default {
  name: 'Bar',
  components: {EChart},
  mounted () {
    const defaultOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }
      ]
    }
    Taro.nextTick(() => {
      this.$refs.vueref0.refresh(defaultOption)
    })
  },
}
</script>

<style>
.bar-chart {
  width: 100%;
  height: 100vh;
}
</style>
```

```js
// 仪表盘
<template>
  <view class="gauge-chart">
    <e-chart
      ref="vueref0"
      canvas-id="gauge-canvas"
    />
  </view>
</template>

<script lang="js">
import Taro from "@tarojs/taro";
import { EChart } from '../../components'
export default {
  name: 'Gauge',
  components: {EChart},
  mounted () {
    const option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "业务指标",
          type: "gauge",
          detail: { formatter: "{value}%" },
          data: [{ value: 50, name: "完成率" }],
        },
      ],
    };
    Taro.nextTick(() => {
      this.$refs.vueref0.refresh(option)
    })
  },
}
</script>

<style>
.gauge-chart {
  width: 100%;
  height: 100vh;
}
</style>

```

## 开发
```bash
npm run dev:weapp
```
