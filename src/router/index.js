import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import learnForm from '@/components/page/learnForm'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(Router)
Vue.use(VXETable)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/',
      name: ' learnForm',
      component:  learnForm
    }
   
  ]
})
