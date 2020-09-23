<template>
  <ec-canvas
    ref="vueref0"
    :canvas-id="canvasId"
    :ec="ec"
  />
</template>

<script lang="js">
import Taro from "@tarojs/taro";
import * as echarts from '../ec-canvas/echarts'
import EcCanvas from '../ec-canvas'

export default {
  name: 'BaseChart',
  components: {EcCanvas},
  props: {
    canvasId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ec: {
        lazyLoad: true
      }
    }
  },
  mounted () {
    Taro.nextTick(() => {
      this.Chart = this.$refs.vueref0
    });
  },
  methods: {
    refresh (data) {
      this.Chart.init((canvas, width, height, canvasDpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: canvasDpr
        })
        canvas.setChart(chart);
        chart.setOption(data);
        return chart
      })
    }
  },
}
</script>
