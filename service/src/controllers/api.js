import jwt from 'jsonwebtoken'

import Article from '../models/article'
import User from '../models/user'
import Token from '../models/token'

// 文章列表
export let getArticles = async (ctx) => {
  let articles = await Article.findAll({
    order: [
      ['id', 'DESC']
    ]
  })
  ctx.body = {
    result: articles,
    name: ctx.params.name,
    pasra: ctx.request.body
  }
}

// 文章详情
export let getArticleById = async (ctx) => {
  let article = await Article.findOne({where: {id: ctx.params.id}})
  ctx.body = {
    result: article
  }
}

// 近期文章
export let getRecArticle = async (ctx) => {
  let articles = await Article.findAll({limit: 3,
    order: [
      ['id', 'DESC']
    ]})
  ctx.body = {
    result: articles
  }
}

// 保存文章
export let saveArticle = async (ctx) => {
  await Article.create(ctx.request.body)
  ctx.body = {
    result: 'ok',
    name: ctx.params.name,
    pasra: ctx.request.body
  }
}

// 用户注册
export let register = async (ctx) => {
  let user = ctx.request.body
  // 加密
  let crypto = require('crypto')
  let password = user.password
  let shasum = crypto.createHash('sha1')
  shasum.update(password)
  password = shasum.digest('hex')
  user.password = password
  // jwt token 
  let token = jwt.sign({userInfo: user}, 'some')
  await User.create(user)
  User.findOne({
    where: user
  }).then((user) => {
    let uid = user.id
    let tokenInfo = {
      userId: uid,
      token: token
    }
    Token.create(tokenInfo)
  })
  // let articles = await ctx.request
  ctx.body = {
    result: 'ok',
    token: token,
    name: ctx.params.name,
    pasra: ctx.request.body
  }
}

// 用户登录
export let login = async (ctx) => {
  let user = ctx.request.body
  let result = 'ok'
  let token = ''
  // 加密
  let crypto = require('crypto')
  let password = user.password
  let shasum = crypto.createHash('sha1')
  shasum.update(password)
  password = shasum.digest('hex')
  let user1 = await User.findOne({where: user})
  if (user1 != null) {
    token = await Token.findOne({where: {userId: user1.id}})
  } else {
    result = 'error'
  }
  ctx.body = {
    result: result,
    token: token
  }
}
