<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/logo-black.png" alt="logo">
        </div>
        
        <div class="logout">
            <p>Bem vindo, <strong>{{name}}</strong>!</p>
            <button @click="exit">
                <log-out-icon size="1.5x" class="logout-btn"></log-out-icon>
            </button>
        </div>
    </div>
</template>

<script>
import { LogOutIcon } from 'vue-feather-icons'

export default {
    name: 'HeaderPage',

    props: [ 'name' ],

    components: {
        LogOutIcon,
    },

    data() {
        return {

        }
    },

    methods: {
    exit() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 120px 0px 120px;
}

.logo {
    cursor: pointer;
}

.logout {
  display: flex;
}

.logout p {
  margin-right: 15px;
}

.logout button {
  cursor: pointer;
  border: none;
  background: transparent;
}

.logout button:hover {
  color: #AB2680;
}

</style>