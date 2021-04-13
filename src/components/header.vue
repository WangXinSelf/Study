<template>
    <div class="header">
       <div class="content cursor-pointer">
             <img style="height:32px" 
             src="https://edu-image.nosdn.127.net/3310f128e53b406f94400f7ae6046db2.png?imageView&quality=100" alt="">
             <ul class="flex mg-x-10" style="list-style: none;">
                 <li v-for="item in nav" :key="item" class="mg-x-30 nav_item text-white-space">{{item}}</li>    
             </ul>
             <div class="flex align-items-center">
                <el-input v-model="input" placeholder="请输入内容" style="width: 247px;" class="mg-left-50">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                   </el-input>
                   <span class="nav_item text-white-space font-small mg-left-40">登录<span class="mg-x-10">|</span>注册</span>
             </div>
       </div>
    </div>
  </template>
  <script>
      export default  {
           data(){
               return {
                   input:'',
                   nav:['课程','学校','学校云','慕课堂']
               }
           }
      }
  </script>
  <style scoped>
      .el-input /deep/ .el-input__inner{
        border-radius: 16px;
        border: 1px solid #00c758;
        width: 247px;
        height:30px
      }
      .el-input{
          position: relative;
      }
      .el-input /deep/ .el-input__prefix{
        position: absolute;
        right: -200px;
      }
      .el-input /deep/ .el-input__icon{
        line-height: 30px;
        color: #fff;
        font-size: 20px;
        width: 56px;
        height: 32px;
        border-radius: 16px;
        background-color:#00c758
      }
      .header {
        left: 0px;
        top: 0px;
        width: 100%;
        height: 64px;
        border-radius: 0px;
        clear: none;
        display: block;
        min-width: 0px;
        z-index: 21;
        color: black;
        font-size: 16px;
        margin: 0px;
        padding: 0px;
        display: block;
        background-color: #fff;
      }
      .nav_item:hover{
            color:#00c758;
      }
      .content {
        left: 0px;
        top: 0px;
        width: 1200px;
        height: 64px;
        border-radius: 0px;
        align-items: center;
        justify-content:space-between;
        position: relative;
        clear: none;
        display: flex;
        min-width: 0px;
        color: black;
        font-size: 16px;
        background-color: white;
        margin: 0px auto;
        padding: 0px;
      }
  </style>