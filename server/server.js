const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
// const serve = require('koa-static-server');
// const ReactSSR = require('react-dom/server');

// const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const session = require('koa-session');

const favicon = require('koa-favicon');

// const devStatic = require('./util/dev-static');

const app = new Koa();

const router = new Router();


app.use(koaBody());

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(session(CONFIG, app));

app.use(favicon(path.join(__dirname, '../favicon.ico')));

router.use('/api/user', require('./util/handle-login'));
router.use('/api', require('./util/proxy'));

const isDev = process.env.NODE_ENV === 'development';
console.log('isDev', isDev)
if (isDev) {
  // const serverEntry = require('../dist/server-entry.js').default;
  // const templete = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  
  // app.use(serve(
  //   {
  //     rootDir: path.join(__dirname, '../dist'), // 整个系统下的目录文件
  //     rootPath: '/public', // 在url地址里访问静态文件目录的路径
  //     maxage : 0 // 缓存周期
  //   }, 
  //   )
  // );

  // router.get('*', (ctx, next) => {
  //   const appString = ReactSSR.renderToString(serverEntry);
  //   ctx.body = templete.replace('<!-- app -->', appString);
  // });

  app.use(router.routes());
} else {
  // devStatic(app);
}

app.listen(3000, () => {
  console.log('This server is listening 3000');
});