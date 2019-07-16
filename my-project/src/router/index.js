import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>import('../views/Home.vue')
const Car = () =>import('../views/Car.vue')
const Quotation = () =>import('../views/Quotation.vue')


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/quotation',
      name: 'quotation',
      component: Quotation
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path:'/car/:id',
      name:'car',
      component:Car
    }
  ]
})
