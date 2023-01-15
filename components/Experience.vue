<template>
  <div class="flex flex-col-reverse lg:flex-row">
    <div class="flex-1 mt-10 lg:mt-0">
      <nuxt-img
        src="/experience_ymuw4f.png"
        provider="cloudinary"
        width="592"
        height="632"
        loading="lazy"
        format="webp"
        alt="Photographer"
      />
    </div>
    <div class="flex-1 lg:self-center lg:ml-24">
      <h2 class="font-medium text-[#F66F4D] tracking-widest text-base lg:text-lg">Our Experience</h2>
      <p class="mt-5 font-medium text-4xl leading-none tracking-wider lg:text-6xl text-[#2D3134]">Our Stories Have Adventures</p>
      <p class="pt-4 font-extralight tracking-wide text-sm lg:text-base">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
      <div class="flex justify-between md:pr-10">
        <div v-for="item in experienceData" :key="item" class="border-white bg-white rounded-lg shadow-xl px-5 py-6 mt-10 w-[100px] md:w-[140px]">
          <p class="text-2xl md:text-4xl text-[#F66F4D] font-medium pb-2 text-center">{{ item.count }}</p>
          <p class="text-[#939597] md:pl-3 text-sm md:text-base font-light leading-tight">{{ item.textPrimary }} </p>
          <p class="text-[#939597] md:pl-3 text-sm md:text-base font-light leading-tight">{{ item.textSecondary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const experienceData = ref([
    {
      count: '12K+',
      textPrimary: 'Success',
      textSecondary: 'Journey'
    },
    {
      count: '16+',
      textPrimary: 'Awards',
      textSecondary: 'Winning'
    },
    {
      count: '20+',
      textPrimary: 'Years of',
      textSecondary: 'Experience'
    }
  ])
</script>

<style lang="scss" scoped>

</style>