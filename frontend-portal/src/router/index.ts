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

// 滚动位置持久化：刷新或从其他页面返回时，恢复上次浏览的位置
const SCROLL_STORAGE_PREFIX = 'portal-scroll:'

interface StoredScrollPosition {
  left: number
  top: number
}

function readStoredPosition(path: string): StoredScrollPosition | null {
  try {
    const raw = sessionStorage.getItem(SCROLL_STORAGE_PREFIX + path)
    return raw ? (JSON.parse(raw) as StoredScrollPosition) : null
  } catch {
    return null
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // 浏览器前进/后退：优先使用本次会话中浏览器记录的位置
    if (savedPosition) {
      return savedPosition
    }
    // 刷新或从其他页面再次进入该路由：恢复上次离开时的位置
    const stored = readStoredPosition(to.fullPath)
    if (stored) {
      return new Promise((resolve) => {
        if (document.readyState === 'complete') {
          // 站内返回：等页面切换过渡结束、内容渲染完成后再恢复
          setTimeout(() => resolve(stored), 300)
          return
        }
        // 刷新场景：等图片等资源加载完成再恢复，避免布局变化导致位置偏移
        let resolved = false
        const finish = () => {
          if (resolved) return
          resolved = true
          resolve(stored)
        }
        window.addEventListener('load', finish, { once: true })
        setTimeout(finish, 3000) // 兜底：资源加载异常时也能恢复
      })
    }
    return { top: 0 }
  }
})

// 由本站逻辑统一接管滚动恢复，避免浏览器默认恢复行为与之冲突
window.history.scrollRestoration = 'manual'

// 持续记录当前路由的滚动位置（requestAnimationFrame 节流）
let scrollTicking = false
window.addEventListener('scroll', () => {
  if (scrollTicking) return
  scrollTicking = true
  requestAnimationFrame(() => {
    const position: StoredScrollPosition = { left: window.scrollX, top: window.scrollY }
    sessionStorage.setItem(
      SCROLL_STORAGE_PREFIX + router.currentRoute.value.fullPath,
      JSON.stringify(position)
    )
    scrollTicking = false
  })
}, { passive: true })

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  document.title = title ? `${title} - 门户网站` : '门户网站'
  next()
})

export default router
