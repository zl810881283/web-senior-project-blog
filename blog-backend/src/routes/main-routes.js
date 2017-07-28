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
  .post('/public/login', controllers.api.login)
  // .post('/public/saveArticles', controllers.api.saveArticles)
  // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .post('/auth/:action', controllers.auth.Post)

module.exports = router
