import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BookRoadmap from './components/BookRoadmap.vue'
import SidebarNavHeader from './components/SidebarNavHeader.vue'
import SidebarFloatingToggle from './components/SidebarFloatingToggle.vue'
import { useSidebarCollapse } from './composables/useSidebarCollapse'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

function initMermaidClient() {
  if (typeof window === 'undefined') return { renderMermaid: () => {} }

  const cdns = [
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.0/mermaid.min.js',
    'https://cdn.jsdelivr.net/npm/mermaid@10.9.0/dist/mermaid.min.js',
    'https://unpkg.com/mermaid@10.9.0/dist/mermaid.min.js'
  ]

  let mermaidPromise: Promise<any> | null = null

  const loadMermaid = () => {
    if ((window as any).mermaid) return Promise.resolve((window as any).mermaid)
    if (mermaidPromise) return mermaidPromise

    mermaidPromise = new Promise((resolve) => {
      let idx = 0
      const tryNext = () => {
        if (idx >= cdns.length) {
          console.warn('[Mermaid] All CDNs failed to load.')
          resolve(null)
          return
        }
        const s = document.createElement('script')
        s.src = cdns[idx]
        s.async = true
        s.onload = () => {
          if ((window as any).mermaid) {
            resolve((window as any).mermaid)
          } else {
            idx++
            tryNext()
          }
        }
        s.onerror = () => {
          idx++
          tryNext()
        }
        document.head.appendChild(s)
      }
      tryNext()
    })
    return mermaidPromise
  }

  const renderMermaid = async () => {
    await nextTick()
    const containers = document.querySelectorAll('div.language-mermaid')
    if (!containers.length) return

    const mermaid = await loadMermaid()
    if (!mermaid) return

    const isDark = document.documentElement.classList.contains('dark')
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'inherit'
    })

    containers.forEach(async (container, i) => {
      let code = container.getAttribute('data-raw-code')
      if (!code) {
        const codeEl = container.querySelector('pre code') || container.querySelector('pre')
        if (!codeEl) return
        code = (codeEl.textContent || '').trim()
        container.setAttribute('data-raw-code', code)
      }

      if (!code) return

      try {
        const id = `mermaid-render-${Date.now()}-${i}`
        const { svg } = await mermaid.render(id, code)
        container.innerHTML = `<div class="mermaid-svg-wrapper">${svg}</div>`
        container.classList.add('mermaid-rendered')
      } catch (err) {
        console.error('[Mermaid render error]', err)
      }
    })
  }

  // Observe dark class changes on <html>
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === 'class') {
        renderMermaid()
        break
      }
    }
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  return { renderMermaid }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    const route = useRoute()
    const { renderMermaid } = initMermaidClient()
    const { initSidebarCollapse } = useSidebarCollapse()

    onMounted(() => {
      renderMermaid()
      initSidebarCollapse()
    })

    watch(
      () => route.path,
      () => {
        setTimeout(renderMermaid, 120)
      }
    )

    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SidebarNavHeader),
      'layout-bottom': () => h(SidebarFloatingToggle)
    })
  },
  enhanceApp({ app }) {
    app.component('BookRoadmap', BookRoadmap)
  }
}
