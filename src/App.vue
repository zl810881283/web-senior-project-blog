<template>
  <div id="app">
    <div class="container">
      <nav-header></nav-header>
      <div class="row">
        <div class="col md-8">
          <articles></articles>
        </div>
        <div class="col md-4 xs-10">
          <extend></extend>
        </div>
      </div>
      <!--<router-view></router-view>-->
    </div>
  </div>
</template>

<script>
import NavHeader from 'components/NavHeader'
import Articles from 'components/Articles'
import Extend from 'components/Extend'

export default {
  components: {
    NavHeader,
    Articles,
    Extend
  }
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

