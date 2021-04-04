import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        packages: [],
        currentPackage: {},
        showModal: false
    },
    mutations: {
        SET_PACKAGES(state, packages) {
            state.packages = packages
        },
        SET_CURRENT_PACKAGE(state, currentPackage) {
            state.currentPackage = currentPackage
        },
        TOGLE_MODAL(state){
            state.showModal = !state.showModal
        }
    },
    actions: {
        getPackages({commit}, payload) {
            axios.get(`http://registry.npmjs.com/-/v1/search?text=${payload}&size=100&quality=1.0&maintenance=0.0&popularity=0.0`)
                .then(response => {
                    commit('SET_PACKAGES', response.data.objects)
                })
        },
        showCurrentPackage({commit},currentPackage){
            commit('SET_CURRENT_PACKAGE',currentPackage)
            commit('TOGLE_MODAL')
        }
    },
    getters: {
        GET_PACKAGES(state) {
            return state.packages
        },
        GET_CURRENT_PACKAGE(state){
            return state.currentPackage
        },
        MODAL_SHOW(state){
            return state.showModal
        }
    },
    modules: {},
})
