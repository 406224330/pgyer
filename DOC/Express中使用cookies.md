## Express中使用cookies

- 导入cookie包，npm install cookie-parser --save
    ``` js
        const cookieParser=require('cookie-parser');
    ```
- 在路由之前设置cookie模块

    ``` js
        app.use(cookieParser());
    ```


## 设置cookies基本用法

``` js

    //设置cookie过期时间是1小时
    res.cookie('userid', '徐大腿', { expires: new Date(Date.now() + 360000 * 10 ), httpOnly: true });

```

## 读取cookies基本用法

``` js

    //读取cookie
    console.log('取得的cookie:'+req.cookies.userid)

```