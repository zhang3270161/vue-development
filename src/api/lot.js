import request from '@/utils/request'

let post = (url,data) => request({url,method: 'post', data})
let get = (url,data) => request({url,method: 'get', data})


export const getLotdialog = (param) => { return post('/loginService/getLotdialog',param)} // 登录
