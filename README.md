# Vue-cli3

## webpack配置

1. 概念: `vue.config.js` 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载

2. 意味着单独的webpack配置, 可在`vue.config.js`中进行配置

3. 参考: `https://cli.vuejs.org/zh/config/#vue-config-js`

## vue-cli3 移动端适配

1. 安装 `yarn add lib-flexible postcss-px2rem`
    1. exible会为页面根据屏幕自动添加`<meta name='viewport' >`标签，动态控制initial-scale，maximum-scale，minimum-scale等属性的值

    2.postcss-px2rem会将px转换为rem，rem单位用于适配不同宽度的屏幕，根据`<html>`标签的font-size值来计算出结果，1rem=html标签的font-size值

2. 在main.js中引入 `import 'lib-flexible'`

    1. 记得删除 `/public/index.html`下的`<meta name='viewport' >`标签

3. 在vue.config.js中配置(如上)

    ```js
      module.exports = {
        css: {
            loaderOptions: {
              css: {},
              postcss: {
                plugins: [
                  require('postcss-px2rem')({
                    remUnit: 37.5
                  })
                ]
              }
            }
        },
      }
    ```

4. 注意: emUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。那为什么你在这里写成了37.5呢？？？那我们后面专门来讲！之所以设为37.5，是为了引用像mint-ui这样的第三方UI框架，因为第三方框架没有兼容px2rem ，将remUnit的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原mint-ui的组件，否则会样式会有变化，例如按钮会变小。既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。

5. 重启项目即可

## vue-cli3热更新配置

1. 在`vue.config.js`中

    ```js
      chainWebpack: config => {
        // 修复HMR, 实现热更新
        config.resolve.symlinks(true);
      },
      css: {
        extract: process.env.NODE_ENV === 'production', // 是否使用css分离插件 ExtractTextPlugin
      }
    ```

