<template>
  <div class="content">
    <img src="@/assets/logo.png" alt="logo">
    <div class="login-form">
      <div>
        <input type="email" v-model="email" required>
        <label>E-mail</label>
      </div>
      <div>
        <input type="password" v-model="senha" required>
        <label>Senha</label>
        <button class="btn" @click="login">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login() {
      this.$router.push('/home');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  position: relative;
  top: -20px;
  left: -85px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form div {
  position: relative;
}

.login-form div input {
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.32);
  width: 368px;
  height: 60px;
  border: none;
  color: #fff;
  padding: 30px 0px 5px 15px;
}

.login-form div label {
  position: absolute;
  top: 20px;
  left: 15px;
  color: rgba(255, 255, 255, 0.673);
  pointer-events: none;
  transition: 1s ease;
}

.login-form div input:focus {
  outline: none;
}

.login-form div input:focus ~ label,
.login-form div input:valid ~ label,
.login-form div input:user-invalid ~ label {
  border: none;
  top: 5px;
  font-size: 14px;
}

.btn {
  position: absolute;
  width: 85px;
  height: 36px;
  right: -30px;
  top: 30px;
  transform: translate(-50%, -50%);

  border-radius: 44px;
  border: none;

  color: #B22E6F;
  font-weight: 500;
  cursor: pointer;
}

</style>
