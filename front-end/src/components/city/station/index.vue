<template>
   <el-row>
      <el-col :span="22" :offset="1" class="router-box">
         <router-view></router-view>
      </el-col>
   </el-row>
</template>
<style lang="less" scoped rel="stylesheet/less">
.router-box {
   padding-top: 50px;
}
</style>
<script>
//    import station from "./../../common/stiton"
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
