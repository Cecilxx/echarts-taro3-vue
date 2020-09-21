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
