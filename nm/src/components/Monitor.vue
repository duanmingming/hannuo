<template>
  <div class="monitor">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @select="handleClick">
                <el-submenu index="大尺度信道参数">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>大尺度信道参数</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="信道衰减">信道衰减</el-menu-item>
                    <el-menu-item index="SNR">SNR</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="小尺度信道参数">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>小尺度信道参数</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="信道幅度">信道幅度</el-menu-item>
                    <el-menu-item index="信道相位">信道相位</el-menu-item>
                    <el-menu-item index="子载波SNR">子载波SNR</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="用户需求">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户需求</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="上行带宽">上行带宽</el-menu-item>
                    <el-menu-item index="下行带宽">下行带宽</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="网路负荷">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>网路负荷</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="网络负荷">网络负荷</el-menu-item>
                    <el-menu-item index="网络容量">网络容量</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="网络状态">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>网络状态</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="上行误帧率">上行误帧率</el-menu-item>
                    <el-menu-item index="下行误帧率">下行误帧率</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
        </el-row>
      </el-aside>
      <el-main>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item>实时监控</el-breadcrumb-item>
                  <el-breadcrumb-item>{{navData}}</el-breadcrumb-item>
                  <el-breadcrumb-item>{{navData1}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div>
              <h5>设备地址：</h5>
              <el-cascader
                :options="options"             
                @active-item-change="handleItemChange"
                @change="handleChange"
              >
              </el-cascader>
            </div>
          </el-card>
          <el-card class="box-card">
              <div id="myChart" :style="{width: '100%', height: '410px'}"></div>
          </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Monitor",
  data() {
    return {
      msg: "实时监控",
      navData: "大尺度信道参数",
      navData1: "SNR",
      options: [
        {
          value: "hbMac",
          label: "HB",
          children: [
            {
              value: "1",
              label: "ff:ff:ff:ff:ff:ff"
            },
            {
              value: "2",
              label: "2"
            },
            {
              value: "3",
              label: "3"
            },
            {
              value: "4",
              label: "4"
            }
          ]
        },
        {
          value: "hmMac",
          label: "HM",
          children: [
            {
              value: "1",
              label: "ff:ff:ff:ff:ff:ff",
              children: []
            },
            {
              value: "2",
              label: "2",
              children: []
            },
            {
              value: "3",
              label: "3",
              children: []
            },
            {
              value: "4",
              label: "4",
              children: []
            }
          ]
        }
      ],

      chartData: ["7", "8", "9", "10", "11", "12"]
    };
  },

  mounted() {
    this.drawLine();
    this.$http.get("/").then(
      response => {
        console.log(response.data);
      },
      response => {
        console.log("error");
      }
    );
  },

  methods: {
    handleClick(key, keyPath) {
      this.navData = keyPath[0];
      this.navData1 = keyPath[1];
      this.chartData = ["1", "2", "3", "4", "5", "6"];
      this.drawLine();
    },
    handleItemChange(val) {
      if (val[0] == "hmMac") {
        for (let i in this.options[1].children) {
          if (this.options[1].children[i].value == val[1]) {
            this.options[1].children[i].children = [
              {
                value: "1",
                label: "ff:ff:ff:ff:ff:ff"
              },
              {
                value: "2",
                label: "2"
              },
              {
                value: "3",
                label: "3"
              },
              {
                value: "4",
                label: "4"
              }
            ];
          }
        }
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: this.chartData
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
    },
    handleChange(value) {
      console.log(value);
      this.chartData = ["1", "2", "3", "4", "5", "6"];
      this.drawLine();
    }
  }
};
</script>


<style scoped>
</style>