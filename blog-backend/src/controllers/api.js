import jwt from 'jsonwebtoken'

import Article from '../models/article'
import User from '../models/user'
import Token from '../models/token'

// 文章列表
export let getArticles = async (ctx) => {
  let articles = await Article.findAll({order: [['id', 'DESC']]})
  ctx.body = {
    result: articles,
    name: ctx.params.name,
    pasra: ctx.request.body
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
  let token = jwt.sign({ userInfo: user }, 'some')
  await User.create(user)
  User.findOne({where: user}).then((user) => {
    let uid = user.id
    let tokenInfo = {userId: uid, token: token}
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

export let Get = (ctx) => {
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query
  }
}

export let Post = async (ctx) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Put = (ctx) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Delect = (ctx) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body
  }
}
