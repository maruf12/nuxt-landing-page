<template>
  <div class="flex">
    <div class="flex-1">
      <img src="@/assets/img/experience.svg" alt="experience" width="480" />
    </div>
    <div class="flex-1 lg:self-center lg:ml-24">
      <h2 class="font-medium text-[#F66F4D] tracking-widest text-base lg:text-lg">Our Experience</h2>
      <p class="mt-5 font-medium text-4xl leading-none tracking-wider lg:text-6xl text-[#2D3134]">Our Stories Have Adventures</p>
      <p class="pt-4 font-extralight tracking-wide text-sm lg:text-base">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
      <div class="flex justify-between pr-10">
        <div v-for="item in 3" :key="item" class="border-white bg-white rounded-lg shadow-xl px-5 py-6 mt-10 w-[140px]">
          <p class="text-4xl text-[#F66F4D] font-medium pb-2 text-center">{{ '12K+' }}</p>
          <p class="text-[#939597] pl-3 text-base font-light leading-tight">{{ 'Success' }}</p>
          <p class="text-[#939597] pl-3 text-base font-light leading-tight">{{ 'Journey' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>