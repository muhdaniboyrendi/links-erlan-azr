<template>
  <div class="min-h-screen bg-dark relative overflow-hidden font-primary">
    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 opacity-70">
      <div class="h-full w-full bg-grid-pattern"></div>
    </div>

    <div
      class="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen"
    >
      <Header />
      <Socials />
      <Footer />
    </div>
  </div>
</template>

<style>
.bg-grid-pattern {
  background-image: linear-gradient(cyan 1px, transparent 1px),
    linear-gradient(90deg, cyan 1px, transparent 1px);
  background-size: 100px 100px;
  opacity: 0.1;
}
</style>
