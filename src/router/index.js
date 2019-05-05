import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Hello from '@/components/HelloWorld'
import Showcase from '@/components/Showcase'
import Theleague from '@/components/Theleague'
import Hackathon from '@/components/Hackathon'
import Curriculumn from '@/components/Curriculumn'
import Essay from '@/components/Essay'
import Paper from '@/components/Paper'
import Aboutus from '@/components/Aboutus'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
		{
		    path: '/',
		    name: 'Showcase',
		    component: Showcase
		},
		{
		    path: '/theleague',
		    name: 'Theleague',
		    component: Theleague,
		},
		{
		    path: '/hackathon',
		    name: 'Hackathon',
		    component: Hackathon,
		},
		{
		    path: '/gametheory',
		    name: 'Curriculumn',
		    component: Curriculumn
		},
		{
		    path: '/essay',
		    name: 'Essay',
		    component: Essay
		},
		{
		    path: '/paper',
		    name: 'Paper',
		    component: Paper
		},
		{
		    path: '/aboutus',
		    name: 'Aboutus',
		    component: Aboutus
		}
    ],
    linkActiveClass: 'is-active'
})
