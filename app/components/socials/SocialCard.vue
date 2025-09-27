<script setup>
const props = defineProps({
  href: String,
  icon: String,
  title: String,
  description: String,
  color: String,
  glow: String,
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="group block relative overflow-hidden rounded-2xl backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
    :class="`hover:shadow-2xl hover:shadow-${glow}-500/25`"
  >
    <!-- Background Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity duration-500"
      :class="color"
    ></div>

    <!-- Neon Border Effect -->
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
      <div
        class="absolute inset-0 rounded-2xl bg-gradient-to-r p-px"
        :class="color"
      >
        <div class="rounded-2xl bg-slate-900/50 h-full w-full"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative p-6 flex items-center space-x-4">
      <!-- Icon with Glow -->
      <div class="text-4xl relative">
        <div
          class="absolute inset-0 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          :class="`text-${glow}-400`"
        >
          <i class="bi" :class="icon"></i>
        </div>
        <div class="relative">
          <i
            class="bi"
            :class="[
              icon,
              'bg-linear-to-br bg-clip-text text-transparent',
              color,
            ]"
          ></i>
        </div>
      </div>

      <!-- Text Content -->
      <div class="flex-1">
        <h3
          class="text-xl font-semibold text-white group-hover:text-white/90 transition-colors duration-300"
        >
          {{ title }}
        </h3>
        <p
          class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
        >
          {{ description }}
        </p>
      </div>

      <!-- Arrow Icon with Animation -->
      <div
        class="text-gray-400 group-hover:text-white transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </div>
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
