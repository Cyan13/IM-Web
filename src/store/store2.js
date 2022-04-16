import Vue from 'vue'
import Vuex from 'vuex'
import { getDate } from '@/utils/date'

Vue.use(Vuex)

const state = {
    consultantID: '',
    helperID: '',
    customerTrueName: '',
    consultantTrueName: '',
    helperTrueName: '',
    date: getDate(new Date()),
    startTime: '',
    endTime: '',
    historyURL: 'url'
}

const getters = {
    // getUserName(state) {
    //     return state.username
    // }
}

const mutations = {
    setStartTime(state, value) {
        state.startTime=value
    }
    // setUserID(state, value) {
    //     state.userid=value
    // },
    // setSchedule(state, value) {
    //     state.schedule=value
    // }
}
const actions = {
    // getRole({ commit, state }) {
    //   return new Promise(resolve => {
    //     if (state.role.length) {
    //       resolve(state.role);
    //     } else {
    //       getRole().then(res => {
    //         const role = res.data.map(item => {
    //           return { value: item.p_code, label: item.category };
    //         });
    //         commit('setRole', role);
    //         resolve(role);
    //       });
    //     }
    //   });
    // }
}

//vuex实例输出
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
