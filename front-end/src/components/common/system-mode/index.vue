<template>
    <el-row>
        <el-row class="line">
            <el-col :span="24" class="box">
                <div class="title">{{time}}</div>
                <el-button>同步时间</el-button>
            </el-col>
        </el-row>
        <el-row class="line">
            <el-col :span="24" class="box">
                <div class="title">{{outSideTemp}}</div>
                <el-button>立即更新</el-button>
            </el-col>
        </el-row>
        <el-row :gutter="30" class="line">
            <el-col :span="12" v-for="item,index in tableData">
                <el-card>
                    <div slot="header">
                        <span>{{item.title}}</span>
                    </div>
                    <el-table
                            :data="item.table"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="project"
                                label="项目"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="data"
                                label="数据"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="unit"
                                label="单位">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="line">
            <el-col :span="24" class="state">
                <div class="run">运行状态:{{runState}}</div>
                <div class="run">运行模式:{{runMode}}</div>
            </el-col>
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
.state {
    height: 120px;
    border: 1px solid #D1DBE5;
    border-radius: 3px;
    .run {
        height: 60px;
        line-height: 60px;
        margin-left: 30px;
    }
}

</style>
<script>
    export default{
        data(){
            return {
                time: '2016-01-01 11:11:51',
                outSideTemp: '22',
                runState:'手动',
                runMode:'正常',
                tableData: [
                    {
                        title: 'a',
                        table: [
                            {
                                project: '外网供水温度',
                                data: '2',
                                unit: 'c'
                            },
                            {
                                project: '外网供水温度',
                                data: '2',
                                unit: 'c'
                            },
                            {
                                project: '外网供水温度',
                                data: '2',
                                unit: 'c'
                            }
                        ]

                    },
                    {
                        title: 'b',
                        table: [
                            {
                                project: '外网供水温度',
                                data: '2',
                                unit: 'c'
                            },
                            {
                                project: '外网供水温度',
                                data: '2',
                                unit: 'c'
                            },
                            {
                                project: '外网供水温度',
                                data: '2',
                                unit: 'c'
                            }
                        ]

                    },
                ]
            }
        },
        components: {}
    }
</script>
