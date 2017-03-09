import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Type from 'components/Type'
import Push from 'components/Push'
import Roomlist from 'components/Roomlist'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/type', name: 'Type', component: Type },
    { path: '/push', name: 'Push', component: Push },
    { path: '/roomlist/:roomlistid', name: 'Roomlist', component: Roomlist },
    { path: '*', name: '*', component: Home }
  ]
})