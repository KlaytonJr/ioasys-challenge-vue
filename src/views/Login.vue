<template>
  <div class="login">
    <img src="@/assets/bg-image.png" id="bg">
    
    <LoginForm class="form"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>

.login {
  width: 100%;
  max-height: 100%;
  overflow: hidden !important;
}

img {
  display: block;
  width: 100vw;
  height: 100vh;
}

.form {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
}

</style>