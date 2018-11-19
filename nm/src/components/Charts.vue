<template>
<div>
  <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
</div>
  
</template>

<script>
export default {
  name: "Charts",
  props: ["chartData"],
  data() {
    return {
      msg: "故障定位"
    };
  },

  watch: {
    chartData: {
      handler(cur, old) {
        this.drawLine();
      },
      deep: true
    }
  },

  mounted() {
    this.drawLine();
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: this.chartData.type },
        tooltip: {},
        xAxis: {
          data: this.chartData.data
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>


<style scoped>
</style>