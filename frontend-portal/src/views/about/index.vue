<template>
  <div class="about-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="hero-content">
        <span class="hero-badge">关于我们</span>
        <h1>用技术创新<br/><span class="gradient-text">驱动企业成长</span></h1>
        <p>我们是一支充满激情的团队，致力于帮助企业实现数字化转型，在数字时代保持竞争优势。</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="intro-section">
      <div class="intro-container">
        <div class="intro-content">
          <span class="section-badge">我们的故事</span>
          <h2>从创业到行业领先</h2>
          <p>
            自2018年成立以来，我们始终坚持以客户为中心，以技术创新为驱动。
            从最初的3人团队，发展到如今拥有50+专业人才的科技公司，
            我们服务了500+企业客户，帮助他们实现了数字化转型的目标。
          </p>
          <p>
            我们相信，技术的价值在于解决实际问题。因此，我们不断探索前沿技术，
            将其转化为切实可行的解决方案，为客户创造真正的商业价值。
          </p>
          <div class="intro-stats">
            <div class="stat">
              <span class="stat-value">6+</span>
              <span class="stat-label">年行业经验</span>
            </div>
            <div class="stat">
              <span class="stat-value">500+</span>
              <span class="stat-label">服务客户</span>
            </div>
            <div class="stat">
              <span class="stat-value">50+</span>
              <span class="stat-label">专业团队</span>
            </div>
          </div>
        </div>
        <div class="intro-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" alt="团队协作" />
          <div class="image-decoration"></div>
        </div>
      </div>
    </section>

    <!-- 使命愿景 -->
    <section class="mission-section">
      <div class="mission-container">
        <div class="mission-card">
          <div class="mission-icon">
            <span class="icon-emoji">🎯</span>
          </div>
          <h3>我们的使命</h3>
          <p>通过技术创新，帮助每一家企业实现数字化转型，提升运营效率，创造更大价值。</p>
        </div>
        <div class="mission-card featured">
          <div class="mission-icon">
            <span class="icon-emoji">📈</span>
          </div>
          <h3>我们的愿景</h3>
          <p>成为最受信赖的数字化转型伙伴，引领企业走向智能化未来。</p>
        </div>
        <div class="mission-card">
          <div class="mission-icon">
            <span class="icon-emoji">🏆</span>
          </div>
          <h3>核心价值观</h3>
          <p>诚信为本、创新驱动、客户至上、追求卓越 - 这是我们始终坚守的信念。</p>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="timeline-section">
      <div class="section-header">
        <span class="section-header__badge">
          <el-icon><Clock /></el-icon> 发展历程
        </span>
        <h2 class="section-header__title">一路走来</h2>
        <p class="section-header__desc">每一个里程碑都是我们成长的见证</p>
      </div>
      
      <div class="timeline-wrapper">
        <div class="timeline-line"></div>
        <div class="timeline-items">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="timeline-item"
            :class="{ 'is-right': index % 2 === 1 }"
          >
            <div class="timeline-card" :class="{ 'is-unrecorded': !item.recorded }">
              <span class="timeline-year">{{ item.year }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
              <span v-if="!item.recorded" class="timeline-note">该年度无对外发布的里程碑，特此说明</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-section">
      <div class="section-header">
        <span class="section-header__badge">
          <el-icon><User /></el-icon> 核心团队
        </span>
        <h2 class="section-header__title">遇见我们的团队</h2>
        <p class="section-header__desc">一群充满激情、专业敬业的伙伴</p>
      </div>
      
      <div class="team-grid">
        <div v-for="member in teamMembers" :key="member.name" class="team-card">
          <div class="team-avatar">
            <img :src="member.avatar" :alt="member.name" />
          </div>
          <div class="team-info">
            <h4>{{ member.name }}</h4>
            <span class="team-position">{{ member.position }}</span>
            <p>{{ member.description }}</p>
          </div>
          <div class="team-social">
            <router-link to="/contact" :title="`前往「联系我们」页面与${member.name}取得联系`">
              <el-icon><Link /></el-icon>
            </router-link>
            <a :href="`mailto:${member.email}`" :title="`发送邮件至 ${member.email}`">
              <el-icon><Message /></el-icon>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 办公环境 -->
    <section class="office-section">
      <div class="section-header">
        <span class="section-header__badge">
          <el-icon><OfficeBuilding /></el-icon> 办公环境
        </span>
        <h2 class="section-header__title">我们的工作空间</h2>
        <p class="section-header__desc">开放、协作、充满创意的办公环境</p>
      </div>
      
      <div class="office-gallery">
        <div class="gallery-item large">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" alt="办公室" />
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" alt="会议室" />
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&h=300&fit=crop" alt="休息区" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface TimelineItem {
  year: number
  title: string
  description: string
  /** 该年份是否有对外发布的里程碑；无记录的年份需在描述中说明原因，而不是直接跳过 */
  recorded: boolean
}

