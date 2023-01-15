<template>
  <div>
    <div class="lg:w-1/3">
      <h2 class="font-semibold text-4xl leading-none tracking-wider lg:text-5xl lg:leading-none lg:tracking-wide text-[#2D3134] font-sans">Categories</h2>
      <p class="pt-4 font-extralight tracking-wide text-sm lg:text-base">Here are lots of interesting destinations to visit, but don't be confused—they're already grouped by category.</p>
    </div>
    <div class="flex flex-wrap lg:flex lg:flex-row mt-10 justify-between">
      <div v-for="item in categoriesData" :key="item" class="mx-5 basis-1/3 w-1/2 lg:basis-[13%] lg:w-full py-2">
        <nuxt-img :src="item.img" provider="cloudinary" />
        <p class="text-center font-medium text-xl mt-2 tracking-wider">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const categoriesData = ref([
    {
      name: 'Beach',
      img: '/categories-1_ajftw2.png'
    },
    {
      name: 'Desert',
      img: '/categories-2_owago6.png'
    },
    {
      name: 'Mountain',
      img: '/categories-3_l2vopt.png'
    },
    {
      name: 'Temple',
      img: '/categories-4_omhtoe.png'
    },
    {
      name: 'Tower',
      img: '/categories-5_jzpax2.png'
    },
    {
      name: 'Pyramid',
      img: '/categories-6_dw2yow.png'
    },
  ])

</script>

<style scoped>

</style>