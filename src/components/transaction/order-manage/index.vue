<template>
    <div>
        <div class="title-router">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item v-for="item,index in router" :to="item.path">{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data(){
            return {
                router: [
                    {
                        path: {
                            path: "/"
                        },
                        title: '首页'
                    },
                    {
                        path: {
                            path: "/index/transaction/"
                        },
                        title: '交易类业务管理'
                    },
                    {
                        path: {
                            path: ""
                        },
                        title: '商品管理'
                    }
                ]
            }
        }
    }

</script>