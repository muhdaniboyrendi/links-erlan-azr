<script setup>
const professions = ["Software Engineer", "Web Developer", "Tech Enthusiast"];

const currentProfession = ref(professions[0]);
const currentIndex = ref(0);
let interval = null;

const rotateProfession = () => {
  currentIndex.value = (currentIndex.value + 1) % professions.length;
  currentProfession.value = professions[currentIndex.value];
};

onMounted(() => {
  interval = setInterval(rotateProfession, 3000);
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="mb-8">
    <!-- Logo Animation -->
    <div class="relative mb-10">
      <div class="w-32 h-32 mx-auto relative p-2">
        <div
          class="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin-slow"
        ></div>
        <img src="/favicon.png" alt="Erlan Azhari Logo" class="object-cover" />
      </div>
    </div>

    <!-- Name with Neon Effect -->
    <div class="text-center">
      <h1
        class="text-4xl md:text-5xl font-medium font-exo mb-8 text-white animate-fade-in"
      >
        Muhdani Boyrendi Erlan Azhari
      </h1>

      <!-- Profession with rotation animation -->
      <div class="relative inline-flex justify-center items-center h-8">
        <Transition name="profession" mode="out-in">
          <p
            :key="currentProfession"
            class="md:text-lg text-gray-300 font-light tracking-wide relative z-10 absolute"
          >
            {{ currentProfession }}
          </p>
        </Transition>

        <!-- Neon Underline -->
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profession-enter-active,
.profession-leave-active {
  transition: all 0.5s ease-in-out;
}

.profession-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.profession-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.profession-enter-to,
.profession-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
