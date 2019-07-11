import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/views/Frame'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: Frame,
        children: [
            {
                path: '',
                name: 'Home',
            }
        ]
    }]
})

export default router