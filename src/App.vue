<template>
  <div id="app">
    <div class="container">
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
  </div>
</template>

<script>
import NavHeader from 'components/NavHeader'
import Articles from 'components/Articles'
import Extend from 'components/Extend'
import About from 'components/About'

export default {
  components: {
    NavHeader,
    Articles,
    Extend,
    About
  },
  data(){
    return {
      isAbout: this.$route.path=='/about' ? true : false,
    }
  },
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

