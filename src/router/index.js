import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/event'
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
