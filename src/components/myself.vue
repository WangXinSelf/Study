<template>
    <div class="container hg-100 wd-100 flex flex-direction-column cursor-pointer">
        <Header />
        <div class="flex myselfBg" style="height: 220px;">
            <img class="position-absolute" src="https://edu-image.nosdn.127.net/BCA790F6E742B8CBF078CA413D2ED7AD.png?imageView&thumbnail=1920y220&quality=100" alt="">
            <div style="margin:0 auto;width:1200px;z-index: 1;" class="flex justify-between">
                <div class="flex align-items-center">
                   <img class="wd-100px hg-100px" src="https://edu-image.nosdn.127.net/11652E8DC02A06857E392EB2A3C8E2FD.png?imageView&thumbnail=56y56&quality=100" alt="">
                    <div class="flex flex-direction-column mg-x-20">
                        <span class="color-white font-md">mooc{{userInfo.name}}</span>
                        <span  class="mg-y-10" style="text-decoration:underline;font-size:12px">Hi!快让大家来认识你吧</span>
                        <span class="color-white font-sm">关注0人 | 粉丝0人</span>
                    </div>
                </div>
                <div class="flex align-items-center justify-between color-white" style="width:460px">
                     <div class="flex">
                         <i class="el-icon-edit-outline font-lg"></i>
                         <span class="font-small">主题/回复<br/>0</span>
                     </div>
                     <div class="flex"> <i class="el-icon-trophy font-lg"></i>
                        <span class="font-small">获赞数量<br>0</span>
                    </div>
                     <div class="flex"><i class="el-icon-alarm-clock font-lg"></i> 
                        <span class="font-small">学习时长<br>0</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-white">
           <div style="margin:0 auto;width:1200px;" class="flex">
            <el-tabs v-model="activeName" style="width:950px;height:50px;margin-top: 50px;">
                <el-tab-pane label="课程" name="first">
                <div class="box flex-center" v-if="userInfo.role == 1" @click="showAddSubject=true">
                        <div class="flex-center flex-direction-column">
                           <i class="el-icon-plus font-lg" style="color:#00C758"></i>
                           <span class="color-light-muted">添加课程</span>
                        </div>
                </div>
                 <div class="flex position-relative flex-direction-column box" 
                 @click="goToPlay(item)"
                 v-for="(item,index) in subjectLists" :key="index">
                     <img src="http://edu-image.nosdn.127.net/84ee640e77c94b488d0b378e5fa69950.png" alt="" class="wd-100" height="120">
                      <span class="mg-10" style="font-size:14px">{{item.name}}</span>
                      <span class="mg-x-10" style="padding-top: 4px;color: #999999;font-size: 12px;">{{item.schoolName}}</span>
                      <span class="mg-x-10" style="position: absolute; bottom: 16px;font-size: 12px;color: #999999;">2021年7月31日学期结束</span>
                 </div>
                </el-tab-pane>
                <el-tab-pane label="专栏" name="second">专栏</el-tab-pane>
                <el-tab-pane label="讨论" name="third">讨论</el-tab-pane>
                <el-tab-pane label="证书" name="fourth">证书</el-tab-pane>
                <el-tab-pane label="学习计划" name="five">学习计划</el-tab-pane>
              </el-tabs>
           </div>
        </div>
        <AddSubject :show="showAddSubject" @close="showAddSubject=false" />
        <Footer/>
    </div>
</template>
<script>
    import Header from "./header"
    import Footer from "./footer"
    import AddSubject from "./add_subject"
    export default {
        components:{
            Header,Footer,AddSubject
        },
        computed:{
            userInfo(){
                return this.$store.state.userInfo
            }
        },
        data(){
            return {
                activeName:'first',
                subjectLists:[],
                showAddSubject:false,
            }
        },
        created(){
            this.getSubject()
        },
        methods: {
            async getSubject(){
                let params = {
                user_id:this.$store.state.userInfo!==null?this.$store.state.userInfo.id:"",
                range:"simple"
                }
                let data = await this.$api.getSubject(params)
                this.subjectLists = data.data
                // console.log(data)
            },
            goToPlay(item){
                // console.log(item)
                localStorage.setItem('subject_id',item.id)
                this.$router.push('/player_class')
            }
        }
    }
</script>
<style>
  /* .myselfBg{
   background-image:
  } */
  .el-tab-pane{
      display:flex;
      flex-wrap: nowrap;
  }
  .font-lg{
      font-size:40px
  }
  .el-tabs__item{
      font-size: 16px;
  }
  .el-tabs__item:hover{
      color:#00C758
  }
  .el-tabs__item.is-active{
    color:#00C758
  }
  .el-tabs__active-bar{
      background-color: #00C758
  }
  .box{
    width:214px;height:248px;border: 1px solid #EDEDED;
    margin: 10px;
  }
  .box:hover{
    transition: all 0.5s cubic-bezier(0, 0.5, 0.5, 1) 0.2s;
    box-shadow: 0 0 11px -8px;
  }
</style>