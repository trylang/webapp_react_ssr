const axios = require('axios');
const Router = require('koa-router');

const router = new Router();
const baseUrl = 'http://cnodejs.org/api/v1'

async function formatApi(ctx, next) {
  const req = ctx.request;
  const res = ctx.response;
  const path = ctx.path.replace('/api', '');
  
  const user = ctx.session.user || {};
  console.log('path', path, user);
  const needAccessToken = req.query.needAccessToken || false;
  if (needAccessToken && !user.accesstoken) {
    res.status = 401;
    res.body = {
      success: false,
      msg: 'need login'
    }
    return;
  }
  
  const query = Object.assign({}, req.query);
  // console.log('query', query, req.body);
  if (query.needAccessToken) delete query.needAccessToken;

  console.log('${baseUrl}${path}', `${baseUrl}${path}`)
  await axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, {
      accesstoken: user.accesstoken
    })
  }).then(resp => {
    console.log('proxy---', resp.data);
    if (resp.status == 200) {
      // ctx.response.body = resp.data.data.slice(1,2); // ctx.response.body 与 ctx.body 等价
      ctx.body = resp.data;
    }
    else {
      // res.status(resp.status).send(resp.data);
      res.status = resp.status;
      res.body = resp.data;
    }
  })
  .catch(err => {
    console.log('err', err)
    if (err.response) {
      res.status = 500;
      res.body = err.response.data;
    } else {
      res.status = 500;
      res.body = {
        success: false,
        msg: '未知错误'
      };
    }
  })

}

async function login(ctx, next) {
  const req = ctx.request;
  const res = ctx.response;
  console.log('login',req.body);
  await axios.post(`${baseUrl}/accesstoken`, {
      accesstoken: req.body.accesstoken
    })
    .then(resp => {
      console.log('resp', `${baseUrl}/accesstoken166666`, resp);
      if (resp.status === 200 && resp.data.success) {
        req.session.user = {
          accesstoken: req.body.accesstoken,
          ...resp.data
        }
        // console.log(req.session.user);
        res.json({
          success: true,
          data: resp.data
        })
      }

    })
    .catch(err => {
      
      if (err.response) {
        console.log('error123456789', err.response.data, err.response);
        res.body = {
          success: false,
          data: err.response.data
        }
        console.log('ctx.body', ctx.body);
      }
      
      // else {
      //   next(err);
      // }
    })
}

router.get('*', async (ctx, next) => {
  await formatApi(ctx, next);
});

// router.post('/user/login', async (ctx, next) => {
//   console.log('hahahahah')
//   await login(ctx, next);
// });

router.post('*', async (ctx, next) => {
  console.log('jhgfds')
  await formatApi(ctx, next);
});

module.exports = router.routes();