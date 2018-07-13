## create-react-app使用mobX不能使用@装饰器


- 非react
``` js
npm install --save-dev babel-plugin-transform-decorators-legacy
```

- 针对react
``` js
npm install babel-preset-stage-2 --save-dev
npm install babel-preset-react-native-stage-0 --save-dev
npm install --save mobx mobx-react

```

- 根目录下创建.babelrc

``` js

// react
{
  "presets": ["react-native-stage-0/decorator-support"]
}

// 非react
{
  "presets": [
    "es2015",
    "stage-1"
  ],
  "plugins": ["transform-decorators-legacy"]
}

```