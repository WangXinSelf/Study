<template>
    <div class="flex flex-direction-column hg-100">
        <Header />
        <div class="flex bg-white cursor-pointer" style="height:400px">
            <div style="width:1200px;margin: auto;" class="flex align-item-center">
                <div style="width:500px;height:288px;">
                     <img src="https://edu-image.nosdn.127.net/6BF2EB6DF68832A2F5D811050C4F8AE1.jpg?imageView&thumbnail=510y288&quality=100" alt="">
                </div>
                <div style="width:665px;height:253px;" class="flex flex-direction-column mg-left-40 justify-evenly">
                     <span>时尚遇见互联网</span>
                     <div style="background-color: #f5f5f5" class="flex flex-direction-column pd-y-10 mg-y-20">
                        时尚遇见互联网
                    </div>
                    <span class="join color-white text-center">参加</span>
                </div>
            </div>
        </div>
        <div  style="width:1200px;margin: 40px auto;" class="flex flex-1">
               <div style="width:890px" class="pd-x-40 flex-direction-column bg-white">
                   <div style="height: 67px;" class="flex">
                      <div>课程详情</div>
                      <div>课程评价</div>      
                   </div>
               </div>  
               <div style="width:295px" class="bg-white mg-left-20">

            </div>  
        </div>
        <Foote  />
    </div>
</template>
<script>
    import Header from "./header"
    import Foote from "./footer"
    export default {
        components:{
            Header,Foote
        },
         data() {
             return {
                 
             }
         },
    }
</script>
<style scoped>
.join{
    border-radius: 2px;
    height: 52px;
    line-height: 52px;
    font-size: 18px;
    background-color: #ff7a3e;
    border-color: #ff7a3e;
    width: 220px; 
    }
</style>