<template>
  <div class="container hg-100 wd-100 flex flex-direction-column" style="overflow-x: hidden;">
    <Header />
    <div class="content flex-1 flex flex-direction-column" style="max-width: 1200px;margin:auto;margin-top:10px">
      <div class="flex">
        <div style="width:200px;height:360px;border-radius:4px;" class="bg-white flex flex-direction-column cursor-pointer">
           <ul class="pd-y-10 " style="list-style: none;font-size:14px;color:rgb(51, 51, 51)">
            <li class="pd-x-10 item" style="line-height: 34px;">课程分类</li>
             <li class="pd-x-10 item" style="line-height: 34px;" v-for="item in classify" :key="item">{{item}}</li>
           </ul>
        </div>
        <el-carousel height="360px" style="width:776px;border-radius:4px;height:360px;" class="mg-x-10">
          <el-carousel-item v-for="item in imgList" :key="item">
            <img :src="item" alt="" class="hg-100 wd-100">
          </el-carousel-item>
        </el-carousel>
        <div style="width:200px;height:360px;border-radius:4px;" class="bg-white flex-center flex-direction-column ">
          <img v-if="!userInfo" style="width: 83px;height:83px" class="mg-y-30"
          src="http://edu-image.nosdn.127.net/6e66dbdc55464a44889c6a25428b2b4b.png?imageView&quality=100" alt="">
          <img v-if="userInfo" style="width: 83px;height:83px" class="mg-y-30"
          src="https://edu-image.nosdn.127.net/11652E8DC02A06857E392EB2A3C8E2FD.png?imageView&thumbnail=56y56&quality=100" alt="">
          <div v-if="userInfo" class="mg-bottom-20">{{userInfo.name}}</div>
          <el-button v-if="userInfo"
           style="line-height:9px;background:#00c758;color:#fff;width: 168px;height:32px" round>我的课程</el-button>
          <el-button v-if="!userInfo"
           style="line-height:9px;background:#00c758;color:#fff;width: 168px;height:32px" round>登录/注册</el-button>
        </div>
      </div>
      <div style="height: 60px;font-size: 16px;margin-bottom: 45px;" class="bg-white mg-y-10 flex align-items-center cursor-pointer">
         <span class="mg-x-20">全部合作高校</span>
         <div class="flex align-items-center justify-evenly flex-1">
           <img :src="item" alt="" v-for="item in school" :key="item" style="width: 110px;height: 31px">
         </div>
      </div>
      <div class="">
        <h2 style="color: #333;font-size: 24px;font-weight: 500;margin-bottom: 13px">最近推荐</h2>
        <div class="class_item flex align-items-center" @click="goToClassDetail">
            <img class="class_img" src="https://edu-image.nosdn.127.net/a7aa974de1474afca5edb46abec03f68.jpg?imageView&quality=100&thumbnail=180y180" alt="">
             <span>OpenGl全面解析</span>
        </div>
      </div>
      <div class="">
        <h2 style="color: #333;font-size: 24px;font-weight: 500;margin-bottom: 20px">精彩评价</h2>
        <div class="class_common flex flex-direction-column">
            <img class="class_common_img" src="https://mc.stu.126.net/res/images/ui/profile-image.png" alt="">
             <span class="user">OpenGl全面解析</span>
             <p class="overflow-hidden" style="display: -webkit-box;
             -webkit-box-orient: vertical;
             -webkit-line-clamp: 4;">
              当时高考没有选择心仪的考古专业，至今还在后悔。现在选了这门课，算是小小程度上对当年的弥补吧。课程并不难，内容和老师的讲解都很通俗易懂，讲义上有许多延伸内容，方便了想更深入学习的同学。在这里也非常感谢老师的付出，潘教授在繁忙的公事之余仍积极和我们互动，解答疑问讨论话题，难得的好老师。希望有进一步的考古课程！
             </p>
        </div>
      </div>
    </div>
    <Foote />
  </div>
</template>
<script>
  import Header from "./header"
  import Foote from "./footer"
  export default {
    components:{Header,Foote},
    data() {
      return {
         imgList:[
           'http://edu-image.nosdn.127.net/09368eab07f243da88db47f67b01940d.png?imageView&quality=100',
           'http://edu-image.nosdn.127.net/2df3625142174de2bb9d557259bbb910.jpg?imageView&quality=100',
           'http://edu-image.nosdn.127.net/2c0ace6eeda743dfac08951d98712a04.jpg?imageView&quality=100',
           'http://edu-image.nosdn.127.net/7f0dd106dedb4c1495467c5a08f3eeeb.png?imageView&quality=100',
           'http://edu-image.nosdn.127.net/03e9a51189554c43a368696296e54a62.png?imageView&quality=100',
           'http://edu-image.nosdn.127.net/c3db7f4a95294fda984c131ee9a28ec9.png?imageView&quality=100&thumbnail=776y360',
          ],
          school:[
            'https://edu-image.nosdn.127.net/7A44C459B82EF152C8FC5655383B3D1E.jpg?imageView&thumbnail=220y80&quality=100',
            'https://edu-image.nosdn.127.net/AEE98EB739A46AB06C02307E236069C7.png?imageView&thumbnail=220y62&quality=100',
            'https://edu-image.nosdn.127.net/E0B01352DE274FFEB5D1D8AC87865E8D.png?imageView&thumbnail=220y62&quality=100'
        ],
        classify:[
          '计算机',
          '外语',
          '理学',
          '工学',
          '考研',
          '期末不挂科',
          '应试英语',
          '实用英语',
          '更多'
        ]
      }
    },
    computed:{
      userInfo(){
        return this.$store.state.userInfo
     }
    },
    methods:{
      goToClassDetail(){
        this.$router.push('/class_detali')
      }
    }
  }
</script>
<style scoped>
  .item:hover{
    background: rgba(0, 199, 88, 0.1);
    color: rgb(0, 199, 88);
    text-decoration: underline;
  }
  .class_item{
    width: 285px;
    height: 126px;
    background: rgba(255,255,255,1);
    border-radius: 4px;
    position: relative;
    padding: 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    margin-bottom: 12px;
    margin-right: 20px;
    -webkit-transition: all ease-in 0.25s;
    -o-transition: all ease-in 0.25s;
    transition: all ease-in 0.25s;
    /* float: left; */
  }
  .class_img{
    width: 52px;
    height: 52px;
    float: left;
    margin-right: 12px;
    border-radius: 100%;
  }
  .class_common{
    width: 285px;
    /* height: 194px; */
    background: rgba(255,255,255,1);
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    color: #333;
    padding: 10px 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    margin-top: 18px;
    cursor: pointer;
    margin-bottom: 30px
  }
  .class_common_img{
    width: 48px;
    height: 48px;
    border-radius: 100%;
    margin-right: 8px;
    vertical-align: middle;
    border: 4px solid #fff;
    position: absolute;
    top: -15px;
  }
  .user{
    font-size: 12px;
    margin-bottom: 20px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    color: #999;
    padding-left: 65px;
  }
</style>