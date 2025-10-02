<!-- Footer.vue -->
<template>
  <div class="text-center space-y-6 w-full max-w-2xl">
    <!-- Divider Line with Glow -->
    <div class="relative">
      <div
        class="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      ></div>
      <div
        class="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-sm"
      ></div>
    </div>

    <!-- Copyright with Neon Effect -->
    <p class="text-gray-400 text-sm relative">
      <span class="relative z-10"
        >&copy; 2025 by Muhdani Boyrendi Erlan Azhari</span
      >
    </p>

    <!-- Source Code Link -->
    <a
      href="https://github.com/muhdaniboyrendi/links-erlan-azr"
      target="_blank"
      class="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group"
    >
      <span>Source Code</span>
      <i class="bi bi-box-arrow-up-right"></i>
    </a>
  </div>
</template>
