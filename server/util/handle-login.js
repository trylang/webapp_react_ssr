const axios = require('axios');
const Router = require('koa-router');
const qs = require('qs');

const router = new Router();
const baseUrl = 'http://cnode.org/api/v1';


router.post('/login', async (ctx, next) => {
  const req = ctx.request;
  const res = ctx.response;
  console.log('login',req.body);
  console.log('qs', qs.stringify({
    accesstoken: req.body.accesstoken
  }));
  await axios.post(`${baseUrl}/accesstoken`, qs.stringify({
    accesstoken: req.body.accesstoken
  }))
    .then(resp => {
      console.log('resp', `${baseUrl}/accesstoken166666`, resp.data);
      if (resp.status === 200 && resp.data.success) {
        req.session.user = {
          accesstoken: req.body.accesstoken,
          ...resp.data
        }
        res.json({
          success: true,
          data: resp.data
        })
      }
      res.body = resp.data;
    })
    .catch(err => {
      console.log('errorhahaha',err)
      if (err.response) {
        console.log('error123456789', err.response.data, err.response);
        res.body = {
          success: false,
          data: err.response.data
        }
        console.log('ctx.body', ctx.body);
      }
      
      else {
        next(err);
      }
    })
})
module.exports = router.routes();