<template>
  <section class="container">
    <div class="recent">
      <h2 class="title">
        近期文章
      </h2>
      <div class="content">
        <ul>
          <li v-for="art in recArticles"><router-link :to="{name:'article', params:{id: art.id}}">{{art.title}}</router-link></li>
        </ul>
      </div>
    </div>
    <!-- 档案 -->
    <div class="Archives">
      <h2 class="title">
        文章归档
      </h2>
      <div class="content">
        <ul>
          <li><a href="">2017年6月（6）</a></li>
          <li><a href="">2017年5月（8）</a></li>
          <li>2017年4月（12）</li>
          <li>2017年3月（9）</li>
          <li>2017年2月（2）</li>
        </ul>
      </div>
    </div>
    <!-- 标签 -->
    <div class="tags">
      <h2 class="title">
        标签
      </h2>
      <div class="content">
        <span class="label">
          <a href="">前端</a>
        </span>
        <span class="label">
          <a href="">css</a>
        </span>
        <span class="label">
          Nodejs
        </span>
        <span class="label">
          UI
        </span>
        <span class="label">
          数据库
        </span>
        <span class="label">
          爬虫
        </span>
        <span class="label">
          Java
        </span>

      </div>
    </div>
  </section>
</template>

<script>
// import Sidebar from './components/NavHeader'

export default {
  data(){
    return{
      recArticles: {}
    }
  },
  created(){
    this.$http.get('public/getRecArticle').then(res => {
      // success callback
      console.log(res.data.result);
      this.recArticles = res.data.result
    }, res => {
    // error callback
    })
  },
  components: {
    // NavHeader,
  }
}
</script>

<style scoped>
  .container div{
    margin-bottom: 50px;
  }

  .title{
    font-size: 18px;
    margin-bottom: 18px;
  }

  .content{
    font-size: 14px;
    line-height: 200%;
  }

  .content ul li{
    /*margin: */
  }

  .label{
    padding: 1px 3px;
    border: 1px solid green;
    margin-right: 5px;
    font-size: 13px;
  }

</style>

