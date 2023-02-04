<template>
    <el-form class="login-container"  label-position="left" label-width="0px">
        <h3 class="login_title">
            登录界面
        </h3>
            <el-button class="register_button" type="text" style="width:70%;" @click="register()">点此注册</el-button>
        <el-form-item>
            <el-input placeholder="账号" type="text" id="login_name" v-model="login_name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="密码" type="password" id="login_password" v-model="login_password" autocomplete="off"></el-input>
        </el-form-item>
            <el-button type="primary" style="width:50%;border:none" @click="login()">登录</el-button>
    </el-form>
</template>
<script>
export default {
    name: "Login-Name2",
     data(){
        return{
             formData: {},

            login_name:'',
            login_password:'',
        }
           

    },
    methods: {
        register() {
            window.location.href='register.html';
        },
    //   login() {
    //       var ln = this.login_name;
    //       var lp = this.login_password;

    //       this.formData ={};

    //       if(ln==''){
    //           this.$message.error("请填写账号!");
    //       }else if(lp==''){
    //           this.$message.error("请填写密码!");
    //       }else {
    //           this.formData.login_name = ln;
    //           this.formData.login_password = lp;
    //           console.log(this.formData);
    //           axios.get("http://localhost:8080/SpringMVC_ssm/users/"+ln).then((res)=>{
    //               if(res.data.data == null) {
    //                   this.$message.error("账号不存在,请注册");
    //               }else if(res.data.data.login_password == lp){
    //                   this.$message.success("登录成功");
    //                   window.location.href = 'books.html';
    //               }else if(res.data.data.login_password != lp) {
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
