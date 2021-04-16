<template>
    <div>
        <el-drawer
        :visible.sync="show"
        :direction="direction"
        :before-close="handleClose">
        <div class="flex flex-direction-column">
         <el-input></el-input>
        </div>
        </el-drawer>
    </div>
</template>
<script>
export default {
    props:{
        show:{
            type:Boolean,
        },
    },
    data() {
        return{
            direction:'ltr'
        }
    },
    methods: {
        handleClose(){
         this.$emit('close')
        }
    }
}
</script>