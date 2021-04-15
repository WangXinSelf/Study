import { get, post } from './http'
import base from './baseUrl'
// const base = {
//   domainUrl: window.location.origin
// }
const login = p => post(base.domainUrl + '/login', p) //登录注册

export default {
  login
}
