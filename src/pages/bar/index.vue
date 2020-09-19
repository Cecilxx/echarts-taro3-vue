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
import EChart from '../../components/echart'
export default {
  name: 'Bar',
  components: {EChart},
  mounted () {
    const defautOption = {
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
      this.$refs.vueref0.refresh(defautOption)
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
