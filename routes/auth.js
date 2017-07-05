const Client = require('../src/model/driver')
const assert = require('assert') // 利用断言作数据判断 不过不知道是否有效
const querystring = require('querystring')
const express = require('express')
const router = express.Router()

// 对没有session的路由做一下过滤 没有则去跳转登陆
router.get('*', (req, res, next) => {
  // 先获取共享到的cookie 后期可能移除
  let sessionId = Reflect.get(req.cookies, 'dashboard.sid')
  if (sessionId) {
    // 没有session中的user的时候
    if (!req.session.user) {
      let id = sessionId.split(':')[1].split('.')[0]
      client = new Client()
      client
      .remote({ baseURL: 'http://localhost:8180' })
      .get(`auth/${id}`)
      .then(res => {
        req.session.user = res.data
      })
    }
    next()
  }
  else {
    res.redirect(301, `http://localhost:8180/`)
  }
})

module.exports = router
