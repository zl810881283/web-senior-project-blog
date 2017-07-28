import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '可以访问！'
  })
  .get('/public/articles', controllers.api.getArticles)
  .post('/public/saveArticle', controllers.api.saveArticle)
  .post('/public/register', controllers.api.register)
  // .post('/public/saveArticles', controllers.api.saveArticles)
  // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)
  .post('/auth/:action', controllers.auth.Post)

module.exports = router
