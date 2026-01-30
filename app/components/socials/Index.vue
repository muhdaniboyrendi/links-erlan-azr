<!-- Socials.vue -->
<template>
  <div class="w-full max-w-2xl mx-auto mb-8 md:mb-10">
    <!-- Social Links -->
    <div class="grid gap-3 md:gap-4 mb-8 md:mb-10">
      <!-- Business Badge -->
      <div class="text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 backdrop-blur-sm"
        >
          <span class="text-sky-300 text-sm font-medium"
            >Social Media Links</span
          >
        </div>
      </div>

      <SocialsSocialCard
        href="https://erlanazhari.my.id/"
        icon="bi-code-slash"
        title="Personal Website"
        description="Portfolio & Projects"
        icon-bg="bg-gradient-to-br from-cyan-400/20 to-blue-400/20"
        icon-color="text-cyan-400"
        border-color="border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
        gradient-bg="bg-gradient-to-br from-cyan-400/5 to-blue-400/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text"
      />

      <SocialsSocialCard
        href="https://www.instagram.com/erlan.azr_/"
        icon="bi-instagram"
        title="Instagram"
        description="@erlan.azr_"
        icon-bg="bg-gradient-to-br from-purple-400/20 to-pink-400/20"
        icon-color="text-pink-400"
        border-color="border-pink-400/20 hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]"
        gradient-bg="bg-gradient-to-br from-purple-400/5 to-pink-400/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text"
      />

      <SocialsSocialCard
        href="https://github.com/muhdaniboyrendi"
        icon="bi-github"
        title="GitHub"
        description="muhdaniboyrendi"
        icon-bg="bg-gradient-to-br from-gray-400/20 to-gray-600/20"
        icon-color="text-gray-300"
        border-color="border-gray-400/20 hover:border-gray-400/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.3)]"
        gradient-bg="bg-gradient-to-br from-gray-400/5 to-gray-600/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text"
      />

      <SocialsSocialCard
        href="https://www.linkedin.com/in/muhdani-boyrendi/"
        icon="bi-linkedin"
        title="LinkedIn"
        description="Professional Network"
        icon-bg="bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
        icon-color="text-blue-400"
        border-color="border-blue-400/20 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
        gradient-bg="bg-gradient-to-br from-blue-400/5 to-cyan-400/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
      />

      <SocialsSocialCard
        href="https://wa.me/+6282220633024"
        icon="bi-whatsapp"
        title="WhatsApp"
        description="+62 822-2063-3024"
        icon-bg="bg-gradient-to-br from-green-400/20 to-emerald-400/20"
        icon-color="text-green-400"
        border-color="border-green-400/20 hover:border-green-400/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]"
        gradient-bg="bg-gradient-to-br from-green-400/5 to-emerald-400/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text"
      />

      <SocialsSocialCard
        href="https://www.tiktok.com/@erlan.azr?_r=1&_t=ZS-93Udhi6SGyD"
        icon="bi-tiktok"
        title="Tiktok"
        description="@erlan.azr"
        icon-bg="bg-gradient-to-br from-cyan-400/20 to-pink-400/20"
        icon-color="text-gray-200"
        border-color="border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]"
        gradient-bg="bg-gradient-to-br from-cyan-400/5 to-pink-400/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text"
      />
    </div>

    <!-- Business Section -->
    <div>
      <!-- Business Badge -->
      <div class="text-center mb-3 md:mb-4">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-400/10 backdrop-blur-sm"
        >
          <span class="text-sky-300 text-sm font-medium">Business</span>
        </div>
      </div>

      <!-- Business Link -->
      <div class="grid gap-4">
        <a
          href="https://eainvitation.com"
          target="_blank"
          class="group relative rounded-3xl bg-gray-900 border transition-all duration-500 overflow-hidden border-sky-400/20 hover:border-sky-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
        >
          <!-- Background Gradient on Hover -->
          <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-400/5 to-sky-400/5"
          ></div>

          <!-- Content -->
          <div
            class="relative z-10 flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-br from-cyan-400/5 to-sky-400/5"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-cyan-400/20 to-sky-400/20"
            >
              <NuxtImg
                src="/ea-invitation-logo.webp"
                width="40"
                height="40"
                loading="lazy"
                placeholder
              />
            </div>

            <!-- Text Content -->
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-white mb-1 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-sky-400 group-hover:bg-clip-text"
              >
                EA Invitation
              </h3>
              <p class="text-gray-400 text-sm">
                Digital Wedding Invitation Platform
              </p>
            </div>

            <!-- Arrow Icon with Animation -->
            <i
              class="bi bi-arrow-right mr-3 text-gray-400 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
            ></i>
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
      </div>
    </div>
  </div>
</template>
