<template>
  <view class="line-chart">
    <e-chart
      ref="vueref0"
      canvas-id="line-canvas"
    />
  </view>
</template>

<script lang="js">
import Taro from "@tarojs/taro";
import { EChart } from '../../components'
export default {
  name: 'Line',
  components: {EChart},
  mounted () {
    const option = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          data: [
            [20, 120],
            [50, 200],
            [40, 50],
          ],
          type: "line",
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
.line-chart {
  width: 100%;
  height: 100vh;
}
</style>
