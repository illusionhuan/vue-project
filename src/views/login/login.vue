<template>
    <el-form ref="loginFormRef" :inline="true" class="login-container" :model="login_Form" :rules="Rules" label-position="left" label-width="0px">
        <h3 class="login_title">
            登录界面
        </h3>
        
        <el-button class="register_button" type="text" style="width:70%;" @click="register()">点此注册</el-button>
        
        <el-form-item prop="username">
        
            <el-input placeholder="账号" style="padding-left:40px padding-right:40px" v-model="login_Form.username" prefix-icon="el-icon-user" autocomplete="off" clearable></el-input>
        
        </el-form-item>
        
        <el-form-item prop="password">
        
            <el-input placeholder="密码" style="padding-left:40px padding-right:40px" type="password" v-model="login_Form.password" prefix-icon="el-icon-lock" autocomplete="off" show-password clearable></el-input>
        
        </el-form-item>
        
        <el-button type="primary" style="width:50%;border:none" @click="login">登录</el-button>
        <!-- <el-button type="info" style="width:50%;border:none" @click="resetLoginForm">重置</el-button> -->
    </el-form>
</template>
<script>
export default {
    name: "Login-Name",
     data(){
        return{
            formData: {},
            login_Form: {
                username:'',
                password:'',
            },
            Rules: {
                username:[
                    { required: true, message: "用户名为必填项", trigger: 'blur'},
                    { min: 3, max: 12, message: '长度在3到12个字符', trigger: 'blur'}
                ],
                password:[
                    { required: true, message: "密码为必填项", trigger: 'blur'},
                    { min: 6, max: 10, message: "密码长度在6~10个字符之间", trigger: 'blur'}
                ]
            }
        }
           

    },
    methods: {
        register() {
            this.$router.push({ path: '/register' });
        },
        login() {
            // token信息
            // console.log('用户名:',this.login_Form.username);
            // console.log('密码:',this.login_Form.password);
            this.$axios.get("/userlist").then(res => {
                console.log(res);
            })
        },
        // resetLoginForm() {
        //     this.$refs.loginFormRef.resetFields();  
        // },
    //   login() {
    //       var ln = this.username;
    //       var lp = this.password;

    //       this.formData ={};

    //       if(ln==''){
    //           this.$message.error("请填写账号!");
    //       }else if(lp==''){
    //           this.$message.error("请填写密码!");
    //       }else {
    //           this.formData.username = ln;
    //           this.formData.password = lp;
    //           console.log(this.formData);
    //           axios.get("http://localhost:8080/SpringMVC_ssm/users/"+ln).then((res)=>{
    //               if(res.data.data == null) {
    //                   this.$message.error("账号不存在,请注册");
    //               }else if(res.data.data.password == lp){
    //                   this.$message.success("登录成功");
    //                   window.location.href = 'books.html';
    //               }else if(res.data.data.password != lp) {
    //                   this.$message.error("密码不正确,请重新输入");
    //               }
    //           });


    //       }


    //   }
    // }
    }
}
</script>
<style>

  .login-container{
	border-radius: 15px;
	background-clip: padding-box;
	margin: 90px auto;
	padding: 35px 35px 15px 35px; 
	width: 350px;
	box-shadow: 0 0 25px;
  }
  .login_title{
	margin: 0px auto 40px auto;
	text-align: center;
	color: chartreuse;
  }
</style>
