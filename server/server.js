const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static-server');
const ReactSSR = require('react-dom/server');
const devStatic = require('./util/dev-static');

const favicon = require('koa-favicon');

const app = new Koa();

app.use(favicon(path.join(__dirname, '../favicon.ico')));

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const serverEntry = require('../dist/server-entry.js').default;
  const templete = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  const router = new Router();

  app.use(serve(
    {
      rootDir: path.join(__dirname, '../dist'), // 整个系统下的目录文件
      rootPath: '/public', // 在url地址里访问静态文件目录的路径
      maxage : 0 // 缓存周期
    }, 
    )
  );

  router.get('*', (ctx, next) => {
    const appString = ReactSSR.renderToString(serverEntry);
    ctx.body = templete.replace('<!-- app -->', appString);
  });

  app.use(router.routes());
} else {
  devStatic(app);
}

app.listen(3000, () => {
  console.log('This server is listening 3000');
});