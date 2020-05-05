import request from '@/utils/request'

let post = (url,data) => request({url,method: 'post', data})
let get = (url,data) => request({url,method: 'get', data})

export const login = (param) => { return post('/loginService/login',param)} // 登录
export const getFacility = (param) => { return get('/loginService/getFacility',param)} // 登录
export const logout = (param) => { return post('/loginService/logout',param)} // 登录
export const getLotdialog = (param) => { return post('/loginService/logout',param)} // 登录


/* export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}*/


