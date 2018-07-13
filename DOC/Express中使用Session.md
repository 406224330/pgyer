## 在Express中使用session

- 导入session包，npm install express-session --save

``` js
    const session=require('express-session');
```

- 设置session模块包

``` js

//设置过期时间30分钟
app.use(session({
    secret:'express_react_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30}//过期时间
}));

```

## 设置session

``` js

req.session.[key]=[value];

```

## 读取session

``` js

console.log(req.session.[key])

```

