const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static-server');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry.js').default;

const templete = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

const app = new Koa();
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
  ctx.body = templete.replace('<app></app>', appString);
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('This server is listening 3000');
});