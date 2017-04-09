<template>
    <el-row :gutter="50">
        <el-col :span="6">
            <el-card :body-style="bodyStyle">
                <div slot="header">
                    <span>时间段列表</span>
                    <el-button type="primary" class="button">从终端刷新</el-button>
                </div>
                <el-table
                        :data="list"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="max"
                            label="上限">
                        <template scope="scope">
                            <el-input v-model="scope.row.max"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="min"
                            label="下限">
                        <template scope="scope">
                            <el-input v-model="scope.row.min"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="num"
                            label="曲线号">
                        <template scope="scope">
                            <el-input v-model="scope.row.num"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button-group class="btn-g">
                    <el-button size="mini" type="primary">添加</el-button>
                    <el-button size="mini" type="primary">编辑</el-button>
                    <el-button size="mini" type="primary">删除</el-button>
                    <el-button size="mini" type="primary">保存并下发</el-button>
                </el-button-group>
            </el-card>
        </el-col>
        <el-col :span="18">
            <el-card :body-style="bodyStyle">
                <div slot="header">
                    <span>详细信息</span>
                </div>
                <el-row>
                    <div class="container">
                        <span class="title">时间段上限:</span>
                        <el-input class="input" size="small" v-model="max">
                            <el-button size="small" slot="prepend">+</el-button>
                            <el-button size="small" slot="append">-</el-button>
                        </el-input>
                    </div>
                    <div class="container">
                        <span class="title">时间段下限:</span>
                        <el-input class="input" size="small" v-model="min">
                            <el-button size="small" slot="prepend">+</el-button>
                            <el-button size="small" slot="append">-</el-button>
                        </el-input>
                    </div>
                    <div class="container">
                        <span class="title">选择曲线:</span>
                        <el-select v-model="choose" size="small" class="select">
                            <el-option
                                    v-for="item in menu"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="container">
                        <el-button type="primary" icon="search">查询</el-button>
                    </div>
                </el-row>
                <el-row>
                    <div id="chartMain"></div>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .button {
        float: right;
        margin-top: -10px;
    }

    .btn-g {
        position: absolute;
        bottom: 20px;
        margin-left: -85px;
        left: 50%;
    }

    .container {
        display: inline-block;
        margin-right: 30px;
        .input {
            width: 120px;
        }
        .select {
            width: 120px;
        }
    }

    #chartMain {
        width: 90%;
        height: 550px;
        margin: 0 auto;
    }

</style>
<script type="es6">
    import eCharts from "echarts"
    export default {
        data(){
            return {
                list: [
                    {
                        max: "21:00",
                        min: "1:00",
                        num: '2'
                    }, {
                        max: "21:00",
                        min: "1:00",
                        num: '2'
                    }, {
                        max: "21:00",
                        min: "1:00",
                        num: '2'
                    }
                ],
                bodyStyle: {
                    minHeight: '600px',
                    position: 'relative'
                },
                choose: '1',
                menu: [
                    {
                        label: "a",
                        value: "1"
                    }, {
                        label: "b",
                        value: "2"
                    }, {
                        label: "c",
                        value: "3"
                    }
                ],
                max: '12:00',
                min: '11:00',
                chart: null,
                chartOption: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        left: '150px',
                    },
                    toolbox: {
                        show: false,
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: [1, 1, 1, 1, 1, 1, 2, 3, 4]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [{
                        type: 'line',
                        data: [1, 1, 1, 1, 1, 1, 2, 3, 4]
                    }]
                }
            }
        },
        methods: {
            draw(id){
                this.chart = eCharts.init(document.getElementById(id));
                this.chart.showLoading();
                this.chart.setOption(this.chartOption);
                this.chart.hideLoading();
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.draw('chartMain')
            })
        }
    }

</script>