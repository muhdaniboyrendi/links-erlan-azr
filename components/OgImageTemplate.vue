<script setup>
defineOgImageComponent({
  title: "Erlan Azhari - Links",
  description: "Full Stack Developer specializing in modern web technologies.",
});
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center bg-gray-900 text-white p-12"
  >
    <h1 class="text-7xl font-bold mb-4 text-center">
      {{ title }}
    </h1>
    <p class="text-3xl text-gray-300 text-center">
      {{ description }}
    </p>
    <p class="mt-12 text-2xl text-gray-400">erlan-azr.vercel.app</p>
  </div>
</template>
