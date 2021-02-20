<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <leftNav></leftNav>
    <div class="main">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav.vue'
export default {
  name: 'App',
  components:{
    leftNav
  }

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
}
.main{
  width:95%;
  background-color: antiquewhite;
  height:100%;
}

</style>
