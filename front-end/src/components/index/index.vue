<template>
    <div class="all-box">
        <el-row>
            <el-col :span="24" class="header">xxx管理系统</el-col>
        </el-row>
        <el-row class="main">
            <el-col :span="3" class="nav-box">
                <el-menu default-active="1-1-1" theme="dark" class="nav">
                    <el-submenu :index="item.index" v-for="item,index in navList">
                        <template slot="title">{{item.title}}</template>
                        <el-submenu :index="itemSon.index" v-for="itemSon,indexSon in item.son">
                            <template slot="title">{{itemSon.title}}</template>
                            <el-menu-item :index="itemSonSon.index" v-for="itemSonSon,indexSonSon in itemSon.sonSon">
                                {{itemSonSon.title}}






                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="21" :offset="3" class="container">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .all-box {
        height: 100%;
    }

    .main {
        height: 100%;
        padding-top: 80px;
    }

    .header {
        background-image: linear-gradient(to right, #1278f6, #00b4aa);
        height: 80px;
        line-height: 80px;
        font-size: 20px;
        position: fixed;
        z-index: 10;
    }

    .nav-box {
        height: 100%;
        background: #324157;
        position: fixed;
        .nav {
            height: 100%;
        }
    }
</style>
<script type="es6">
    export default {
        data(){
            return {
                navList: [
                    {
                        title: "全部区域",
                        url: "",
                        index: '1',
                        son: [
                            {
                                title: '石河子市',
                                url: '',
                                index: '1-1',
                                sonSon: [
                                    {
                                        title: '站点一',
                                        url: "",
                                        index: '1-1-1'
                                    }
                                ]
                            },
                            {
                                title: '抚顺市',
                                url: '',
                                index: '1-2',
                                sonSon: [
                                    {
                                        title: '站点二',
                                        url: "",
                                        index: '1-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '用户管理',
                        url: '',
                        index: "2"
                    }
                ],//nav 循环的数组

            }
        },
        methods: {
            getMenu(){
                this.$http.get('api/menu').then(res => {
                    let data = res.body;
                    this.navList = data.map((val, index) => {
                        return {
                            title: val.name,
                            index: index + '',
                            son: (() => {
                                val.children = val.children || [];
                                return val.children.map((sonVal, sonIndex) => {
                                    return {
                                        title: sonVal.name,
                                        index: index + "-" + sonIndex,
                                        sonSon: (() => {
                                            sonVal.children = sonVal.children || [];
                                            return sonVal.children.map((sonSonVal, sonSonIndex) => {
                                                return {
                                                    title: sonSonVal.name,
                                                    index: index + "-" + sonIndex + "-" + sonSonIndex
                                                }
                                            })
                                        })()
                                    }
                                })
                            })()
                        }
                    })
                })
            }
        },
        created(){
            this.getMenu()
        }
    }
</script>