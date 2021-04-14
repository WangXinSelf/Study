<template>
    <div class="">
        <el-dialog
        show-close
        center
        :modal-append-to-body="false"
        top="30vh"
        :before-close="close"
        :visible.sync="dialogVisible"
          width="30%">
         <div style="height:300px" class="flex flex-direction-column">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="手机号登录" name="first" class="font">
               <div class="flex flex-direction-column align-items-center">
                   <el-input style="width: 360px;" class="mg-y-30"  placeholder="请输入手机号">
                 <i slot="prefix" class="el-input__icon el-icon-mobile font-sm"></i>
                </el-input>
                   <el-input style="width: 360px;" placeholder="请输入密码">
                    <i slot="prefix" class="el-input__icon el-icon-lock font"></i>
                </el-input>
                   <div  class="flex-center font-small mg-y-20"
                   style="width: 360px;height: 44px;background: #00C758;color: #fff;">登录</div>
               </div>
            </el-tab-pane>
            <el-tab-pane label="邮箱登录" name="second">邮箱登录</el-tab-pane>
            <el-tab-pane label="爱课程登录" name="third">爱课程登录</el-tab-pane>
          </el-tabs>
         </div>
         <div style="height: 72px;background: #f5f5f5;" slot="footer">

        </div>
       </el-dialog>
    </div>
</template>
<script>
    export default {
        props:{
            dialogVisible:Boolean
        },
        computed:{
        //   isShow(){
        //       return this.dialogVisible
        //   }
        },
        data() {
            return {
                showLogin:true,
                activeName:'first'
            }
        },
        methods: {
            close(){
                this.$emit('close')
            },
            handleClick(){

            }
        },
    }
</script>
<style scoped>
         .el-tabs /deep/ .el-tabs__active-bar{
        background-color: #00C758;
      }
      .el-tabs /deep/.el-tabs__item.is-active{
        color:#00C758
      }
      .el-tabs /deep/.el-tabs__item{
        font-size: 20px;
      }
     .el-dialog__wrapper /deep/ .el-dialog__footer{
          padding: 0;
      }
</style>