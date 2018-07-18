## 设置远程CDN地址

- package.json中homepage:'你的CDN节点'

- 同时修改代码 config/paths.js

``` js

  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');

```

修改为：

``` js

  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).href : '/');

```

- 执行npm run build即可