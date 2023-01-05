<template>
  <div>
    <div class="text-center">
      <h2 class="font-semibold text-4xl leading-none tracking-wider lg:text-5xl lg:leading-none lg:tracking-wide text-[#2D3134] font-sans">Top Destinations</h2>
      <p class="mt-1 font-extralight tracking-wide text-sm lg:text-base">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
    </div>
    <div class="flex justify-center mt-6">
      <button v-for="button in 5" :key="button" class="flex w-[6rem] items-center justify-center rounded-[30px] border border-[#3D3D3D] bg-transparent mx-1 px-4 py-2 text-base font-base text-[#3D3D3D] shadow-sm hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
        {{ 'London' }}
      </button>
    </div>
    <div class="mt-10 flex justify-center">
      <div class="grid grid-rows-2 grid-flow-col gap-5 h-[510px]">
        <img class="row-start-1 row-span-1" src="@/assets/img/top-destinations-1.svg" alt="Vietnam" />
        <img class="row-span-1" src="@/assets/img/top-destinations-2.svg" alt="Vietnam" />
        <img class="row-start-1 row-span-2" src="@/assets/img/top-destinations-3.svg" alt="Vietnam" />
        <img class="row-start-1 col-span-2" src="@/assets/img/top-destinations-4.svg" alt="Vietnam" />
        <img class="row-start-2 row-span-1" src="@/assets/img/top-destinations-5.svg" alt="Vietnam" />
        <img class="row-start-2 row-span-1" src="@/assets/img/top-destinations-6.svg" alt="Vietnam" />
      </div>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
