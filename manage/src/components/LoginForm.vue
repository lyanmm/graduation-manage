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
<!--            <Button type="primary" @click="testToken" long>测试</Button>-->
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
import {encrypt} from "@/utils";

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
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      const data = {
        username: this.formInline.user,
        password: encrypt(this.formInline.password)
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Http.login(data).then(data => {
            const {code, msg} = data;
            if (code !== 0) {
              this.$Message.success(msg);
              console.log(data?.token)
              sessionStorage.setItem('token', data?.token);
              this.$router.push('/home');
            }else {
              this.$Message.error(msg);
            }
          }).catch(reason => {
            console.log(reason)
          });
        }
      })
    },
    testToken() {
      const data = {
        username: this.formInline.user,
        password: this.formInline.password
      }
      this.$Http.testInterface(data).then(value => {
        console.log(value)
      });
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