<script setup lang="ts">
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'

interface Testimonial {
  name: string
  role?: string
  avatar?: string
  content: string
}

defineProps<ThemeHomeConfigBase & {
  index?: number
  title?: string
  description?: string
  items?: Testimonial[]
}>()
</script>

<template>
  <VPHomeBox
    :type="type"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="full"
    :index="index || 4"
    class="testimonials-wrapper"
  >
    <div class="testimonials-container">
      
      <div class="section-header">
        <h2 class="section-title">{{ title || '他们都在使用 MSLX' }}</h2>
        <p class="section-desc" v-if="description">{{ description }}</p>
      </div>

      <div class="testimonials-grid" v-if="items && items.length">
        <div 
          v-for="(item, idx) in items" 
          :key="idx" 
          class="testimonial-card"
        >
          <div class="user-info">
            <img 
              :src="item.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + item.name" 
              :alt="item.name" 
              class="user-avatar" 
            />
            <div class="user-meta">
              <span class="user-name">{{ item.name }}</span>
              <span class="user-role" v-if="item.role">{{ item.role }}</span>
            </div>
            <div class="quote-icon">
              <i class="fa-solid fa-quote-right"></i>
            </div>
          </div>

          <p class="quote-content">{{ item.content }}</p>
        </div>
      </div>

    </div>
  </VPHomeBox>
</template>

<style scoped>
/* ==================== 基础容器 ==================== */
.testimonials-wrapper {
  padding: 5rem 0;
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ==================== 头部标题 ==================== */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(120deg, var(--vp-c-brand-1), var(--vp-c-brand-3));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* 🛠️ 核心修复：防止渐变文字上下被裁剪吞掉 */
  line-height: 1.4;
  padding-bottom: 0.1em;
}

.section-desc {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
}

/* ==================== 瀑布流网格 ==================== */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  /* 🛠️ 核心修复：去掉了 align-items: start; 这样所有卡片会自动等高拉伸 */
}

/* ==================== 评价卡片 ==================== */
.testimonial-card {
  /* 强制卡片脱离斑马纹背景，使用纯净底色 */
  background-color: var(--vp-c-bg); 
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 1.8rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02); /* 极轻微的阴影 */
  
  display: flex;
  flex-direction: column;
  height: 100%; /* 配合外层 Grid，确保等高 */
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-soft);
}

/* ==================== 顶部用户信息 ==================== */
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem; /* 和下方文字留出呼吸感 */
}

.user-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
}

.user-meta {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
}

.user-role {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}

/* 右上角引言小图标 */
.quote-icon {
  margin-left: auto; /* 自动推到最右边 */
  font-size: 1.4rem;
  color: var(--vp-c-brand-soft); /* 使用非常柔和的主题色 */
  opacity: 0.6;
}

/* ==================== 评价文本 ==================== */
.quote-content {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
  flex: 1; /* 占据剩余空间，保证等高布局时文字排版正常 */
}

/* ==================== 响应式适配 ==================== */
@media (max-width: 960px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>