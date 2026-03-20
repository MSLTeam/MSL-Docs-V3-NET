<script setup lang="ts">
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'

interface FeatureItem {
  title: string
  icon?: string
  details: string
  link?: string
}

defineProps<ThemeHomeConfigBase & {
  features?: FeatureItem[]
  index?: number
}>()

const getIconClass = (iconStr?: string) => {
  if (!iconStr) return ''
  if (iconStr.startsWith('b:')) return `fa-brands fa-${iconStr.slice(2)}`
  if (iconStr.startsWith('s:')) return `fa-solid fa-${iconStr.slice(2)}`
  return iconStr
}
</script>

<template>
  <VPHomeBox
    :type="type"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="full"
    :index="index || 5"
    class="minimal-features-wrapper"
  >
    <div class="features-container">
      <div class="features-grid" v-if="features && features.length">
        
        <template v-for="(item, idx) in features" :key="idx">
          
          <a 
            v-if="item.link && item.link.startsWith('http')" 
            :href="item.link" 
            target="_blank" 
            class="feature-card is-link"
          >
            <div class="card-inner">
              <div class="card-top">
                <i :class="getIconClass(item.icon)" class="feature-icon"></i>
                <h3 class="feature-title">{{ item.title }}</h3>
                <i class="fa-solid fa-arrow-right-long action-arrow"></i>
              </div>
              <p class="feature-details">{{ item.details }}</p>
            </div>
          </a>

          <RouterLink 
            v-else-if="item.link" 
            :to="item.link" 
            class="feature-card is-link"
          >
            <div class="card-inner">
              <div class="card-top">
                <i :class="getIconClass(item.icon)" class="feature-icon"></i>
                <h3 class="feature-title">{{ item.title }}</h3>
                <i class="fa-solid fa-arrow-right-long action-arrow"></i>
              </div>
              <p class="feature-details">{{ item.details }}</p>
            </div>
          </RouterLink>

          <div v-else class="feature-card">
            <div class="card-inner">
              <div class="card-top">
                <i :class="getIconClass(item.icon)" class="feature-icon"></i>
                <h3 class="feature-title">{{ item.title }}</h3>
              </div>
              <p class="feature-details">{{ item.details }}</p>
            </div>
          </div>

        </template>

      </div>
    </div>
  </VPHomeBox>
</template>

<style scoped>
.minimal-features-wrapper {
  padding: 4rem 0; 
}

.features-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.feature-card {
  display: block;
  background-color: var(--vp-c-bg); 
  
  border: 1px solid rgba(136, 136, 136, 0.2); 
  
  border-radius: 12px; 
  padding: 1.5rem; 
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05); 
}

.feature-card.is-link {
  cursor: pointer;
}

.feature-card.is-link:hover {
  background-color: var(--vp-c-bg-soft); 
  border-color: var(--vp-c-brand-1); 
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1); 
  transform: translateY(-4px); 
}

.card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-top {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.6rem;
}

.feature-icon {
  font-size: 1.1rem;
  color: var(--vp-c-brand-1);
}

.feature-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  flex: 1;
}

/* 描述文字拍扁排版 */
.feature-details {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}

.action-arrow {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
}

.feature-card.is-link:hover .action-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--vp-c-brand-1);
}

@media (max-width: 960px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>