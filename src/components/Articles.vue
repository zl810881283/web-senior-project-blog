<template>
  <div class="container-90">
    <!-- <div v-for="(item,index) in articles" :key="item.id"> -->
      <div v-if="articles[0]">
        <my-article v-for="(item,index) in articles" 
                    :key="item.id" 
                    :data="item"
                    :index="index">
        </my-article>
      </div>
      <div v-if="!articles[0]">暂无文章</div>
    <!-- </div> -->
  </div>
</template>

<script>
import MyArticle from 'components/MyArticle'

export default {

  data(){
    return{
      articles: {}
    }
  },
  created(){
    this.$http.get('public/articles').then(res => {
      // success callback
      console.log(res.data.result);
      this.articles = res.data.result
    }, res => {
    // error callback
    })
  },
  components: {
    MyArticle,
  }


}
</script>

<style scoped>
  

  
</style>

