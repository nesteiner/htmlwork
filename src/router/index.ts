import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/canvas',
		name: 'canvas',
		component: () => import('@/views/canvas.vue')
	},
	{
		path: '/css',
		name: 'css',
		component: () => import('@/views/css.vue')
	},
	{
	  path: '/jswork',
	  name: 'jswork',
	  component: () => import('@/views/jswork.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
