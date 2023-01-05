<template>
  <div>
    <div class="flex justify-between">
      <div class="w-2/6">
        <h2 class="font-semibold text-4xl leading-none tracking-wider lg:text-5xl lg:leading-none lg:tracking-wide text-[#2D3134] font-sans">Find Popular Destination</h2>
      </div>
      <div class="self-center">
        <button class="mx-1 py-2 px-3 rounded-full border border-[#3D3D3D] bg-transparent text-base font-base text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
          <img src="@/assets/img/prev.svg" alt="previous-icon" />
        </button>
        <button class="py-2 px-3 rounded-full border border-[#3D3D3D] bg-transparent text-base font-base text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
          <img src="@/assets/img/next.svg" alt="next-icon" />
        </button>
      </div>
    </div>
    <div class="flex mt-8">
      <div v-for="i in 4" :key="i" class="mx-3 bg-transparent border-2 border-white w-[350px] pt-3 pb-6 px-3 rounded-2xl shadow-md">
        <img src="@/assets/img/populer-1.svg" alt="populer" />
        <h4 class="mt-5 ml-2 font-medium text-lg text-[#2D3134]">{{ 'Mountain Hiking Tour' }}</h4>
        <p class="ml-2 font-extralight tracking-wide text-sm">{{ 'Mountain Hiking Tour' }}</p>
        <div class="mt-5 flex justify-between">
          <p class="ml-2 font-medium text-lg text-[#2D3134]">
            $89 
            <span class="font-light tracking-wide text-sm">/ Person</span>
          </p>
          <button class="flex items-center justify-center rounded-[30px] border border-[#3D3D3D] bg-transparent px-3 py-2 text-sm text-[#3D3D3D] shadow-sm hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
            {{ 'Book Now' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
