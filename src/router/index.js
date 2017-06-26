import Vue from 'vue'
import Router from 'vue-router'
import Articles from 'components/Articles'
import ArticleDetail from 'components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articles',
      component: Articles
    },
    {
      path: '/detail',
      name: 'detail',
      component: ArticleDetail
    }
  ]
})
