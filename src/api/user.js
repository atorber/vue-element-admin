import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function get_qr(data) {
  return request({
    url: '/token/123456',
    method: 'get',
    data
  })
}

export function get_qr_token(data) {
  return request({
    url: '/qrcode/123456',
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
