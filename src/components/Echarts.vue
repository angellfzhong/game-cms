<template>
  <div class="week">
      <p class="title"><i class="el-icon-data-line" style="color:skyblue" ></i>七天内运营数据</p>
      <div class="echartsback" id="mychart"></div>
  </div>
</template>

<style lang="scss" scoped>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
 .title {
     margin: 10px 0;
 }
.echartsback {
  width: 600px;
  height: 400px;
  background: #fff;
  box-shadow:3px 3px 3px #ccc;
}
</style>

<script>
let echarts = require("echarts");

export default {
  data() {
    return {
      option: {
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["新增玩家", "活跃玩家", "充值总额"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "新增玩家",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "活跃玩家",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "充值总额",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      },
    };
  },
  mounted() {
    this.echarts_one();
  },
  methods: {
    echarts_one() {
      var myChart = echarts.init(document.getElementById("mychart"));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option);
    },
  },
};
</script>