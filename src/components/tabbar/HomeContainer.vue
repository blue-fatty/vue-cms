<template>
    <div>
        <!--轮播图区域-->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
              <img :src="item.img" alt="">
          </mt-swipe-item>
        </mt-swipe>

        <!--九宫格区域-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="src/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="src/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="src/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="src/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="src/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="src/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>

    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                lunbotuList:[]//存放轮播图数据
            }
        },
        created(){
            this.getLunbotu()
        },
        methods:{
            getLunbotu(){
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(function (result) {
                    if (result.body.status==0){
                        this.lunbotuList=result.body.message
                    }else{
                        Toast('Load Error');
                    }
                })
            }
        }
    }
</script>
<style lang="sass" scoped>
    .mint-swipe {
        height: 200px;
    }
    /*!*虽然有红线，但是好像是可以的*!*/
    /*.mint-swipe .mint-swipe-item{*/
        /*&:nth-child(1){background-color: red;}*/
        /*&:nth-child(2){background-color: skyblue;}*/
        /*&:nth-child(3){background-color: greenyellow;}*/
    /*}*/
    .mint-swipe .mint-swipe-item img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        .mui-table-view-cell{
            border:none;
            img{
                width: 60px;
                height: 60px;
            }
        }
    }
</style>