<!-- Header.vue -->
<script setup>
const professions = [
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Photography Enthusiast",
];
const currentProfession = ref(professions[0]);
const currentIndex = ref(0);
const isVisible = ref(true);
let interval = null;

const rotateProfession = () => {
  isVisible.value = false;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % professions.length;
    currentProfession.value = professions[currentIndex.value];
    isVisible.value = true;
  }, 500);
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
  <div class="mb-12">
    <!-- Logo with Neon Effect -->
    <div class="relative mb-10">
      <div
        class="h-32 aspect-square mx-auto relative rounded-full bg-linear-to-br from-cyan-400 to-purple-400 p-1"
      >
        <!-- Logo Glow -->
        <div
          class="absolute inset-2 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"
        ></div>

        <!-- Logo -->
        <img
          src="/favicon.png"
          alt="Erlan Azhari Logo"
          class="relative w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    <!-- Name with Gradient & Neon Effect -->
    <div class="text-center">
      <h1
        class="text-4xl md:text-6xl max-w-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text animate-fade-in"
      >
        Muhdani Boyrendi Erlan Azhari
      </h1>

      <!-- Profession with Badge Style -->
      <div class="relative inline-flex justify-center items-center mb-4">
        <Transition name="profession" mode="out-in">
          <span
            :key="currentProfession"
            class="text-cyan-300 text-lg md:text-xl font-medium"
          >
            {{ currentProfession }}
          </span>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neon-text {
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3),
    0 0 30px rgba(6, 182, 212, 0.2);
}
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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
