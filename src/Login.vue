<template>
  <el-form ref="adminForm" :model="adminForm" class="container" :rules="rules">
    <h3>饿了么后台管理系统</h3>
    <el-form-item prop="adminName">
      <el-input
        v-model="adminForm.adminName"
        placeholder="请输入管理员账号"
      ></el-input>
    </el-form-item>
    <el-form-item prop="passWord">
      <el-input
        v-model="adminForm.passWord"
        type="password"
        placeholder="请输入管理员密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="$store.state.isLoading"
        style="width: 100%"
        type="primary"
        @click="submitForm"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        // isLoading:false,
      adminForm: {
        adminName: "",
        passWord: "",
      },
      rules: {
        adminName: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
        passWord: [
          { required: true, message: "请输入管理员密码", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
        // console.log( this.$refs.adminForm.validate)
      this.$refs.adminForm.validate((valid) => {
        //   console.log(valid);
        if (valid) {
          //规则验证成功
        //   this.isLoading = true;
          this.$store.dispatch('login',this)
        } else {
          //规则验证失败
          this.$message.error("请输入完整的信息");
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.container {
  border: 1px solid #eaeaea;
  margin: 150px auto;
  width: 350px;
  padding: 10px 20px;
  h3 {
    text-align: center;
  }
}
</style>