<template>
  <div class="page-login">
    <LoginForm/>
  </div>

</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.page-login{
  height: 100%;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
</style>