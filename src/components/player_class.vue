<template>
    <div class="flex flex-direction-column hg-100 overflow-y-scroll">
        <Header />
        <div class="flex" style="height:62px">  </div>
        <div class="flex flex-1">
            <div class="bg-white mg-x-10 flex flex-direction-column" style="width:250px">
                <img src="https://nos.netease.com/edu-image/58f33984a4be4035a7d42eafd41c10d2.jpg" width="250" height="130" alt="">
                <div v-for="(item,index) in left_nav" :key="index" 
                :class="index==2?'avtive':''"
                class="flex flex-direction-column hg-50px border-bottom justify-center pd-x-10">
                   <span>{{item}}</span>
                </div>
            </div>
            <div class="flex-1 flex bg-white"></div>
        </div>
    </div>
</template>
<script>
 import Header from "./header"
export default {
    components:{
        Header
    },
    data(){
        return{
            left_nav:[
                '公告','评分标准','课件','测验与作业','考试','讨论区'
            ]
        }
    }
}
</script>
<style scoped>
.avtive{
    color: #fff;
    background-color: #00C758;
}
</style>