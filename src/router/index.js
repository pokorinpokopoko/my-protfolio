import { createRouter, createWebHistory } from 'vue-router'
import TokushoPage from '../components/TokushoPage.vue' // ページコンポーネント
import HomePage from '../components/HomePage.vue' // 仮にApp.vueをトップページとして

const routes = [
  { path: '/', component: HomePage },
  { path: '/tokusho', component: TokushoPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router