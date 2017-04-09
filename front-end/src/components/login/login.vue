<template>
    <el-row class="login">
        <el-col :span="8" class="box" :offset="8">
            <el-row class="loginForm">
                <div class="formBox">
                    <div class="warp" @keyup.enter="submitForm">
                        <h1>欢迎登陆妇儿医院后台管理</h1>
                        <el-form :model="user" :rules="rules" ref="ruleForm" >
                            <el-form-item prop="name">
                                <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item prop="pwd">
                                <el-input v-model="user.pwd" type="password" placeholder="请输入密码" ></el-input>
                            </el-form-item>
                            <el-form-item @click="dialogVisible = true">
                                <el-button type="primary" @click="submitForm">提交</el-button>
                                <el-button @click="resetForm">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-row>
        </el-col>
        <el-dialog title="提示" v-model="isErr" size="tiny">
            <span>登录异常，请重新登录，如有疑问请联系工作人员。</span>
            <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="isErr = false">确 定</el-button>
  </span>
        </el-dialog>
    </el-row>
</template>
<script type="es6">
    export  default {
        data(){
            return {
                user: {
                    name: '',
                    pwd: '',
                },
                isErr: false,
                rules: {
                    pwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm() {
//                this.$http.post('api/user/login', {
//                    username: this.user.name,
//                    password: this.user.pwd
//                }, {
//                    emulateJSON: true
//                }).then((res) => {
//                    if (res.data) {
//                        if (res.data.code == "0") {
//                            let userToken = res.data.data.token + ''
//                            this.$app.cookie.set('userToken', userToken, res.data.expire)
//                            this.$router.push('index')
//                        } else {
//                            this.user.pwd = ''
//                            this.isErr = true
//                        }
//                    } else {
//                        this.user.pwd = ''
//                        this.isErr = true
//                    }
                    this.$router.push('index')
//                })
            },
            resetForm() {
                this.user.name = ''
                this.user.pwd = ''
            }
        }
    }
</script>
<style scoped rel='stylesheet/scss'>
    .login {
        height: 100%;
        background-image: url("./bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        .box {
            height: 100%;
        }
    }

    .loginForm {
        height: 60%;
    }

    .formBox {
        background-color: #FFFFFF;
        height: 328px;
        width: 460px;
        margin: 200px auto;
        border-radius: 3px;

    }

    .warp {
        padding: 52px 65px;
    }

    h1 {
        line-height: 60px;
        font-size: 22px;
        color: #4e546c;
        font-weight: 500;
    }

</style>