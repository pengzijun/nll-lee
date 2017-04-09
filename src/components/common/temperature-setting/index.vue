<template>
   <el-row>
       <el-row class="line">
           <el-col :span="24" class="box">
               <div class="title">
                   <el-button>读取下位机数据</el-button>
                   <el-button>保存到下位机</el-button>
               </div>
           </el-col>
       </el-row>
       <el-row class="line">
           <el-card>
               <div slot="header">
                   <span>温度修正</span>
               </div>
               <el-table
                       :data="list"
                       border
                       style="width: 100% ;text-align:center" >
                   <el-table-column
                           prop="projectLeft"
                           label="项目">
                   </el-table-column>
                   <el-table-column
                           prop="dataLeft"
                           label="数据">
                       <template scope="scope">
                           <el-input class="input" v-model="scope.row.dataLeft"></el-input>
                       </template>
                   </el-table-column>
                   <el-table-column
                           prop="projectRight"
                           label="项目">
                   </el-table-column>
                   <el-table-column
                           prop="dataRight"
                           label="数据">
                       <template scope="scope">
                           <el-input class="input" v-model="scope.row.dataRight"></el-input>
                       </template>
                   </el-table-column>
               </el-table>
           </el-card>
       </el-row>
   </el-row>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .line {
        margin-bottom: 50px;
    }
    .box {
        height: 80px;
        line-height: 80px;
        border: 1px solid #D1DBE5;
        border-radius: 3px;
        .title {
            display: inline-block;
            margin-left: 30px;
            margin-right: 30px;
        }
    }
    .input {
        width: 80px;
    }

</style>
<script>
    export default {
        data(){
            return {
                list:[
                    {
                        projectLeft:'室内',
                        dataLeft:'22',
                        projectRight:'回水2',
                        dataRight:'2'
                    },{
                        projectLeft:'室内',
                        dataLeft:'22',
                        projectRight:'回水2',
                        dataRight:'2'
                    },{
                        projectLeft:'室内',
                        dataLeft:'22',
                        projectRight:'回水2',
                        dataRight:'2'
                    },{
                        projectLeft:'室内',
                        dataLeft:'22',
                        projectRight:'回水2',
                        dataRight:'2'
                    }
                ]
            }
        }
    }
</script>