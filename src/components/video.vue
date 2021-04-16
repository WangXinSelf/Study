<template>
    <div class="flex bg-black" style="width:1000px;height:600px">
        <video :src="src" controls autoplay>

        </video>
    </div>
</template>
<script>
export default {
    props:{
        src:{
            type:String,
        }
    }
}
</script>