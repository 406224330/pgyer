## 导入模块包

``` js

const session=require('express-session');
var RedisStore = require('connect-redis')(session);

```

## 配置redis基础信息

``` js

const options={
    host:'10.20.31.11',
    port:'6379',
    db:10
}

```

## 初始化session-redis

``` js

app.use(session({
    store: new RedisStore(options),
    secret: 'pgyer',
    resave: false,
    proxy:"true",
    cookie: {maxAge: 60 * 1000 * 30}//过期时间
}));

```

## 测试是否成功

``` js

app.use(function (req, res, next) {
    if (!req.session) {
      return next(new Error('oh no session-redis is invalid')) // handle error
    }
    next(); // otherwise continue
})


```