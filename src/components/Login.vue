<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--登录表单区域-->
            <el-form ref="loginFormRef" :model='loginForm' :rules="loginFormRules" label-width="0px" class="login_form">
                <!--用户名-->
                <el-form-item prop="username">
                    <el-input v-model='loginForm.username' prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input v-model='loginForm.password' prefix-icon="iconfont icon-3702mima" type="password"></el-input>
                </el-form-item>
                <!--按钮区域-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
       // 表单的验证规则对象
        loginFormRules: {
          // 验证用户名是否合法
          username: [
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          // 验证密码是否合法
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' }
          ]
      }
      }

    },
    methods: {
      // 点击重置按钮，重置表单
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields()
      },
      login() {
        // 登录前进行预验证
        // 方案一
        // this.$refs.loginFormRef.validate(valid => {
          // 返回一个布尔值
          // console.log(valid);
          // if(!valid) return;
          // 发送登录请求
          // const result = this.$http.post('login', this.loginForm);
          // result.then(res => {
          //   // console.log(res.data);
          //   if(res.data.meta.status !== 200) return console.log('登录失败')
          //   console.log('登陆成功')
          // })
        // })

        // 方案二
        this.$refs.loginFormRef.validate(async valid => {
          if(!valid) return;
          const { data: res } = await this.$http.post('login', this.loginForm);
          if (res.meta.status !== 200) return this.$message.error('登录失败')
          this.$message.success('登陆成功')
          // 登陆成功后将token添加到sessionStorage中
          window.sessionStorage.setItem("token", res.data.token)
          // 编程时导航跳转到主页
          this.$router.push("/home")
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    .login_container {
        background-color: #2b4b6b;
        height: 100%;
    }

    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        // 圆角
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .avatar_box{
            height: 130px;
            width: 130px;
            /*加边框以及圆角*/
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }

    .btns {
        display: flex;
        /*尾部对齐*/
        justify-content: flex-end;
    }

    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        /*防止输入框右边超出*/
        box-sizing: border-box;
    }
</style>