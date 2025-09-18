<template>
  <div class="text-center space-y-6">
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
      <svg
        class="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        ></path>
      </svg>
    </a>
  </div>
</template>
