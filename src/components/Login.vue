<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--登录表单区域-->
            <el-form label-width="0px" class="login_form">
                <!--用户名-->
                <el-form-item>
                    <el-input prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item>
                    <el-input prefix-icon="iconfont icon-3702mima"></el-input>
                </el-form-item>
                <!--按钮区域-->
                <el-form-item class="btns">
                    <el-button type="primary">登录</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "login"
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