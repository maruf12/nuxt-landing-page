<template>
  <div class="flex flex-col lg:flex-row mb-10">
    <div class="self-center lg:self-start lg:w-2/5">
      <nuxt-img 
        src="/Logo_kk4fqp.png"
        width="98"
        height="35"
        preload
        provider="cloudinary"
        format="webp"
        alt="logo"
      />
      <p class="mt-4 font-light text-sm leading-none text-[#2D3134]">Enjoy the touring with salty</p>
      <img class="mt-6" src="@/assets/img/social-icon.svg" width="124" height="32" alt="Logo" />
    </div>
    <!-- Mobile -->
    <div class="flex flex-wrap p-6 md:hidden">
      <div v-for="item in footerData" :key="item" class="basis-1/2 mt-6">
        <p class="font-medium text-base leading-none text-[#2D3134]">{{ item.title }}</p>
        <div v-for="data in item.items" :key="data" class="mt-1">
          <p class="font-extralight text-sm leading-normal text-[#2D3134]">{{ data }}</p>
        </div>
      </div>
    </div>
    <!-- Desktop & Tablet -->
    <div class="hidden lg:flex-auto md:flex justify-between md:pt-6 lg:pt-0">
      <div v-for="item in footerData" :key="item">
        <p class="font-medium text-base leading-none text-[#2D3134]">{{ item.title }}</p>
        <div v-for="data in item.items" :key="data" class="mt-4">
          <p class="font-extralight text-sm leading-normal text-[#2D3134]">{{ data }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const footerData = ref([
    {
      title: 'Resources',
      items: [
        'Download',
        'Help Center',
        'Guide Book',
        'App Directory'
      ]
    },
    {
      title: 'Travellers',
      items: [
        'Why Travellers',
        'Enterprice',
        'Customer Stories',
        'Instagram post'
      ]
    },
    {
      title: 'Company',
      items: [
        'Travelling',
        'About Locato',
        'Success',
        'Information'
      ]
    },
    {
      title: 'Get App',
      items: [
        'App Store',
        'Google Play Store'
      ]
    }
  ])
</script>

<style lang="scss" scoped>

</style>
