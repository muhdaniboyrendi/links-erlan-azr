<template>
  <div class="mb-16">
    <!-- Logo Animation -->
    <div class="relative mb-8">
      <div class="w-32 h-32 mx-auto relative">
        <div
          class="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin-slow"
        ></div>
        <div
          class="absolute inset-2 border-2 border-violet-400/50 rounded-full animate-spin-reverse"
        ></div>
      </div>
    </div>

    <!-- Name with Neon Effect -->
    <div class="text-center">
      <h1
        class="text-4xl md:text-6xl font-semibold font-exo mb-4 bg-gradient-to-r from-cyan-500 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-fade-in"
      >
        Erlan Azhari
      </h1>
      <div class="relative inline-block">
        <p
          class="text-lg md:text-xl text-gray-300 font-light tracking-wide relative z-10"
        >
          Software Engineer
        </p>
        <!-- Neon Underline -->
        <div
          class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
        ></div>
      </div>
    </div>
  </div>
</template>
