<template>
  <div id="app">
    <div class="container">
      <div class="top">
        <div class="top_logo"><img src="./assets/logo.png"></div>
        <div class="top_router">
          <ul>
            <li v-for="(item, index) in items" @click="addClass(index)" :key="item.index">
              <router-link :to="item.path">
                <i :style="item.styles" :class="{'dh':index == current, 'img':true}"></i>
                <span :class="{'textColor':index == current}">{{item.text}}</span>
              </router-link>
            </li>
          </ul>
          <div v-bind:style="bg_position"><img src="./assets/nav_cur.png"></div>
        </div>
        <div class="user_info"></div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      items: [
        {
          path: "/topology",
          styles: {
            "background-position-x": "0"
          },
          text: "网络拓扑"
        },
        {
          path: "/monitor",
          styles: {
            "background-position-x": "-27px"
          },
          text: "实时监控"
        },
        {
          path: "/warning",
          styles: {
            "background-position-x": "-81px"
          },
          text: "智能告警"
        },
        {
          path: "/faultLocation",
          styles: {
            "background-position-x": "-54px"
          },
          text: "故障定位"
        },
        {
          path: "/optimization",
          styles: {
            "background-position-x": "-135px"
          },
          text: "网络优化"
        }
      ],

      bg_position: {
        position: "relative",
        left: "-430px",
        "z-index": "2"
      },
      current: 0
    };
  },
  methods: {
    addClass: function(index, e) {
      this.bg_position.left = (5 - index) * -86 + "px";
      this.current = index;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  list-style: none;
  font-family: Arial, 宋体, sans-serif;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}

#app {
  font: 14px/1.5;
  font-family: "Microsoft YaHei";
}

.container {
  height: 100px;
  box-shadow: 0 1px 5px #888;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  z-index: 200;
}

.top {
  width: 1300px;
  margin: 0 auto;
}

.top_logo {
  width: 500px;
  height: 70px;
  margin-top: 15px;
  float: left;
}

.top_logo img {
  width: 100%;
}

.top_router {
  width: 530px;
  float: right;
}

.top_router ul li {
  position: relative;
  float: left;
  width: 86px;
  padding-top: 22px;
  text-align: center;
  z-index: 5;
  font-family: Arial, 宋体, sans-serif;
}

.top_router ul li i {
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 28px;
}

.img {
  background: url(./assets/img.png) no-repeat;
}

.dh {
  background-position-y: -28px;
}

.content {
  width: 100%;
  float: left;
  margin-top: 100px;
}

.content::after {
  display: block;
  content: "";
  clear: both;
}

.textColor {
  color: #ffffff;
}
</style>

