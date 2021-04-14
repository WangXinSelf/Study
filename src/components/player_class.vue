<template>
    <div class="flex flex-direction-column hg-100 overflow-y-scroll">
        <Header />
        <div class="flex border-top border-bottom" style="height:62px">  </div>
        <div class="flex flex-1">
            <div class="bg-white mg-x-10 flex flex-direction-column" style="width:250px">
                <img src="https://nos.netease.com/edu-image/58f33984a4be4035a7d42eafd41c10d2.jpg" width="250" height="130" alt="">
                <div v-for="(item,index) in left_nav" :key="index" 
                :class="index==2?'avtive':''"
                class="flex flex-direction-column hg-50px border-bottom justify-center pd-x-10">
                   <span>{{item}}</span>
                </div>
            </div>
            <div class="flex-1 flex bg-white flex-direction-column cursor-pointer" v-show="!showVideo">
             <span class="mg-30 font">课件</span>
             <el-collapse v-for="(item,index) in classList" :key="index" v-model="activeNames" @change="handleChange" class="pd-x-20">
                <el-collapse-item  :title="`第${index+1}讲  ${item.chapter_name}`" :name="index" class="mg-y-10 pd-x-10">
                  <div v-for="(item2,index2) in item.chapter_item" :key="index2"  @click="playVideo"
                  class="mg-x-20  nav_item pd-y-10 pd-x-10">
                      {{item2}}
                      <i class="el-icon-video-play"></i>
                    </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="flex-1 flex-center position-relative bg-white flex-direction-column cursor-pointer" v-show="showVideo">
                   <div class="flex wd-100 position-absolute pd-20 top-0 align-items-center">
                     课件<i class="el-icon-arrow-right"></i>第一讲<i class="el-icon-arrow-right"></i>
                   </div>
                    <Video> </Video>
            </div>
        </div>
    </div>
</template>
<script>
 import Header from "./header"
 import Video from "./video"
export default {
    components:{
        Header,
        Video
    },
    data(){
        return{
            left_nav:[
                '公告','评分标准','课件','测验与作业','考试','讨论区'
            ],
            classList:[
                     { chapter_name:'OpenGl入门',chapter_item:['环境搭建','第一个OpenGl']},
                     { chapter_name:'OpenGl基础',chapter_item:['基本图元与绘制','回调&缩放旋转平移']},
                     { chapter_name:'向量',chapter_item:['向量入门','向量应用之追踪']},
                     { chapter_name:'矩阵',chapter_item:['矩阵基础','旋转缩放平移矩阵推导']},
                     { chapter_name:'纹理',chapter_item:['纹理基础.','纹理混合']},
                     { chapter_name:'着色器',chapter_item:['着色器类与编辑器']},
                     { chapter_name:'着色器',chapter_item:['着色器类与编辑器']},
                     { chapter_name:'坐标',chapter_item:['坐标系统']},
                     { chapter_name:'摄像机',chapter_item:['摄像机(一)','摄像机(二)','摄像机(三)']},
                     { chapter_name:'模型',chapter_item:['模型加载']},
                     { chapter_name:'骨骼动画',chapter_item:['骨骼动画(一)','骨骼动画(二)']},
                     { chapter_name:'射线',chapter_item:['射线拾取']},
                     { chapter_name:'立方体',chapter_item:['立方体贴图']},
                     { chapter_name:'光照',chapter_item:['光照(一)','光照(二)']},
                     { chapter_name:'综合实践',chapter_item:['广告板BillBoard']},
                 ],
            activeNames:'',
            showVideo:false
        }
    },
    methods: {
        handleChange(){

        },
        playVideo(){
            this.showVideo = true
        }
    },
}
</script>
<style scoped>
.avtive{
    color: #fff;
    background-color: #00C758;
}
.el-collapse{
    border: none;
}
.el-collapse /deep/.el-collapse-item__header{
    background-color: #f7f7f7;
    padding:0 10px;
    font-size: 18px;
}
.el-collapse /deep/.el-collapse-item__content{
    padding-bottom: 0;
    margin: 20px 0px;
}
.nav_item{
    color: #666;
}
.nav_item:hover{
        color:#00c758;
        background-color: #f7f7f7;
}
</style>