const timelineData = ref<TimelineItem[]>([
  { year: 2018, title: '公司成立', description: '怀揣梦想，在北京正式成立，开启创业之旅', recorded: true },
  { year: 2019, title: '首个里程碑', description: '成功服务100家企业客户，团队规模扩展至20人', recorded: true },
  { year: 2020, title: '沉淀蓄力', description: '受疫情影响暂缓对外扩张，团队专注远程交付体系与内部产品研发，故该年度未发布对外里程碑', recorded: false },
  { year: 2021, title: '业务拓展', description: '开设上海、深圳分公司，业务覆盖全国主要城市', recorded: true },
  { year: 2022, title: '稳健深耕', description: '行业调整期聚焦存量客户深耕与产品打磨，该年度未设立对外里程碑，为次年的技术突破积蓄力量', recorded: false },
  { year: 2023, title: '技术突破', description: '自主研发核心平台上线，获得多项技术专利', recorded: true },
  { year: 2024, title: '行业领先', description: '荣获年度最佳创新企业奖，客户满意度达98%', recorded: true }
])

// 始终按年份升序排列，保证时间轴的先后顺序与年份一致
const timeline = computed(() => [...timelineData.value].sort((a, b) => a.year - b.year))

const teamMembers = ref([
  {
    name: '张明',
    position: '创始人 & CEO',
    email: 'zhangming@portal.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    description: '15年行业经验，曾任职于多家知名科技公司'
  },
  {
    name: '李华',
    position: '技术总监',
    email: 'lihua@portal.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    description: '资深架构师，专注于企业级解决方案设计'
  },
  {
    name: '王芳',
    position: '产品总监',
    email: 'wangfang@portal.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    description: '10年产品经验，深谙用户需求与市场趋势'
  },
  {
    name: '赵强',
    position: '运营总监',
    email: 'zhaoqiang@portal.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    description: '擅长品牌建设与市场推广，推动业务持续增长'
  }
])
</script>

<style lang="scss" scoped>
.about-page {
  padding-top: $header-height;
}

// ==================== Hero ====================
.page-hero {
  padding: $spacing-4xl $spacing-lg;
  background: $bg-color-light;
  text-align: center;
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-badge {
    display: inline-block;
    padding: $spacing-sm $spacing-md;
    background: rgba($primary-color, 0.1);
    color: $primary-color;
    font-size: $font-size-sm;
    font-weight: 600;
    border-radius: $border-radius-full;
    margin-bottom: $spacing-lg;
  }
  
  h1 {
    font-size: clamp(36px, 6vw, $font-size-5xl);
    line-height: 1.2;
    margin-bottom: $spacing-lg;
    
    .gradient-text {
      background: $gradient-text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  p {
    font-size: $font-size-lg;
    color: $text-color-secondary;
    line-height: $line-height-loose;
  }
}

// ==================== 公司简介 ====================
.intro-section {
  padding: $spacing-4xl $spacing-lg;
}

.intro-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-4xl;
  align-items: center;
  max-width: $container-max-width;
  margin: 0 auto;
}

.intro-content {
  .section-badge {
    display: inline-block;
    padding: $spacing-xs $spacing-md;
    background: rgba($primary-color, 0.1);
    color: $primary-color;
    font-size: $font-size-sm;
    font-weight: 600;
    border-radius: $border-radius-full;
    margin-bottom: $spacing-md;
  }
  
  h2 {
    font-size: $font-size-4xl;
    margin-bottom: $spacing-lg;
  }
  
  p {
    font-size: $font-size-md;
    color: $text-color-secondary;
    line-height: $line-height-loose;
    margin-bottom: $spacing-md;
  }
}

.intro-stats {
  display: flex;
  gap: $spacing-xl;
  margin-top: $spacing-xl;
  padding-top: $spacing-xl;
  border-top: 1px solid $border-color-light;
  
  .stat {
    .stat-value {
      display: block;
      font-size: $font-size-3xl;
      font-weight: 800;
      color: $primary-color;
    }
    
    .stat-label {
      font-size: $font-size-sm;
      color: $text-color-secondary;
    }
  }
}

.intro-image {
  position: relative;
  
  img {
    width: 100%;
    border-radius: $border-radius-xl;
    box-shadow: $shadow-2xl;
  }
  
  .image-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    background: $gradient-primary;
    border-radius: $border-radius-xl;
    z-index: -1;
    opacity: 0.2;
  }
}

// ==================== 使命愿景 ====================
.mission-section {
  padding: $spacing-4xl $spacing-lg;
  background: $bg-color-dark;
}

.mission-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;
  max-width: $container-max-width;
  margin: 0 auto;
}

