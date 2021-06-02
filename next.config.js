const config = require("./config");

// 如果想扩展环境变量，可以用 cross-env 包
const DEPLOY_ENV = process.env.DEPLOY_ENV || "dev";

module.exports = {
	future: {
		webpack5: true,
	},
  serverRuntimeConfig: {
    // 这里的配置项只能在服务端获取到，在浏览器端是获取不到的
    secret: "secret",
  },
  // 这里的配置既可以服务端获取到，也可以在浏览器端获取到
  publicRuntimeConfig: config[DEPLOY_ENV],

  plugins: [
    [
      'import',
      {
        // antd 的按需加载
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: 'index.css',  // `style: true` 会加载 less 文件
      },
    ],
  ],
};
