<template>
  <view
    class="panel"
  >
    <view
      v-for="item in charts"
      :key="item.id"
      class="chart-with-img"
      @tap="gotoEcharts(item.id)"
    >
      <image :src="item.img" />
      <text>{{ item.name }}</text>
    </view>
  </view>
</template>

<script>
import Vue from 'vue'
import Taro from "@tarojs/taro";
import PieIcon from "../../img/icons/pie.png";
import BarIcon from "../../img/icons/bar.png";
import LineIcon from "../../img/icons/line.png";
import FunnelIcon from "../../img/icons/funnel.png";
import GaugeIcon from "../../img/icons/gauge.png";
import HeatmapIcon from "../../img/icons/heatmap.png";
import RadarIcon from "../../img/icons/radar.png";
import ScatterIcon from "../../img/icons/scatter.png";
import "./index.less";

export default {
  data() {
    return {
      charts: [
        { id: "bar", name: "柱状图", img: BarIcon },
        { id: "line", name: "折线图", img: LineIcon },
        { id: "pie", name: "饼图", img: PieIcon },
        { id: "scatter", name: "散点图", img: ScatterIcon },
        { id: "radar", name: "雷达图", img: RadarIcon },
        { id: "heatmap", name: "热力图", img: HeatmapIcon },
        // { id: 'map', name: '地图', img: MapIcon  },
        { id: "gauge", name: "仪表盘", img: GaugeIcon },
        { id: "funnel", name: "漏斗图", img: FunnelIcon },
      ],
    };
  },
  mounted() {
    console.log('mounted', this.onGreet)
  },
  methods: {
    gotoEcharts(type) {
      console.log(type)
      Taro.navigateTo({ url: `/pages/${type}/index` });
    }
  },
};
</script>
