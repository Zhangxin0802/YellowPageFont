import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// const store = new Vuex.Store({
//     state:{
//         name:'helloVuex'
//     }
// })
export default new Vuex.Store({
    state: {
        address: 'os.qiankun.su:7070',
        value: {
            abbr: '',
            cnName: '',
            enName: '',
            content: '',
            litList: '',
            literatureList: [
                {
                    author: {},
                    bookName: {},
                    url: {}
                }
            ]
        },
    },
    mutations: {
        change(state, list) {
            state.value = list;

            // console.log("success")
        },
    },
    getters: {
        getvalue: state => state.value
    },
    actions: {},
    modules: {}
})
