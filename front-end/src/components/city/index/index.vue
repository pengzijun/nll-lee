<template>
    <div>
        <el-menu :default-active='activeUrl'  mode='horizontal'>
            <el-menu-item :index='item.url' v-for='item , index in navList' @click='turnUrl(item.url)'>
                {{item.title}}
            </el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return {
                activeUrl:'',
                navList: [
                    {
                        title: '系统状态',
                        url: 'system-mode',
                    }, {
                        title: '阀门设置',
                        url: 'valve-setting',
                    }, {
                        title: '温度修正',
                        url: 'temperature-setting',
                    }, {
                        title: '时间段设置',
                        url: 'time-setting',
                    }, {
                        title: '历史数据',
                        url: 'history-data',
                    }
                ]
            }
        },
        methods: {
            turnUrl(url){
                this.$router.push(url)
            }
        },
        created(){
            this.activeUrl = this.$route.path.substr(20);
        }
    }
</script>
