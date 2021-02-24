<template>
  <div>
    <p class="title">
      <i class="el-icon-share" style="color: orange"></i> 注册用户行为
    </p>
    <div class="userchart" id="userchart"></div>
  </div>
</template>

<style scoped>
.userchart {
  width:100%;
  height: 400px;
  background: #fff;
  box-shadow: 3px 3px 3px #ccc;
}
.title {
  margin: 10px 0;
}
</style>

<script>
let echarts = require("echarts");
export default {
    data(){
        return {
            option : {
                dataset: {
                source: [
                    ['amount', 'product'],
                    [4821, '游戏内充值'],
                    [7825, '领取礼包'],
                    [8765, '游戏分享'],
                    [9800, '打开游戏'],
                ]
            },
            grid: {containLabel: true},
            xAxis: {name: '人数'},
            yAxis: {type: 'category'},
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "amount" column to X axis.
                        x: 'amount',
                        // Map the "product" column to Y axis
                        y: 'product'
                    }
                }
                    ]
                  }
             }
        },
  mounted() {
    this.echarts_one();
  },
  methods: {
    echarts_one() {
      var myChart = echarts.init(document.getElementById("userchart"));
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option);
    },
  }
}  
    

</script>