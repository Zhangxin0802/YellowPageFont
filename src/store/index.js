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
        }
    },
    mutations: {
        change(state, list) {
            // state.value.abbr = list.abbreviation;
            // state.value.cnName = list.cnName;
            // state.value.enName = list.enName;
            // state.value.content = list.content;
            // state.value.literatureList = list.literatureList;
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
