import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "人生探索手记",
  description: "从身心安顿到生活实践，在复杂多变的世界中寻找内在锚点，一份同行者的思考与生活札记。",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/content/01_第一篇_身心基石/1.1_生命的基础节律与睡眠的真相' },
      { text: '全书大纲', link: '/book_outline_draft' }
    ],

    sidebar: [
      {
        text: '全书概览',
        items: [
          { text: '全书大纲与架构图', link: '/book_outline_draft' }
        ]
      },
      {
        text: '第一章：身体健康（淬炼物理躯体）',
        collapsed: true,
        items: [
          { text: '1.1 生命的基础节律与睡眠的真相', link: '/content/01_第一篇_身心基石/1.1_生命的基础节律与睡眠的真相' },
          { text: '1.2 东方修身之道与金刚功', link: '/content/01_第一篇_身心基石/1.2_东方修身之道与金刚功' },
          { text: '1.3 西方强身之术与量化自我', link: '/content/01_第一篇_身心基石/1.3_西方强身之术与量化自我' }
        ]
      },
      {
        text: '第二章：心理与心灵健康（构建内在堡垒）',
        collapsed: true,
        items: [
          { text: '2.1 现代人的精神内耗与多巴胺劫持', link: '/content/01_第一篇_身心基石/2.1_现代人的精神内耗与多巴胺劫持' },
          { text: '2.2 儒释道三家经典的心法解构', link: '/content/01_第一篇_身心基石/2.2_儒释道三家经典的心法解构' },
          { text: '2.3 西方心理学的干预工具', link: '/content/01_第一篇_身心基石/2.3_西方心理学的干预工具' }
        ]
      },
      {
        text: '第三章：性格底色与内在驱动力',
        collapsed: true,
        items: [
          { text: '3.1 接纳出厂设置：内向外向与高敏感', link: '/content/02_第二篇_底层系统/3.1_接纳出厂设置_内向外向与高敏感' },
          { text: '3.2 测量与定位：MBTI与生命轨迹回溯', link: '/content/02_第二篇_底层系统/3.2_测量与定位_MBTI与生命轨迹回溯' }
        ]
      },
      {
        text: '第四章：挖掘先天禀赋',
        collapsed: true,
        items: [
          { text: '4.1 什么是真正的禀赋：苦工与玩耍', link: '/content/02_第二篇_底层系统/4.1_什么是真正的禀赋_苦工与玩耍' },
          { text: '4.2 寻找心流线索：击碎规训回归天赋', link: '/content/02_第二篇_底层系统/4.2_寻找心流线索_击碎规训回归天赋' }
        ]
      },
      {
        text: '第五章：系统摩擦：当内在遭遇丛林',
        collapsed: true,
        items: [
          { text: '5.1 人类社会的底层逻辑与系统摩擦', link: '/content/03_第三篇_碰撞映射/5.1_人类社会的底层运行逻辑与系统摩擦' },
          { text: '5.2 性格特质奖惩机制与异类税', link: '/content/03_第三篇_碰撞映射/5.2_性格特质的奖惩机制与异类税' }
        ]
      },
      {
        text: '第六章：反身性冲击：身心重塑',
        collapsed: true,
        items: [
          { text: '6.1 反身性冲击：面具异化与认知灰度', link: '/content/03_第三篇_碰撞映射/6.1_反身性冲击_面具异化与认知灰度' },
          { text: '6.2 躯体化投射：违背本性与疾病消耗', link: '/content/03_第三篇_碰撞映射/6.2_躯体化投射_违背本性与疾病消耗' }
        ]
      },
      {
        text: '第七章：动态适应与进化：寻找生态位',
        collapsed: true,
        items: [
          { text: '7.1 认知觉醒：从证明自己到运用自己', link: '/content/03_第三篇_碰撞映射/7.1_认知觉醒_从证明自己到运用自己' },
          { text: '7.2 建立缓冲带与个人API', link: '/content/03_第三篇_碰撞映射/7.2_建立缓冲带与个人API' },
          { text: '7.3 财富观与人际算法：开放包容谦和', link: '/content/03_第三篇_碰撞映射/7.3_财富观与人际算法_开放包容谦和' },
          { text: '7.4 财富的流转与守卫：花钱与投资', link: '/content/03_第三篇_碰撞映射/7.4_财富的流转与守卫_花钱与投资' }
        ]
      },
      {
        text: '第八章：时间的冲刷与命运的暴击',
        collapsed: true,
        items: [
          { text: '8.1 十年熔炉：时间的冲刷与性格演化', link: '/content/04_第四篇_蜕变分化/8.1_十年熔炉_时间的冲刷与性格演化' },
          { text: '8.2 剧变时刻：瞬间击穿认知防御', link: '/content/04_第四篇_蜕变分化/8.2_剧变时刻_瞬间击穿认知防御' }
        ]
      },
      {
        text: '第九章：深渊的回望：面对黑暗的十字路口',
        collapsed: true,
        items: [
          { text: '9.1 面对创伤的十字路口：防御性硬化与超越之道', link: '/content/04_第四篇_蜕变分化/9.1_深渊十字路口_黑化与恶龙的分化' },
          { text: '9.2 历劫后的纯粹：高级善良与英雄主义', link: '/content/04_第四篇_蜕变分化/9.2_历劫后的纯粹_高级善良与英雄主义' }
        ]
      },
      {
        text: '第十章：向善与向恶的底层密码',
        collapsed: true,
        items: [
          { text: '10.1 童年剧本与家庭烙印：危机应激代码', link: '/content/04_第四篇_蜕变分化/10.1_童年剧本与家庭烙印_危机下的应激代码' },
          { text: '10.2 人性终极拷问与精神防坠网', link: '/content/04_第四篇_蜕变分化/10.2_人性终极拷问与精神防坠网' }
        ]
      },
      {
        text: '第十一章：巨流冲刷与意义觉醒',
        collapsed: true,
        items: [
          { text: '11.1 巨流冲刷与时代重量', link: '/content/05_第五篇_终极追问/11.1_巨流冲刷与时代重量_微观到宏观的全景震撼' },
          { text: '11.2 世俗巅峰的虚无危机', link: '/content/05_第五篇_终极追问/11.2_世俗巅峰的虚无危机_从向外攫取到向内探寻' }
        ]
      },
      {
        text: '第十二章：认领你的人世课题',
        collapsed: true,
        items: [
          { text: '12.1 认领人世课题：地球学校', link: '/content/05_第五篇_终极追问/12.1_认领人世课题_地球学校与专属剧本' },
          { text: '12.2 苦难重构与终极和解', link: '/content/05_第五篇_终极追问/12.2_苦难意义的重构_挫折即催化剂与自洽和解' }
        ]
      },
      {
        text: '第十三章：三大究竟问题的现代证悟',
        collapsed: true,
        items: [
          { text: '13.1 我是谁：假我剥离与真我', link: '/content/05_第五篇_终极追问/13.1_我是谁_身份剥离与真我觉察' },
          { text: '13.2 我从哪里来：星尘与血脉坐标', link: '/content/05_第五篇_终极追问/13.2_我从哪里来_因果血脉与宇宙坐标' },
          { text: '13.3 我要到哪里去：向死而生', link: '/content/05_第五篇_终极追问/13.3_我要到哪里去_向死而生与超越有限' }
        ]
      },
      {
        text: '第十四章：宇宙由何而来：从大爆炸到物理法则的微调',
        collapsed: true,
        items: [
          { text: '14.1 奇点暴胀与时间开端：为何存在而非空无', link: '/content/06_第六篇_存在天问/14.1_奇点暴胀与时间开端_为何存在而非空无' },
          { text: '14.2 精准微调的宇宙：人择原理与多重宇宙', link: '/content/06_第六篇_存在天问/14.2_精准微调的宇宙_人择原理与多重宇宙' }
        ]
      },
      {
        text: '第十五章：日月运行与天地秩序：物理规律与生命节律',
        collapsed: true,
        items: [
          { text: '15.1 天体运行的物理必然：日月轮转与角动量', link: '/content/06_第六篇_存在天问/15.1_天体运行的物理必然_日月轮转与角动量' },
          { text: '15.2 秩序与生命共舞：潮汐四季与文明节律', link: '/content/06_第六篇_存在天问/15.2_秩序与生命共舞_潮汐四季与文明节律' }
        ]
      },
      {
        text: '第十六章：涌现奇迹与终极震颤：为何是这般模样',
        collapsed: true,
        items: [
          { text: '16.1 从无机原子到人间万象：负熵与涌现奇迹', link: '/content/06_第六篇_存在天问/16.1_从无机原子到人间万象_负熵与涌现奇迹' },
          { text: '16.2 终极震颤与孩童之叹：为何会有这一切', link: '/content/06_第六篇_存在天问/16.2_终极震颤与孩童之叹_为何会有这一切' }
        ]
      },
      {
        text: '第十七章：无我亦无他：全息意识的破壁',
        collapsed: true,
        items: [
          { text: '17.1 世间无我亦无他：他即是我', link: '/content/07_第七篇_归一无我/17.1_世间无我亦无他_我即是他' },
          { text: '17.2 分别心的消融：同一个意识的分形', link: '/content/07_第七篇_归一无我/17.2_分别心的消融_同一个意识的分形' }
        ]
      },
      {
        text: '第十八章：心灵棱镜与万象共鸣',
        collapsed: true,
        items: [
          { text: '18.1 心灵棱镜的映射：同一件事的不同反应', link: '/content/07_第七篇_归一无我/18.1_心灵棱镜的映射_同一件事的不同反应' },
          { text: '18.2 全息宇宙与慈悲的本质', link: '/content/07_第七篇_归一无我/18.2_全息宇宙与慈悲的本质' }
        ]
      },
      {
        text: '第十九章：指月之指与言语之限',
        collapsed: true,
        items: [
          { text: '19.1 语言与文字的终极局限：指月之指非明月', link: '/content/08_第八篇_破执不可说/19.1_语言与文字的终极局限_指月之指非明月' },
          { text: '19.2 以心传心与不可言说的玄奥', link: '/content/08_第八篇_破执不可说/19.2_以心传心与不可言说的玄奥' }
        ]
      },
      {
        text: '第二十章：超越执念，归于本来',
        collapsed: true,
        items: [
          { text: '20.1 破除法执：跨越彼岸后的自然放下', link: '/content/08_第八篇_破执不可说/20.1_破尽万法_把全书所有概念彻底破掉' },
          { text: '20.2 真如自性：终极的沉默与安住', link: '/content/08_第八篇_破执不可说/20.2_真如自性_终极的沉默与安住' }
        ]
      },
      {
        text: '附录与后记',
        collapsed: true,
        items: [
          { text: '附录 A：终身身心淬炼实操图谱与自检清单', link: '/content/09_附录与答疑/附录A_终身身心淬炼实操图谱与自检清单' },
          { text: '附录 B：全球宏观资产配置与财富防御实战手册', link: '/content/09_附录与答疑/附录B_全球宏观资产配置与财富防御实战手册' },
          { text: '附录 C：至暗时刻心理急救与创伤拆弹手册', link: '/content/09_附录与答疑/附录C_至暗时刻心理急救与创伤拆弹手册' },
          { text: '附录 D：现实十大矛盾与深刻悖论精解录', link: '/content/09_附录与答疑/附录D_现实十大矛盾与深刻悖论精解录' },
          { text: '后记：写在全书之外 —— 一个行者的还俗手记', link: '/content/09_附录与答疑/后记_写在全书之外_一个行者的还俗手记' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HJrookie/book-human' }
    ],
    
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    
    outline: {
      label: '本页目录',
      level: [2, 3]
    }
  }
})
