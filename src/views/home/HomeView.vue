<template>
<div id="index">
  <h1 align="center" style="color: #F56C6C;">学生成绩管理系统主页</h1>
    <el-row>
          <el-button type="primary" @click="students()" >学生个人信息表</el-button>
          <el-button type="primary" @click="login()" >登录</el-button>
          <el-button type="primary" @click="register()">注册</el-button>
    </el-row>
</div>
    
</template>

<script>


export default {
  name: 'HomeView',
  methods: {
      students() {
        
        window.location.href='students.html';
      },
    
      register() {
        window.location.href='register.html';
      },
      login() {
        this.$router.push('/login')
      }
    }
}
</script>
<style>
  #index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  position:absolute;
background-size:100% 100%;
background-position: center;
background-image:url("D:\\Users\\illusion\\Desktop\\WebDevelopment\\demo-login\\demo-login\\src\\assets\\12211.jpg")
}
</style>
