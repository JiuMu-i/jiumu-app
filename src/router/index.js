import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

Vue.use(Router)

const register = () => import('../components/login/RegisterComponent')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login',
        index: 0
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: register,
      meta: {
        title: 'Register',
        index: 1
      }
    }
  ]
})
