<!-- app.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-bl from-gray-950 to-dark relative overflow-hidden font-primary"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-[120px] animate-blob animation-delay-4000"
    ></div>

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
.grid-pattern {
  background-image: linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(60px, 60px);
  }
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
