import {request} from './request';

// home.vue 面向home.js文件开发
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}