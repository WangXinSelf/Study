<template>
    <div class="flex flex-direction-column hg-100 overflow-y-scroll">
        <Header />
        <div class="flex border-top border-bottom" style="height:62px">  </div>
        <div class="flex flex-1">
            <div class="bg-white mg-x-10 flex flex-direction-column cursor-pointer" style="width:250px">
                <img src="https://nos.netease.com/edu-image/58f33984a4be4035a7d42eafd41c10d2.jpg" width="250" height="130" alt="">
                <div v-for="(item,index) in left_nav" :key="index"  @click="l_nav(index)"
                :class="index==left_nav_index?'avtive':''"
                class="flex flex-direction-column hg-50px border-bottom justify-center pd-x-10 left_nav">
                   <span>{{item}}</span>
                </div>
            </div>
            <div class="flex-1 flex bg-white flex-direction-column cursor-pointer" v-show="left_nav_index == 2 && !showVideo">
             <span class="mg-30 font">课件</span>
             <el-collapse v-for="(item,index) in titleList"
              :key="index" v-model="activeNames" @change="handleChange" class="pd-x-20">
                <el-collapse-item  :title="`第${index+1}讲  ${item.name}`" :name="index" class="mg-y-10 pd-x-10">
                  <div v-for="(item2,index2) in item.sub_title" :key="index2"  @click="playVideo(item,item2,index)"
                  class="mg-x-20  nav_item pd-y-10 pd-x-10">
                      {{item2.name}}
                      <i class="el-icon-video-play"></i>
                    </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="flex-1 flex-center position-relative bg-white flex-direction-column cursor-pointer" v-if="showVideo">
                   <div class="subject flex wd-100 position-absolute pd-20 top-0 align-items-center" @click="showVideo = false">
                     课件
                     <i class="el-icon-arrow-right"></i>第{{videoIndex+1}}讲 {{curVideo.subject_title}}<i class="el-icon-arrow-right">
                      {{curVideo.subject_sub_title}}
                     </i>
                   </div>
                    <Video :src="baseUrl+curVideo.video_url"> </Video>
            </div>

                <div class="flex flex-direction-column wd-100 bg-white" v-show="left_nav_index == 5" style="min-height:400px">
                    <div class="mg-x-20 mg-top-20 flex flex-direction-column" style="width:500px">
                        <el-input type="textarea" :rows="5" v-model="textarea" placeholder="请输入评论"></el-input>
                        <div class="flex justify-end mg-y-10">
                            <el-button   style="width:100px;background:#00C758;color:#FFFF" @click="addComment">发送</el-button>
                        </div>
                    </div>
                    <div class="mg-bottom-20 mg-x-20" style="width:500px;height:1px;background:#d2d3d2"></div>
                    <div class="flex pd-y-30 pd-x-20" v-for="(item,index) in commentList" :key="index">
                       <img class="rounded-circle wd-40px hg-40px" src="https://edu-image.nosdn.127.net/11652E8DC02A06857E392EB2A3C8E2FD.png?imageView&thumbnail=56y56&quality=100" alt="">
                       <div class="flex flex-direction-column mg-x-20" style="font-size:13px">
                           <div class="flex align-items-center mg-bottom-10">
                               <span class="mg-right-10">{{item.user_name}}</span>
                               <!-- <el-rate v-model="value1" disabled></el-rate> -->
                           </div>
                           <span class="mg-bottom-10" style="background: #eee;padding:5px">{{item.content}}</span>
                           <span style="color: #999999;">发表于  {{item.creat_time}}</span>
                       </div>
                    </div>
                 </div>
        </div>
    </div>
</template>
<script>
 import Header from "./header"
 import Video from "./video"
 import base from '../request/baseUrl.js'
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
            showVideo:false,
            titleList:[],
            videoIndex:null,
            curVideo:{},
            left_nav_index:2,
            value1:5,
            baseUrl:base.domainUrl,
            commentList:[],
            textarea:''
            // subject_id:localStorage.getItem("subject_id")
        }
    },
    created () {
        this.getSubjectTitle()
        this.getCommentListBySubject()
        // console.log(this.baseUrl)
    //    console.log(this.$route.params)
    },
    methods: {
        handleChange(){

        },
        l_nav(index){
            if(index == 0||index == 1||index==3||index==4) return this.$message.warning('此功能暂无开放')
            this.left_nav_index = index
        },
        async getSubjectTitle() {
                let data = await this.$api.getSubjectTitle({subject_id:localStorage.getItem("subject_id")})
                this.titleList = data.data.subject_title
        },
        async playVideo(item,item2,index){
            // console.log(item,item2)
            this.videoIndex = index
            let params = {
                "subject_id": localStorage.getItem("subject_id"),
                "subject_title": item.name,
                "subject_sub_title": item2.name
            }
            let data = await this.$api.getSubjectVideo(params)
            if(data.data.length  > 0){
                this.curVideo = data.data[0]
                this.showVideo = true
            }
        },
        async getCommentListBySubject(){
            let data = await this.$api.getCommentListBySubject({subject_id:localStorage.getItem("subject_id")})
                this.commentList = data.data
                // console.log(data.data)
        },
        async addComment(){
            if(this.textarea == '') return this.$message.warning('评论内容不能为空')
            let params = {
                "subject_id": localStorage.getItem("subject_id"),
                "user_id":this.$store.state.userInfo.id,
                "user_name":this.$store.state.userInfo.name,
                "content":this.textarea
            }
            let data = await this.$api.addComment(params)
            if(data.data == 'ok'){
                this.$message.success('评论成功！')
                this.getCommentListBySubject()
            }
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
.subject:hover{
    color:#00c758;
        background-color: #f7f7f7;
}
.left_nav:hover{
    color: #fff;
    background-color: #00C758;
}
</style>