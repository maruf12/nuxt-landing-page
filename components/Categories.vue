<template>
  <div>
    <div class="lg:w-1/3">
      <h2 class="font-semibold text-4xl leading-none tracking-wider lg:text-5xl lg:leading-none lg:tracking-wide text-[#2D3134] font-sans">Categories</h2>
      <p class="pt-4 font-extralight tracking-wide text-sm lg:text-base">Here are lots of interesting destinations to visit, but don't be confused—they're already grouped by category.</p>
    </div>
    <div class="flex flex-col flex-auto lg:flex-row mt-10 justify-between">
      <!-- Looping disini -->
      <div v-for="item in 6" :key="item">
        <img src="@/assets/img/categories-1.svg" alt="Beach" />
        <p class="text-center font-medium text-xl mt-2 tracking-wider">{{ 'Beach' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>