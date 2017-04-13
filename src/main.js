// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import store from './store/store'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'

import Login from './components/Login'
import Hello from './components/Hello'
import Home from './components/Home'
import Teach from './components/Teach'
import Teacher from './components/Teacher'
import Learn from './components/Learn'
import Signup from './components/Signup'
import Reserve from './components/Reserve'

Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/app', component: App },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  {
    path: '/',
    component: Home,
    children: [
      { path: 'teach', component: Teach },
      { path: 'teacher', component: Teacher },
      {
        path: 'learn',
        component: Learn
      },
      {
        path: 'reserve', component: Reserve
      }
    ],
    redirect: 'teach'
  },
  {
    path: '/hello/:id',
    component: Hello,
    children: [
      { path: '', component: Bar },
      { path: 'bar', component: Foo }
    ]
  },
  { path: '/bar', component: Bar }
  // { path: '/', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store
}).$mount('#app')
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
