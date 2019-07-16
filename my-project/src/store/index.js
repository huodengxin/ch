import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from "./modules/home"
import draw from "./modules/draw"
import car from "./modules/car"
import quotation from "./modules/quotation"


export default new Vuex.Store({
    modules:{
       home,
       draw,
       car,
       quotation
    },
    state:{
       
    },
    mutations:{
       
    }
})
