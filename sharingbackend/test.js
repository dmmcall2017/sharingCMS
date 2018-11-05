const Koa = require('koa');

const router = require('koa-router')();

const route1 = new Koa();

router.get('/', function(ctx, next){
    ctx.body = "Hello Koa";
});

router.get('/news', (ctx, next)=>{
    ctx.body = "新闻page"
});

route1.use(router.routes());//启动路由

route1.listen(3003,()=>{
    console.log('starting at port 3000')
})