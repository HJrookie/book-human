<template>
  <div class="sidebar-header-bar">
    <button 
      class="sidebar-collapse-btn" 
      @click="toggleSidebar" 
      :title="`收起侧栏 (${isMac ? '⌘B' : 'Ctrl+B'})`"
      aria-label="收起侧栏"
    >
      <div class="btn-left">
        <svg class="btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <path d="M14 9l-3 3 3 3"></path>
        </svg>
        <span class="btn-text">收起目录</span>
      </div>
      <kbd class="btn-kbd">{{ isMac ? '⌘B' : 'Ctrl+B' }}</kbd>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSidebarCollapse } from '../composables/useSidebarCollapse'

const { isMac, toggleSidebar } = useSidebarCollapse()
</script>

<style scoped>
.sidebar-header-bar {
  display: block;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar-collapse-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap !important;
  user-select: none;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.sidebar-collapse-btn:hover {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.sidebar-collapse-btn:active {
  transform: scale(0.98);
}

.btn-left {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap !important;
  flex-shrink: 0;
}

.btn-icon {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
  transition: transform 0.2s ease;
}

.sidebar-collapse-btn:hover .btn-icon {
  transform: translateX(-2px);
}

.btn-text {
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap !important;
  letter-spacing: 0.2px;
  line-height: 1;
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
  padding: 1px 5px;
  line-height: 14px;
  white-space: nowrap !important;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.sidebar-collapse-btn:hover .btn-kbd {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-soft);
}

@media (max-width: 959px) {
  .sidebar-header-bar {
    display: none;
  }
}
</style>
