// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Topology from './components/Topology'
import Monitor from './components/Monitor'
import Warning from './components/Warning'
import FaultLocation from './components/FaultLocation'
import NetworkOptimization from './components/NetworkOptimization'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'

Vue.prototype.$echarts = echarts


Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: "/topology",
      component: Topology
    },
    {
      path: "/monitor",
      component: Monitor
    },
    {
      path: "/warning",
      component: Warning
    },
    {
      path: "/faultLocation",
      component: FaultLocation
    },
    {
      path: "/optimization",
      component: NetworkOptimization
    },
  ],
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
