<template>
  <div class="login-form">
    <Card class="card" shadow>
      <div style="font-size: 24px; font-weight: bolder;">
        后台数据服务
      </div>
      <div style="margin-top: 20px">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {required: false, message: 'Please fill in the user name', trigger: 'blur'}
        ],
        password: [
          {required: false, message: 'Please fill in the password.', trigger: 'blur'},
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$Http.login();
      const data = {
        username:this.formInline.user,
        password:this.formInline.password
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>

<style scoped>
.login-form {
}

.card {
  position: absolute;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
}

</style>