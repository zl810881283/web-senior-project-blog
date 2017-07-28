<template>
  <div id="app">
    <div class="container" v-if="$route.path!='/login'&&$route.path!='/register'">
      <nav-header></nav-header>
      <div class="row">
        <div v-if="$route.path!='/about'">
          <div class="col md-8">
            <router-view></router-view>
          </div>
          <div class="col md-4 xs-10">
            <extend></extend>
          </div>
        </div>
        <!-- about -->
        <div v-if="$route.path=='/about'">
          <div class="col md-12 xs-12">
            <about></about>
          </div>
        </div>  
      </div>
      
    </div>
    <div class="login-wrapper" v-if="$route.path=='/login'||$route.path=='/register'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavHeader from 'components/NavHeader'
import Articles from 'components/Articles'
import Extend from 'components/Extend'
import About from 'components/About'
import Post from 'components/Post'
import Login from 'pages/Login'
import Register from 'pages/Register'

export default {
  components: {
    NavHeader,
    Articles,
    Extend,
    About,
    Post,
    Login,
    Register
  },
  data(){
    return {
      isAbout: this.$route.path=='/about' ? true : false,
      path: this.$route.path
    }
  },
  // created(){
  //   console.log(66677);
  //   this.$http.get('http://127.0.0.1:3000/public/articles').then(response => {
  //   // success callback
  //   console.log(response);
  //   }, response => {
  //   // error callback
  //   })
  // },
}
</script>

<style>
  @import '../src/assets/css/base.css';

  .container{
    width: 80%;
    margin: 0 auto;
  }

  .container-90{
    width: 90%;
    margin: 0 auto;
  }
</style>

