<template>
    <div class="flex flex-direction-column hg-100 overflow-y-scroll">
        <Header />
        <div class="flex bg-white cursor-pointer" style="height:400px">
            <div style="width:1200px;margin: auto;" class="flex align-item-center">
                <div style="width:500px;height:288px;">
                     <img src="https://edu-image.nosdn.127.net/6BF2EB6DF68832A2F5D811050C4F8AE1.jpg?imageView&thumbnail=510y288&quality=100" alt="">
                </div>
                <div style="width:665px;height:253px;" class="flex flex-direction-column mg-left-40 justify-evenly">
                     <span>时尚遇见互联网</span>
                     <div style="background-color: #f5f5f5" class="flex flex-direction-column pd-y-10 mg-y-20 pd-x-10">
                        时尚遇见互联网
                    </div>
                    <span class="join color-white text-center" @click="join">参加</span>
                </div>
            </div>
        </div>
        <div class="flex flex-1" style="width:1200px;margin:20px auto 160px">
            <div class="flex bg-white justify-center flex-direction-column" style="width:890px">
                <div style="height:67px;border-bottom: 1px solid #e6e6e6;" class="flex align-items-center cursor-pointer">
                    <span v-for="(item,index) in  nav" :key="index" 
                    :class="index== navIndex?'active':''"
                    class="pd-x-10 mg-x-20 pd-y-10 hg-50px" @click="navIndex=index">
                        {{item}}
                    </span>
                </div>
                <div class="" style="padding:30px 30px 20px">
                     <div class="tuandui">
                         你还在为写好毕业论文不知所措吗？你还在为论文答辩头皮发麻吗？关注《巧克毕业论文》，教学名师带你轻松上岸。该门课程有理论、有案例、有分析、有点评，内容丰富，易于理解。同学们学习这门课程，可以快速了解论文写作的全过程，掌握论文写作技巧，在今后的学习研究和创新工作中更加游刃有余。
                     </div>
                </div>
                <div class="flex flex-direction-column mg-x-20">
                    <span style="font-size:18px;font-weight:bold">课程概述</span>
                    <div style="font-family: 仿宋;word-wrap: break-word;white-space: pre-wrap;" class="mg-y-10">
                        是实现高等学校人才培养目标的重要教学环节，是准予毕业和申请学位的基本依据之一。毕业论文，也是对学习知识的理解和综合运用能力的重要考查，是培养学生创新意识和创新能力的重要手段，是理论学习与社会实践相结合的重要体现。为贯彻教育部“狠抓新时代全国高等学校本科教育工作”、“加快建设高水平本科教育 全面提高人才培养能力”等文件精神，本课程围绕毕业论文全过程，主要讲述毕业论文的作用、基本要求、主要类型、工作流程、选题、开题、论文撰写、答辩以及案例点评与分析等内容，为学生顺利完成毕业论文提供全方面的指导，提高学生毕业论文的完成质量和水平，从而全面提升人才培养质量和效果
                    </div>
                </div>
                 <div class="flex flex-direction-column mg-x-20">
                    <span style="font-size:18px;font-weight:bold">课程目标</span>
                    <div style="font-family: 仿宋;word-wrap: break-word;white-space: pre-wrap;" class="mg-y-10">
                        是实现高等学校人才培养目标的重要教学环节，是准予毕业和申请学位的基本依据之一。毕业论文，也是对学习知识的理解和综合运用能力的重要考查，是培养学生创新意识和创新能力的重要手段，是理论学习与社会实践相结合的重要体现。为贯彻教育部“狠抓新时代全国高等学校本科教育工作”、“加快建设高水平本科教育 全面提高人才培养能力”等文件精神，本课程围绕毕业论文全过程，主要讲述毕业论文的作用、基本要求、主要类型、工作流程、选题、开题、论文撰写、答辩以及案例点评与分析等内容，为学生顺利完成毕业论文提供全方面的指导，提高学生毕业论文的完成质量和水平，从而全面提升人才培养质量和效果
                    </div>
                </div>
                  <div class="flex flex-direction-column mg-x-20 cursor-pointer">
                    <span style="font-size:18px;font-weight:bold">课程大纲</span>
                    <div v-for="(item,index) in classList" :key="index" style="word-wrap: break-word;white-space: pre-wrap;"
                    class="mg-top-30 mg-x-20">
                        <span><span class="mg-x-10">{{index+1}}</span>{{item.chapter_name}}</span>
                        <!-- <br> -->
                        <div class="pd-x-10 mg-x-20 mg-top-20">课时</div>
                       <div v-for="(item2,index2) in item.chapter_item" :key="index2" style="color:#999999" class="mg-x-30">
                       {{index+1}}.{{index2+1}} {{item2}}
                       </div>
                    </div>
                </div>
            </div>


            <div class="flex bg-white mg-left-20" style="width:295px"></div>
        </div>
        <Footer style="position: absolute" />
        <el-dialog
        show-close
        center
        top="30vh"
        :visible.sync="dialogVisible"
         width="25%"
        :before-close="handleClose">
          <div style="height:250px" class="flex">
              <i class="el-icon-circle-check" style="font-size:55px;color:#00C758"></i>
              <div class="flex flex-direction-column mg-left-30 position-relative">
                  <span class="font">报名成功！</span>
                  <span class="mg-y-20">重要的课程提醒将通过邮件通知，请填写常用邮箱：</span>
                  <el-input></el-input>
                  <div class="flex position-absolute bottom-0 justify-end wd-100 cursor-pointer">
                    <span class="study" @click="goStudy">直接进入学习</span>
                     <div class="save flex-center color-white rounded">保存</div>
                  </div>
              </div>
          </div>
        </el-dialog>
    </div>
</template>
<script>
    import Header from "./header"
     import Footer from "./footer"
    export default {
        components:{
            Header,
            Footer
        },
         data() {
             return {
                 nav:["课程详情","课程评价"],
                 navIndex:0,
                 dialogVisible:false,
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
                 ]
             }
         },
         methods:{
            join(){
             this.dialogVisible = true
            },
            goStudy(){
                this.$router.push('/player_class')
            } 
         }
    }
</script>
<style scoped>
.tuandui{
    background-color: #F5F8F4;
    padding: 10px;
    margin-bottom: 48px;
    color: #333333;
}
.join{
    border-radius: 2px;
    height: 52px;
    line-height: 52px;
    font-size: 18px;
    background-color: #ff7a3e;
    border-color: #ff7a3e;
    width: 220px; 
    }
    .active{
border-bottom: 4px solid #00C758;
    color: #00C758;
    }
    .study{
        text-decoration: underline;
    font-size: 18px;
    color: #00c758;
    line-height: 40px;
    margin: 0 20px;
    }
    .save{
    width: 90px;
    height: 36px;
    border-radius:4px ;
    font-size: 18px;
    margin-right: 0px;
    background: #00C758;
    border-color: #00c758;
    }
</style>