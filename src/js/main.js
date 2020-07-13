//入口文件
import Vue from 'vue'
import app from '../App.vue'
//路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './router'
//Ajax
import VueResource from 'vue-resource'
Vue.use(VueResource);


//按需导入Mint-UI
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入MUI的样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'


var vm= new Vue({
    el:'app',
    render:c=>c(app),
    router
})
