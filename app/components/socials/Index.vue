<template>
  <div class="w-full max-w-md mx-auto mb-16">
    <div class="space-y-4">
      <SocialsSocialCard
        href="https://erlanazhari.my.id/"
        icon="bi-code-slash"
        title="Personal Website"
        description="Portfolio & Projects"
        color="from-cyan-500 to-blue-600"
        glow="cyan"
      />

      <SocialsSocialCard
        href="https://www.instagram.com/erlan.azr_/"
        icon="bi-instagram"
        title="Instagram"
        description="@erlan.azr_"
        color="from-pink-500 via-red-500 to-orange-500"
        glow="pink"
      />

      <SocialsSocialCard
        href="https://github.com/muhdaniboyrendi"
        icon="bi-github"
        title="GitHub"
        description="muhdaniboyrendi"
        color="from-gray-600 to-gray-800"
        glow="white"
      />

      <SocialsSocialCard
        href="https://www.linkedin.com/in/muhdani-boyrendi/"
        icon="bi-linkedin"
        title="LinkedIn"
        description="Professional Network"
        color="from-blue-600 to-blue-800"
        glow="blue"
      />

      <SocialsSocialCard
        href="https://wa.me/+6282220633024"
        icon="bi-whatsapp"
        title="WhatsApp"
        description="+62 822-2063-3024"
        color="from-green-600 to-green-800"
        glow="green"
      />
    </div>

    <div class="space-y-4 mt-12 text-center">
      <div class="relative inline-block">
        <p
          class="text-lg md:text-xl text-gray-300 font-light tracking-wide relative z-10"
        >
          Business
        </p>
        <!-- Neon Underline -->
        <div
          class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
        ></div>
      </div>

      <SocialsSocialCard
        class="text-start"
        href="https://ea-invitation-landing.vercel.app/"
        icon="bi-envelope-paper"
        title="EA Invitation"
        description="Digital Wedding Invitation"
        color="from-cyan-600 to-purple-800"
        glow="cyan"
      />
    </div>
  </div>
</template>
