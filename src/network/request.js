import axios from 'axios'

export function request(config) {
	//创建局部的axios实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8080',
		timeout: 5000
	});

	// axios拦截器
	// 1.请求拦截
	instance.interceptors.request.use(config => {
		// 请求成功
		// console.log(config);
		// 必须返回数据，否则会请求失败
		return config
	}, err => {
		// 请求失败
		// console.log(err);
	})
	// 2.响应拦截
	instance.interceptors.response.use(res => {
		// console.log(res);
		return res.data;
	}, err => {
		console.log(err);
	})

  // 发送真正的网络请求
  // 默认的返回一个promise
  return instance(config)
}