.mission-card {
  padding: $spacing-xl;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: $border-radius-lg;
  text-align: center;
  transition: all $transition-normal;
  
  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
  }
  
  &.featured {
    background: $gradient-primary;
    border: none;
    transform: scale(1.05);
    
    &:hover {
      transform: scale(1.05) translateY(-4px);
    }
    
    .mission-icon {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  
  .mission-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($primary-color, 0.2);
    border-radius: $border-radius-md;
    color: white;
    margin: 0 auto $spacing-lg;
    
    .icon-emoji {
      font-size: 32px;
    }
  }
  
  h3 {
    font-size: $font-size-xl;
    color: white;
    margin-bottom: $spacing-sm;
  }
  
  p {
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.7);
    line-height: $line-height-loose;
  }
}

// ==================== 发展历程 ====================
.timeline-section {
  padding: $spacing-4xl $spacing-lg;
  max-width: $container-max-width;
  margin: 0 auto;
}

.timeline-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: $border-color;
  transform: translateX(-50%);
}

.timeline-items {
  position: relative;
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 30px);
  padding-bottom: $spacing-xl;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 8px;
    width: 16px;
    height: 16px;
    background: white;
    border: 3px solid $primary-color;
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  
  &.is-right {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: calc(50% + 30px);
    
    .timeline-card {
      text-align: left;
    }
  }
  
  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-card {
  text-align: right;

  .timeline-year {
    display: inline-block;
    padding: $spacing-xs $spacing-md;
    background: $gradient-primary;
    color: white;
    font-size: $font-size-sm;
    font-weight: 600;
    border-radius: $border-radius-full;
    margin-bottom: $spacing-sm;
  }

  h4 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-xs;
  }

  p {
    font-size: $font-size-sm;
    color: $text-color-secondary;
  }

  // 无对外里程碑的年份：弱化展示，并显式说明原因
  &.is-unrecorded {
    .timeline-year {
      background: $text-color-secondary;
    }

    h4 {
      color: $text-color-regular;
    }
  }

  .timeline-note {
    display: inline-block;
    margin-top: $spacing-sm;
    padding: 2px $spacing-sm;
    font-size: $font-size-xs;
    color: $text-color-secondary;
    background: $bg-color-light;
    border: 1px dashed $border-color;
    border-radius: $border-radius-full;
  }
}

// ==================== 团队介绍 ====================
.team-section {
  padding: $spacing-4xl $spacing-lg;
  background: $bg-color-light;
  
  .section-header {
    max-width: $container-max-width;
    margin: 0 auto $spacing-3xl;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-lg;
  max-width: $container-max-width;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  text-align: center;
  transition: all $transition-normal;
  
  &:hover {
    box-shadow: $shadow-xl;
    transform: translateY(-4px);
    
    .team-avatar img {
      transform: scale(1.05);
    }
  }
  
  .team-avatar {
    width: 120px;
    height: 120px;
    margin: 0 auto $spacing-lg;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid $bg-color-light;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-normal;
    }
  }
  
  .team-info {
    h4 {
      font-size: $font-size-xl;
      margin-bottom: $spacing-xs;
    }
    
    .team-position {
      display: block;
      font-size: $font-size-sm;
      color: $primary-color;
      font-weight: 600;
      margin-bottom: $spacing-sm;
    }
    
    p {
      font-size: $font-size-sm;
      color: $text-color-secondary;
      line-height: $line-height-loose;
    }
  }
  
  .team-social {
    display: flex;
    justify-content: center;
    gap: $spacing-sm;
    margin-top: $spacing-md;
    padding-top: $spacing-md;
    border-top: 1px solid $border-color-light;
    
    a {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $bg-color-light;
      border-radius: $border-radius-md;
      color: $text-color-secondary;
      transition: all $transition-fast;
      cursor: pointer;
      
      &:hover {
        background: $primary-color;
        color: white;
      }
    }
  }
}

// ==================== 办公环境 ====================
.office-section {
  padding: $spacing-4xl $spacing-lg;
  max-width: $container-max-width;
  margin: 0 auto;
}

.office-gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: $spacing-md;
  
  .gallery-item {
    border-radius: $border-radius-lg;
    overflow: hidden;
    
    &.large {
      grid-row: span 2;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-slow;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

// ==================== 响应式 ====================
@media (max-width: $breakpoint-lg) {
  .intro-container {
    grid-template-columns: 1fr;
    gap: $spacing-xl;
  }
  
  .intro-image {
    order: -1;
  }
  
  .mission-container {
    grid-template-columns: 1fr;
    
    .mission-card.featured {
      transform: none;
      
      &:hover {
        transform: translateY(-4px);
      }
    }
  }
}

@media (max-width: $breakpoint-md) {
  .timeline-line {
    left: 8px;
  }
  
  .timeline-item {
    padding-right: 0;
    padding-left: 40px;
    justify-content: flex-start;
    
    &::before {
      left: 8px;
      transform: translateX(-50%);
    }
    
    &.is-right {
      padding-left: 40px;
    }
    
    .timeline-card {
      text-align: left;
    }
  }
  
  .office-gallery {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    
    .gallery-item.large {
      grid-row: auto;
    }
  }
}
</style>
