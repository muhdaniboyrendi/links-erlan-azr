<!-- SocialsSocialCard.vue -->
<script setup>
const props = defineProps({
  href: String,
  icon: String,
  title: String,
  description: String,
  iconBg: String,
  iconColor: String,
  borderColor: String,
  gradientBg: String,
  titleHover: String,
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="group relative rounded-3xl bg-gray-900 border transition-all duration-500 overflow-hidden"
    :class="borderColor"
  >
    <!-- Background Gradient on Hover -->
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :class="gradientBg"
    ></div>

    <!-- Content -->
    <div class="relative z-10 flex items-center gap-3 md:gap-4 p-3 md:p-4" :class="gradientBg">
      <!-- Icon -->
      <div
        class="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        :class="iconBg"
      >
        <i
          class="bi text-2xl group-hover:text-white transition-colors duration-300"
          :class="[icon, iconColor]"
        ></i>
      </div>

      <!-- Text Content -->
      <div class="flex-1">
        <h3
          class="text-lg font-bold text-white mb-1 transition-all duration-300"
          :class="titleHover"
        >
          {{ title }}
        </h3>
        <p class="text-gray-400 text-sm">{{ description }}</p>
      </div>

      <!-- Arrow Icon with Animation -->
      <i
        class="bi bi-arrow-right mr-3 text-gray-400 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
      ></i>
    </div>

    <!-- Shine Effect -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      ></div>
    </div>
  </a>
</template>
