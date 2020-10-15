import axios from 'axios';
const state = {
    adminName:localStorage.adminName || null
};
const mutations = {
    CHANGE_USER_NAME(state,userName){
        state.adminName = localStorage.adminName = userName;
    },
    //退出登录
    OUT_LOGIN(state){
        localStorage.clear();
        state.adminName = null;
    }
};
const actions = {
    //实现登录
    async login({commit}, vm) {
        // console.log(vm);
        const data = await axios({
            url: '/login',
            method: 'post',
            data: vm.adminForm
        });
        // vm.isLoading = false;
        if(data.ok === 1){
            commit("CHANGE_USER_NAME",vm.adminForm.adminName);
        }else{
            vm.$message.error(data.msg);
        }
    }
}
export default {
    state,
    mutations,
    actions
}