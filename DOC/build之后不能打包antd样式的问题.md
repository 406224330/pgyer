## create-react-app不能build antd样式问题
- 打开node_module/react-scripts/config/webpack.config.dev.js 

- 修改`babelrc:false` 修改成`babelrc:true` 

``` js
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              // @remove-on-eject-begin
              babelrc: true,
              presets: [require.resolve('babel-preset-react-app')],
              // @remove-on-eject-end
              compact: true,
            },
          },

```

## babelrc文件保持原有的样子

``` js

{
    "plugins": [
      ["import", { libraryName: "antd", style: "css" }] 
    ]
}

```