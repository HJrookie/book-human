<template>
  <Teleport to=".VPNavBar .title" v-if="isMounted && hasSidebar">
    <Transition name="fade-expand-btn">
      <button 
        v-if="isCollapsed" 
        class="nav-sidebar-expand-btn"
        type="button"
        @click.stop.prevent="toggleSidebar"
        :title="`展开侧栏 (${isMac ? '⌘B' : 'Ctrl+B'})`"
        aria-label="展开侧栏"
      >
        <svg class="btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <path d="M13 9l3 3-3 3"></path>
        </svg>
        <span class="btn-text">展开目录</span>
        <kbd class="btn-kbd">{{ isMac ? '⌘B' : 'Ctrl+B' }}</kbd>
      </button>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSidebar } from 'vitepress/theme'
import { useSidebarCollapse } from '../composables/useSidebarCollapse'

const isMounted = ref(false)
const { hasSidebar } = useSidebar()
const { isCollapsed, isMac, toggleSidebar } = useSidebarCollapse()

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
.nav-sidebar-expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  height: 28px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap !important;
  user-select: none;
  pointer-events: auto !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  line-height: 1;
}

.nav-sidebar-expand-btn:hover {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  transform: translateY(-0.5px);
}

.nav-sidebar-expand-btn:active {
  transform: scale(0.96);
}

.btn-icon {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
  transition: transform 0.2s ease;
}

.nav-sidebar-expand-btn:hover .btn-icon {
  transform: translateX(1.5px);
}

.btn-text {
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap !important;
  letter-spacing: 0.2px;
}

.btn-kbd {
  flex-shrink: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 1px 4px;
  line-height: 12px;
  white-space: nowrap !important;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.nav-sidebar-expand-btn:hover .btn-kbd {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-soft);
}

/* 进出过渡动画 */
.fade-expand-btn-enter-active,
.fade-expand-btn-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-expand-btn-enter-from,
.fade-expand-btn-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 959px) {
  .nav-sidebar-expand-btn {
    display: none;
  }
}
</style>
