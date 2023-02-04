<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="register-container">
        <h3 class="register_title">
            注册界面
        </h3>
      <el-form-item prop="account">
        <el-input placeholder="账号"  v-model="ruleForm.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="confirmpwd">
        <el-input placeholder="确认密码" type="password" v-model="ruleForm.confirmpwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop="age">
        <el-input placeholder="年龄" v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input placeholder="手机号"  v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input placeholder="邮箱"  v-model="ruleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="collageCode">
        <el-input placeholder="学院代码"  v-model="ruleForm.collageCode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
export default {
    name: 'Register-name',
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.confirmpwd !== '') {
            this.$refs.ruleForm.validateField('confirmpwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
            account:'',
            password: '',
            confirmpwd: '',
            age: '',
            phone:'',
            email:'',
            collageCode:''
        },
        rules: {
            account:[
                {required: true,message:'请输入账号',trigger:'blur'},
                {pattern:/^teacher\d{2}$/,message:'账号格式为teacher+两位数字',trigger:'blur'}
            ],
            
            password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmpwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          phone:[
            {required:true,message:'请输入手机号',trigger:'blur'},
            {pattern:/^(1[3-9][0-9])\d{8}$/,message:'手机号格式不对',trigger:'blur'}
          ],
          email:[
            {required:true,message:'请输入邮箱地址',trigger:'blur'},
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
         collageCode:[
            {required:true,message:'请输入学院代码',trigger:'blur'},
            {pattern:/^106\d{2}$/,message:'学院代码格式为106+两位数字',trigger:'blur'}
         ]
        }
      };
    },
    // methods: {
       
    //     submitForm(ruleForm) {
    //         this.$refs[ruleForm].validate((valid) => {
    //       if (valid) {
    //           axios({
    //               url:"http://localhost:8080/xml_project/teachers",
    //               method: "post",
    //               contentType:"application/json",
    //               data:{
    //                   "account":this.ruleForm.account,
    //                   "password":this.ruleForm.password,
    //                   "age":this.ruleForm.age,
    //                   "phone":this.ruleForm.phone,
    //                   "email":this.ruleForm.email,
    //                   "collageCode":this.ruleForm.collageCode
    //               }
    //           }).then((res)=> {
    //               if (res.data.code == 20011) {
    //                   this.$message.success("注册成功,请去登录吧!");
    //               } else {
    //                   this.$message.error("注册失败,请重新填写信息!");
    //               }
    //           });
    //       } else {
    //         this.$message.error("注册失败");
    //         return false;
    //       }
    //     });
    //   },
    //   resetForm(ruleForm) {
    //     this.$refs[ruleForm].resetFields();
    //   }
    // }
}
</script>
<style>
.register-container{
	border-radius: 15px;
	background-clip: padding-box;
	margin: 70px auto;
	padding: 25px 25px 15px 35px; 
	width: 350px;
	box-shadow: 0 0 25px;
  }
  .register_title{
	margin: 0px auto 40px auto;
	text-align: center;
	color: chartreuse;
  }
</style>