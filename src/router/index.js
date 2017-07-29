import Vue from 'vue'
import Router from 'vue-router'
import Articles from 'components/Articles'
import ArticleDetail from 'components/ArticleDetail'
import About from 'components/About'
import Post from 'components/Post'
import Login from '../pages/Login'
import Register from '../pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articles',
      component: Articles
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleDetail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
