import { ref } from 'vue'

const isCollapsed = ref(false)

const checkIsMac = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  const ua = (navigator as any).userAgentData?.platform || navigator.userAgent || navigator.platform || ''
  return /mac/i.test(ua)
}

const isMac = ref(checkIsMac())
const STORAGE_KEY = 'book_sidebar_collapsed'

let isInitialized = false

export function useSidebarCollapse() {
  const applyState = (collapsed: boolean) => {
    if (typeof document === 'undefined') return
    if (collapsed) {
      document.documentElement.classList.add('sidebar-collapsed')
    } else {
      document.documentElement.classList.remove('sidebar-collapsed')
    }
  }

  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
    applyState(isCollapsed.value)
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, String(isCollapsed.value))
      } catch (e) {}
    }
  }

  const setSidebar = (collapsed: boolean) => {
    isCollapsed.value = collapsed
    applyState(collapsed)
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, String(collapsed))
      } catch (e) {}
    }
  }

  const initSidebarCollapse = () => {
    if (typeof window === 'undefined' || isInitialized) return
    isInitialized = true

    // Detect Mac platform
    if (typeof navigator !== 'undefined') {
      isMac.value = /macintosh|mac os x/i.test(navigator.userAgent)
    }

    // Read saved preference
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'true') {
        isCollapsed.value = true
        applyState(true)
      }
    } catch (e) {}

    // Global keyboard shortcuts: Cmd+B / Ctrl+B
    const handleKeydown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeydown)
  }

  return {
    isCollapsed,
    isMac,
    toggleSidebar,
    setSidebar,
    initSidebarCollapse
  }
}
