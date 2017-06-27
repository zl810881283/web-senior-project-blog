<template>
  <header id="header" class="header row">
    <div class="header-left col md-8">码蜂社博客</div>
    <div class="header-right col md-3 xs-0">
      <nav class="header-nav">
        <ul>
          <li><a href="/">主页</a></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// import Sidebar from './components/NavHeader'

export default {
  components: {
    // NavHeader,
  }
}
</script>

<style scoped>
  .header{
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 40px;
  }

  .header-left{
    font-size: 36px;
    margin-left: 20px;
  }

  .header-right{
    font-size: 26px;
  }

  .header-nav{

  }

  .header-nav ul li{
    float: left;
    margin-right: 16px;
  }
</style>

