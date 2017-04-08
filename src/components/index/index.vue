<template>
    <el-row class="container">
        <el-col :span="3" class="navBox">
            <div class="logo"></div>
            <el-menu
                    :router='true'
                    theme="dark"
                    :default-active="defaultActive"
                    :unique-opened="true"
                    @open="handleOpen">

                <el-submenu :index="item.path" v-for="item,index in navList">
                    <template slot="title">{{item.name}}</template>
                    <el-menu-item
                            :index="itemSon.path"
                            v-for="itemSon,indexSon in item.son">{{itemSon.name}}

                    </el-menu-item>
                </el-submenu>
                </el-submenu>
            </el-menu>

        </el-col>
        <el-col :span="21" class="content">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>
<style scoped rel="stylesheet/css" lang="less">
    .container {
        height: 100%;
        .navBox {
            position: fixed;
            z-index: 999;
            background: #324157;
            height: 100%;
            .logo {
                height: 80px;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
        .content {
            height: 100%;
            margin-left: 12.5%;
        }
    }
</style>
<script type="es6">
    export default {
        data(){
            return {
                defaultActive: '/index/transaction/class-manage',
                navList: [
                    {
                        'name': '交易类业务管理',
                        'path': 'transaction',
                        'icon': '',
                        'son': [{
                            'name': '类目管理',
                            'path': '/index/transaction/class-manage'
                        }, {
                            'name': '商品管理',
                            'path': '/index/transaction/commodity-manage'
                        }, {
                            'name': '发布订单管理',
                            'path': '/index/transaction/order-manage'
                        }],
                    },
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>