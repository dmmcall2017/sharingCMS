const Koa = require('koa');

const router = require('koa-router')();

const route = new Koa();

router.get('/', function(ctx, next){
    ctx.body = "Hello Koa";
});

router.get('/news', (ctx, next)=>{
    ctx.body = "新闻page"
});

router.get('/newscontent', (ctx, next)=>{
    let url = ctx.url;
    //从request中获取GET请求
    let request = ctx.request;
    let req_query = request.query;
    let ctx_querystring = ctx.querystring;
    //从上下文中直接获取

})

route.use(router.routes());//启动路由

route.listen(3003,()=>{
    console.log('starting at port 3003')
})
