import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: { title: '关于我们' }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/index.vue'),
    meta: { title: '新闻中心' }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('@/views/news/detail.vue'),
    meta: { title: '新闻详情' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/products/index.vue'),
    meta: { title: '产品服务' }
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('@/views/cases/index.vue'),
    meta: { title: '服务案例' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/contact/index.vue'),
    meta: { title: '联系我们' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '页面未找到' }
  }
]

// 由应用接管滚动恢复，避免浏览器默认恢复与 SPA 恢复逻辑互相干扰
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const SCROLL_STORAGE_PREFIX = 'portal-scroll:'

function saveScrollPosition(path: string, top: number) {
  try {
    window.sessionStorage.setItem(SCROLL_STORAGE_PREFIX + path, String(top))
  } catch {
    // sessionStorage 不可用时静默忽略
  }
}

function readScrollPosition(path: string): number | null {
  try {
    const value = window.sessionStorage.getItem(SCROLL_STORAGE_PREFIX + path)
    if (value === null) return null
    const top = Number(value)
    return Number.isFinite(top) ? top : null
  } catch {
    return null
  }
}

// 刷新后首次导航若恢复了滚动位置，等待页面资源加载完成后校正一次
let pendingInitialRestore = false

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 浏览器前进/后退时优先使用历史记录中的位置
    if (savedPosition) {
      return savedPosition
    }
    const restore = () => {
      const savedTop = readScrollPosition(to.fullPath)
      return savedTop !== null && savedTop > 0 ? { top: savedTop } : { top: 0 }
    }
    if (!from.name) {
      // 首次进入（含刷新）：无页面过渡动画，直接恢复
      const savedTop = readScrollPosition(to.fullPath)
      if (savedTop !== null && savedTop > 0) {
        pendingInitialRestore = true
      }
      return restore()
    }
    // 站内导航：等待页面过渡动画（0.2s）结束、新页面渲染完成后再恢复
    return new Promise((resolve) => {
      setTimeout(() => resolve(restore()), 250)
    })
  }
})

router.beforeEach((to, from, next) => {
  // 离开页面前记录滚动位置，便于返回时恢复
  if (from.name) {
    saveScrollPosition(from.fullPath, window.scrollY)
  }
  const title = to.meta.title as string
  document.title = title ? `${title} - 门户网站` : '门户网站'
  next()
})

// 刷新或关闭页面前记录当前页面的滚动位置
window.addEventListener('pagehide', () => {
  saveScrollPosition(router.currentRoute.value.fullPath, window.scrollY)
})

// 刷新后图片等异步资源可能撑高页面导致恢复位置偏差，待资源就绪后校正一次
window.addEventListener('load', () => {
  if (!pendingInitialRestore) return
  pendingInitialRestore = false
  const savedTop = readScrollPosition(router.currentRoute.value.fullPath)
  if (savedTop !== null && savedTop > 0 && Math.abs(window.scrollY - savedTop) > 50) {
    window.scrollTo({ top: savedTop })
  }
})

export default router
