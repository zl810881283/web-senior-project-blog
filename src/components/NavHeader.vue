<template>
  <header id="header" class="header row">
    <div class="header-left col md-8">码蜂社博客</div>
    <div class="header-right col md-3 xs-0">
      <nav class="header-nav">
        <ul>
          <li><a href="/">主页</a></li>
          <li><router-link to="/about">关于</router-link></li>
          <li>
            <router-link to="/post" v-if="isLogin">写文章</router-link>
            <router-link to="/login" v-if="!isLogin">登录</router-link>
          </li> 
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// import Sidebar from './components/NavHeader'

export default {
  data(){
    return{
      isLogin:false
    }
  },
  created(){
    if (localStorage.token!='' && localStorage.token!=undefined)
      this.isLogin = true
  },
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

