

## Nodesjs+Express搭建自定义服务器实现前后端分离
- 前端
    - 创建Express目录指向build目录作为静态路径即可 见server/server.js

    ``` js
        app.use('/',Express.static(path.join(__dirname,"..",'build')));
    ```

    - 设置API代理,凡是涉及到api开头的路由都会被转发到指定的服务器上，而前端只需要专注开发就可以了

    ``` js

        const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
        const proxy = httpProxy.createProxyServer({
            target:targetUrl
        });

        app.use((req,res)=>{
            console.log("req:"+req.path);  
            if(req.path.indexOf('api')>-1){
                console.log("req包含api："+req.path.indexOf('api'));
                proxy.web(req,res,{target:targetUrl});
            }else{
                res.writeHead(404);
                res.end(null);
            }
        });

    ```   
    


- 后端    
    - 在server/api目录下创建一个新的服务器用来出来前端的提交的请求，即目标代理地址

    ``` js

        app.use(bodyParser.json()); 
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(cookieParser());
        app.use(session({
            secret:'express_react_cookie',
            resave: true,
            saveUninitialized:true,
            cookie: {maxAge: 60 * 1000 * 30}//过期时间
        }));

        app.use('/api/user', require('./user'));

        app.listen(port, function (err) {
            if (err) {
                console.error('err:', err);
            } else {
                console.info(`===> api server is running at at ${config.apiHost}:${config.apiPort}`)
            }
        });

    ```
