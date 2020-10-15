import Vue from "vue";
import axios from 'axios';
import store from "../store";


//请求拦截
// 请求拦截,将所有通过axios发送的请求拦截下来。拦截下来以后，可以在此处统一对AXIOS的配置进行管理
axios.interceptors.request.use((config)=>{
    store.commit("CHANGE_IS_LOADING",true);
    // console.log(config);
    // config.url = "www.baidu.com";
    config.url = '/api'+config.url // config.url -->/api/login token
    return config;//返回配置信息,不返回config请求无法执行，返回的配置信息是最终请求的信息
});
//响应拦截
axios.interceptors.response.use((res)=>{
    store.commit("CHANGE_IS_LOADING",false);
    // 返回值即是请求最终得到的内容。
    return res.data;
});


Vue.prototype.$axios=axios;
// window.axios=axios;  ×
export default axios;