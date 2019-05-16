const path = require('path');
const MemoryFS = require('memory-fs');

const axios = require('axios');
const Router = require('koa-router');

const c2k = require('koa-connect')
const proxy = require('http-proxy-middleware')

const ReactSSR = require('react-dom/server');

const webpack = require("webpack");

const serverConfig = require('../../build/webpack.config.server');

const router = new Router();

// 1. 获取模板文件
const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html').then(res => {
      resolve(res.data);
    })
    .catch(err => reject(err));
  })
}

// 2. 监听webpack配置代码寻找文件路径，并用memory-fs存储
const fs = new MemoryFS();

const Module = module.constructor;
let serverBundle;

const compiler = webpack(serverConfig); // 配置对象

compiler.outputFileSystem = fs; // https://webpack.docschina.org/api/node/#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F-custom-file-systems-
compiler.watch({}, (err, stats) => {
  
  if (err) throw err;
  stats = stats.toJson();
  // console.log('stats', stats);
  stats.errors.forEach(err => console.error(err));
  stats.warnings.forEach(warn => console.warn(warn));
  
  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )

  console.log('bundlePath', bundlePath);
  const bundle = fs.readFileSync(bundlePath, 'utf8');
  console.log(333, bundle);

  const m = new Module();
  m._compile(bundle, 'server-entry.js');
  serverBundle = m.default;

})


module.exports = function(app) {
  
  // https://github.com/chimurai/http-proxy-middleware/issues/297#issuecomment-422284087
  app.use(
    c2k(proxy('/public', {
      target: 'http://localhost:8888',
      changeOrigin: true
    }))
  );

  router.get('*', async (ctx, next) => {
    await getTemplate().then(template => {
      const appString = ReactSSR.renderToString(serverBundle);
      ctx.body = template.replace('<!-- app -->', appString);
    });
    
  });

  app.use(router.routes());
}