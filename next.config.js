const config = require("./config");
const withPlugins = require("next-compose-plugins");
// const withSass = require("@zeit/next-sass");
// 如果想扩展环境变量，可以用 cross-env 包
const DEPLOY_ENV = process.env.DEPLOY_ENV || "dev";

const resourcesLoader = {
	loader: "sass-resources-loader",
	options: {
		resources: ["./src/styles/variables.scss"],
	},
};

const customConfig = {
	future: {
		webpack5: true,
	},
	serverRuntimeConfig: {
		// 这里的配置项只能在服务端获取到，在浏览器端是获取不到的
		secret: "secret",
	},
	// 这里的配置既可以服务端获取到，也可以在浏览器端获取到
	publicRuntimeConfig: config[DEPLOY_ENV],

	webpack: (config, options) => {
		// sass 全局变量处理
		config.module.rules[2].oneOf.forEach((rule) => {
			if (
				rule &&
				rule.test &&
				rule.test.source &&
				rule.test.source.includes("(scss|sass)")
			) {
				rule.use.push(resourcesLoader);
			}
		});
		return config;
	},

	plugins: [
		[
			"import",
			{
				// antd 的按需加载
				libraryName: "antd",
				libraryDirectory: "lib",
				style: "index.css", // `style: true` 会加载 less 文件
			},
		],
		"postcss-flexbugs-fixes",
		[
			"postcss-preset-env",
			{
				autoprefixer: {
					flexbox: "no-2009",
				},
				stage: 3,
				features: {
					"custom-properties": false,
				},
			},
		],
	],
};

module.exports = withPlugins([customConfig]);
