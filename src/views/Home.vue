<template>
  <el-container class="back">
    <home-page/>
    <main-page/>
  </el-container>
</template>
<script>
import HomePage from '../components/HomePage.vue';
import MainPage from '../components/MainPage.vue';

export default {
  name: 'Home',
  components: {
   HomePage,MainPage
  }
};
</script>
<style lang="scss" scoped>
.back {
  height: 100%;
  border: 1px solid #eee;
  background-color: white;
}
</style>
