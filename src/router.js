import Vue from 'vue'
import VueRouter from 'vue-router'
import Test1 from '@/components/Test1.vue'
import Test2 from '@/components/Test2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test1',
    name: 'test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'test2',
    component: Test2
  },
]

const router = new VueRouter({
  routes
})

export default router