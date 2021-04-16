import { get, post } from './http'
import base from './baseUrl'
// const base = {
//   domainUrl: window.location.origin
// }
const login = p => post(base.domainUrl + '/login', p) //登录注册
const getSubject = p => post(base.domainUrl + '/getSubject',p)//获取所有课程
const getSubjectTitle = p => post(base.domainUrl + '/getSubjectTitle',p)//获取所有课程
const getCommentListBySubject = p => post(base.domainUrl + '/getCommentListBySubject',p)//获取评论列表
const joinSubject = p => post(base.domainUrl + '/joinSubject',p)//获取评论列表
const getSubjectVideo = p => post(base.domainUrl + '/getSubjectVideo',p)//获取获取视频
const addComment = p => post(base.domainUrl + '/addComment',p)//给课程添加评论
export default {
  login,getSubject,getSubjectTitle,getCommentListBySubject,
  joinSubject,getSubjectVideo,addComment
}
