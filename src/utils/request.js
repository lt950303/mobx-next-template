import axios from "axios";
import { getCookie } from "./cookie";
// import

const request = axios.create({
  // 直接根据业务写
	// baseURL: "http://test-api.com",
	baseURL: "http://services.wow-trend.com",
});

// 要暴露一个方法， 整个方法，注入 mobxStroe

export function initalRequest({ store }) {
	// 请求拦截器
	// 因为这里要使用vuex 中的数据，所以就得以插件的形式，得到 store
	// 其实个人认为仅仅是获取 token， 不做成插件也行， 直接获取cookie应该也可以
	request.interceptors.request.use(
		function (config) {
      const { userInfo, userToken } = store.UserStore;
      // userInfo &&
			if ( userToken) {
				config.headers.Authorization = `${userToken}`;
			}
			return config;
		},
		function (error) {
			// 请求出错（此时 请求还没有发出）
			// Do something with request error
			return Promise.reject(error);
		}
	);
}

export default request;
