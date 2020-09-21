<template>
  <view class="scatter-chart">
    <e-chart
      ref="vueref0"
      canvas-id="scatter-canvas"
    />
  </view>
</template>

<script lang="js">
import Taro from "@tarojs/taro";
import { EChart } from '../../components'
export default {
  name: 'Scatter',
  components: {EChart},
  mounted () {
    const option = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68],
          ],
          type: "scatter",
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
.scatter-chart {
  width: 100%;
  height: 100vh;
}
</style>
