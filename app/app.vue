<!-- app.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-bl from-gray-950 to-dark relative overflow-hidden font-primary"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div
      class="relative z-10 container mx-auto px-3 md:px-4 py-12 flex flex-col items-center justify-center min-h-screen"
    >
      <Header />
      <Socials />
      <Footer />
    </div>
  </div>
</template>

<style>
.grid-pattern {
  background-image: linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}
</style>
