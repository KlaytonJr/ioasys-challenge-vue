<template>
  <div class="home">
    <img src="@/assets/bg-list.png" id="bg">
    <HeaderPage :name="userName"/>
    <BooksList />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import BooksList from '@/components/BooksList.vue';

export default {
  name: 'Home',

  components: {
    HeaderPage,
    BooksList
  },

  data() {
    return {
      userName: 'Klayton'
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  max-height: 100vh;
  overflow: hidden !important;
}

img {
  display: block;
  width: 100vw;
  height: 100vh;
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>