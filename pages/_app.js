import App from "next/app";
import React from "react";
import { initializeStore, Store } from "../stores";
import { Provider } from "mobx-react";
import { ConfigProvider } from "antd";
// 其实时间日期也要处理 中-英文
// https://ant.design/docs/react/getting-started-cn
import zhCN from 'antd/lib/locale/zh_CN';
import "antd/dist/antd.css";
import "/styles/home.scss";
class MyApp extends App {
	mobxStore = undefined;

	// Fetching serialized(JSON) store state
	static async getInitialProps(appContext) {
		const ctx = appContext.ctx;
		// 见代码注释1
		ctx.mobxStore = initializeStore();
		const appProps = await App.getInitialProps(appContext);
		return {
			...appProps,
			initialMobxState: ctx.mobxStore,
		};
	}

	constructor(props) {
		super(props);
		// 见代码注释2
		const isServer = typeof window === "undefined";
		this.mobxStore = isServer
			? props.initialMobxState
			: initializeStore(props.initialMobxState);
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			// 见代码注释3
			<ConfigProvider locale={zhCN}>
				<Provider {...this.mobxStore}>
					<Component {...pageProps} />
				</Provider>
			</ConfigProvider>
		);
	}
}

// _app.js 中不支持 ： 目前，App 不支持 Next.js 的 数据获取方法，例如 getStaticProps 或 getServerSideProps。
// export async function getServerSideProps(context) {

// }

export default MyApp;
