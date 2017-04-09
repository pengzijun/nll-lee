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
            <el-col :span="24" class="box">
                <div class="title">
                    <span>选择阀门:</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in menu"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="30" class="middle line">
            <el-col :span="8" class="col">
                <el-card :body-style="bodyStyle">
                    <div slot="header">
                        <span>步进微调</span>
                    </div>
                    <el-table
                            :data="list"
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
                            <template scope="scope">
                                <el-input v-model="scope.row.data"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="unit"
                                label="单位">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="8" class="col">
                <el-card :body-style="bodyStyle">
                    <div slot="header">
                        <span>最大开度</span>
                    </div>
                    <vue-slider
                            :class="slider.class"
                            ref="slider"
                            v-model="slider.max"
                            :direction="slider.direction"
                            :height="slider.height"
                            :width="slider.width"
                    ></vue-slider>
                    <el-input v-model="slider.max" class="input"></el-input>
                </el-card>
            </el-col>
            <el-col :span="8" class="col">
                <el-card :body-style="bodyStyle">
                    <div slot="header">
                        <span>最小开度</span>
                    </div>
                    <vue-slider
                            :class="slider.class"
                            ref="slider"
                            v-model="slider.min"
                            :direction="slider.direction"
                            :height="slider.height"
                            :width="slider.width"
                    ></vue-slider>
                    <el-input v-model="slider.max" class="input"></el-input>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="line">
            <el-col :span="24" class="box">
                <div class="item">
                    <span>调整步进量:</span>
                    <el-input v-model="stepVal" class="itemInput">
                        <template slot="append">%</template>
                    </el-input>
                </div>
                <div class="item">
                    <span>调整延时长度:</span>
                    <el-input v-model="timeOut" class="itemInput">
                        <template slot="append">秒</template>
                    </el-input>
                </div>
            </el-col>
        </el-row>
    </el-row>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .line {
        margin-bottom: 50px;
    }

    .middle {
        height: 425px;
    }

    .col {
        height: 400px;
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

    .item {
        display: inline-block;
        margin-left: 30px;
        margin-right: 30px;
        .itemInput {
            width: 100px;
        }
    }

    .input {
        width: 50px;
        margin-top: 30px;
    }
</style>
<script type="es6">
    import vueSlider from 'vue-slider-component';
    export default {
        data(){
            return {
                menu: [
                    {
                        value: 'A',
                        label: 'A阀门'
                    }, {
                        value: 'B',
                        label: 'B阀门'
                    }],
                value: 'A',
                pValue: 0,
                list: [
                    {
                        project: '阀门1',
                        data: '2',
                        unit: '%'
                    },
                    {
                        project: '阀门2',
                        data: '2',
                        unit: '%'
                    },
                    {
                        project: '阀门3',
                        data: '2',
                        unit: '%'
                    }
                ],
                slider: {
                    max: 0,
                    min: 0,
                    direction: 'vertical',
                    height: 250,
                    width: 10,
                    class: "slide-box"
                },//进度条配置 max min
                bodyStyle: {
                    textAlign: "center",
                    height: '330px'
                },//没用
                stepVal: 0,
                timeOut: 0
            }
        },
        components: {
            vueSlider
        },
    }
</script>
