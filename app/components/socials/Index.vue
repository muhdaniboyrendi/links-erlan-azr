<!-- Socials.vue -->
<template>
  <div class="w-full max-w-2xl mx-auto mb-16">
    <!-- Social Links -->
    <div class="grid gap-4 mb-12">
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
        href="https://discord.gg/MfzpYpBV"
        icon="bi-discord"
        title="Discord"
        description="Erlan Azr"
        icon-bg="bg-gradient-to-br from-violet-400/20 to-purple-400/20"
        icon-color="text-violet-400"
        border-color="border-violet-400/20 hover:border-violet-400/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]"
        gradient-bg="bg-gradient-to-br from-violet-400/5 to-purple-400/5"
        title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text"
      />

      <SocialsSocialCard
        href="https://discord.gg/MfzpYpBV"
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
    <div class="space-y-6">
      <!-- Business Badge -->
      <div class="text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-sm"
        >
          <span class="text-purple-300 text-sm font-medium">Business</span>
        </div>
      </div>

      <!-- Business Link -->
      <div class="grid gap-4">
        <SocialsSocialCard
          href="https://ea-invitation-landing.vercel.app/"
          icon="bi-envelope-paper"
          title="EA Invitation"
          description="Digital Wedding Invitation"
          icon-bg="bg-gradient-to-br from-cyan-400/20 to-purple-400/20"
          icon-color="text-cyan-400"
          border-color="border-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
          gradient-bg="bg-gradient-to-br from-cyan-400/5 to-purple-400/5"
          title-hover="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text"
        />
      </div>
    </div>
  </div>
</template>
