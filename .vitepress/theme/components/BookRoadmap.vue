<template>
  <div class="book-roadmap-container">
    <div class="roadmap-header">
      <span class="roadmap-badge">从物理肉身到终极觉醒的进化闭环</span>
      <h3 class="roadmap-title">全书二十章核心演进脉络</h3>
      <p class="roadmap-subtitle">点击任意章节卡片可直接跳转对应正文</p>
    </div>

    <div class="roadmap-timeline">
      <div 
        v-for="(phase, pIdx) in phases" 
        :key="phase.name" 
        class="phase-section"
        :class="phase.theme"
      >
        <div class="phase-meta">
          <span class="phase-pill">{{ phase.tag }}</span>
          <span class="phase-caption">{{ phase.name }}</span>
        </div>

        <div class="phase-cards">
          <template v-for="(node, nIdx) in phase.nodes" :key="node.part">
            <a :href="node.link" class="flow-card">
              <div class="card-step-badge">{{ node.step }}</div>
              <div class="card-info">
                <div class="card-part-title">{{ node.part }}</div>
                <div class="card-part-desc">{{ node.desc }}</div>
              </div>
              <div class="card-action-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
            <div v-if="nIdx < phase.nodes.length - 1" class="flow-link-arrow">
              <span class="arrow-down">↓</span>
            </div>
          </template>
        </div>

        <div v-if="pIdx < phases.length - 1" class="phase-step-divider">
          <div class="divider-line"></div>
          <span class="divider-text">进化跃迁</span>
          <div class="divider-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const phases = [
  {
    tag: '阶段一 · 修身明心',
    name: '基础设施与底层出厂设置',
    theme: 'theme-foundation',
    nodes: [
      {
        step: '第1~2章',
        part: '修身（身心基石）',
        desc: '铸造坚不可摧的身心系统，睡眠节律/气血金刚功/西方量化自我筑基',
        link: '/content/01_第一篇_身心基石/1.1_生命的基础节律与睡眠的真相'
      },
      {
        step: '第3~4章',
        part: '明心（底层系统）',
        desc: '认清先天性格出厂设置与真实禀赋，从社会苦工走向心流玩耍',
        link: '/content/02_第二篇_底层系统/3.1_接纳出厂设置_内向外向与高敏感'
      }
    ]
  },
  {
    tag: '阶段二 · 入世历劫',
    name: '社会大熔炉与反身性重塑',
    theme: 'theme-society',
    nodes: [
      {
        step: '第5~7章',
        part: '入世（系统摩擦）',
        desc: '个体禀赋与复杂丛林社会的摩擦，建立个人API缓冲带与生态位',
        link: '/content/03_第三篇_碰撞映射/5.1_人类社会的底层运行逻辑与系统摩擦'
      },
      {
        step: '第8~10章',
        part: '历劫（重塑进化）',
        desc: '时间的无情冲刷与命运暴击，深渊十字路口处的黑化与高级向善',
        link: '/content/04_第四篇_蜕变分化/8.1_十年熔炉_时间的冲刷与性格演化'
      }
    ]
  },
  {
    tag: '阶段三 · 悟道天问',
    name: '向内探寻与仰望星空',
    theme: 'theme-spirit',
    nodes: [
      {
        step: '第11~13章',
        part: '悟道（终极追问）',
        desc: '巨流冲刷与世俗顶峰的虚无觉醒，认领地球课题，三大究竟追问',
        link: '/content/05_第五篇_终极追问/11.1_巨流冲刷与时代重量_微观到宏观的全景震撼'
      },
      {
        step: '第14~16章',
        part: '天问（仰望星空）',
        desc: '直面宇宙大爆炸与物理法则微调，万象涌现奇迹与孩童之叹',
        link: '/content/06_第六篇_存在天问/14.1_奇点暴胀与时间开端_为何存在而非空无'
      }
    ]
  },
  {
    tag: '阶段四 · 归一破执',
    name: '万象归一与言语道断',
    theme: 'theme-ultimate',
    nodes: [
      {
        step: '第17~18章',
        part: '归一（万法唯心）',
        desc: '世间无我亦无他，消融分别心，参透全息意识共鸣与究竟慈悲',
        link: '/content/07_第七篇_归一无我/17.1_世间无我亦无他_我即是他'
      },
      {
        step: '第19~20章',
        part: '破执（言语道断）',
        desc: '指月之指非明月，彻底烧掉全书地图与法执，终极沉默归于本来',
        link: '/content/08_第八篇_破执不可说/19.1_语言与文字的终极局限_指月之指非明月'
      }
    ]
  }
]
</script>

<style scoped>
.book-roadmap-container {
  margin: 28px 0 36px;
  padding: 28px 24px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.roadmap-header {
  text-align: center;
  margin-bottom: 28px;
}

.roadmap-badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
}

.roadmap-title {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 22px !important;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border: none !important;
}

.roadmap-subtitle {
  margin: 6px 0 0 !important;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.roadmap-timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 720px;
  margin: 0 auto;
}

.phase-section {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  transition: all 0.25s ease;
}

.phase-section:hover {
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

.phase-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.phase-pill {
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 6px;
}

.theme-foundation .phase-pill {
  background: rgba(224, 122, 95, 0.15);
  color: #c05638;
}

.theme-society .phase-pill {
  background: rgba(61, 133, 198, 0.15);
  color: #2b6cb0;
}

.theme-spirit .phase-pill {
  background: rgba(142, 124, 195, 0.15);
  color: #6b46c1;
}

.theme-ultimate .phase-pill {
  background: rgba(45, 55, 72, 0.15);
  color: var(--vp-c-text-1);
}

.dark .theme-foundation .phase-pill {
  background: rgba(224, 122, 95, 0.25);
  color: #f6ad55;
}

.dark .theme-society .phase-pill {
  background: rgba(61, 133, 198, 0.25);
  color: #63b3ed;
}

.dark .theme-spirit .phase-pill {
  background: rgba(142, 124, 195, 0.25);
  color: #b794f4;
}

.dark .theme-ultimate .phase-pill {
  background: rgba(226, 232, 240, 0.15);
  color: #e2e8f0;
}

.phase-caption {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.phase-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flow-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.flow-card:hover {
  transform: translateX(4px);
  background: var(--vp-c-default-soft);
  border-color: var(--vp-c-brand-1);
}

.card-step-badge {
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 4px 8px;
  border-radius: 6px;
}

.card-info {
  flex-grow: 1;
}

.card-part-title {
  font-size: 14.5px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 2px;
  transition: color 0.2s;
}

.flow-card:hover .card-part-title {
  color: var(--vp-c-brand-1);
}

.card-part-desc {
  font-size: 12.5px;
  color: var(--vp-c-text-2);
  line-height: 18px;
}

.card-action-icon {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  transition: all 0.2s;
}

.flow-card:hover .card-action-icon {
  color: var(--vp-c-brand-1);
  transform: translateX(3px);
}

.flow-link-arrow {
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 14px;
  line-height: 1;
  margin: -4px 0;
}

.phase-step-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
}

.divider-line {
  flex-grow: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.divider-text {
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .book-roadmap-container {
    padding: 18px 12px;
  }
  .flow-card {
    padding: 10px 10px;
    gap: 10px;
  }
  .card-part-title {
    font-size: 13.5px;
  }
  .card-part-desc {
    font-size: 11.5px;
  }
}
</style>
