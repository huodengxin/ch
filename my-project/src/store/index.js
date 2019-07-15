import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from "./modules/home"
import draw from "./modules/draw"

export default new Vuex.Store({
    modules:{
       home,
       draw
    },
    state:{
       
    },
    mutations:{
       
    }
})
