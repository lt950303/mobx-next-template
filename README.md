# mobx + nextJS 项目模板
- react 17
- mobx 6 （不推荐使用装饰器语法）
- sass 支持
- antd 按需加载
- 不同环境变量配置在 config文件夹中

## todos
- eslint / StyleLint / Prettier
- husky 与 lint-staged
- commitlint
- Jest 单元测试


## 一些知识点： 
1. 项目有 getServerSideProps 方法就无法做静态导出

2. 目前 _app.js 不支持 Next.js 的 数据获取方法，例如 getStaticProps 或 getServerSideProps。可以使用 getInitialProps

3. mobx6版本以后，要是得数据响应式变化，得在构造函数加： makeObservable(this) 方法

4. enableStaticRendering 方法的作用
- 由于Next.js首屏渲染是在服务端执行的，MobX所创建的状态是可观察的对象，使用MobX创建的可观察对象会在内存中使用listener来监听对象的变化，但实际上在服务端是没有必要监听变化的，因为首屏渲染完成得到html文件后，后续的工作都由客户端接手，所以如果在服务端的对象是可观察的，将有可能造成内存泄漏，所以我们使用useStaticRendering方法，当该文件在服务端执行时，让MobX创建静态的普通js对象即可

5. next.js项目中如何配置不同环境的变量
> https://www.bootschool.net/article/5c5d5a53f60a310b0e6f3411/how-to-config-environment-in-next.js-project

6. next中不能再页面中直接引入 非模块化css

### 值得参考的文章
- 搭建 Next.js + TS + Antd + Redux + Storybook 企业级项目脚手架 https://segmentfault.com/a/1190000038644942
- Next.js部署web同构直出应用全指南（MobX + TypeScript） https://juejin.cn/post/6844903990396715022
- 用mobx构建大型项目的最佳实践 https://juejin.cn/post/6844903775623184398