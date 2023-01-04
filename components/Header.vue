<template>
  <div class="flex flex-col lg:flex-row mt-10">
    <div class="flex-1 flex self-center lg:mr-2">
      <div>
        <h1 class="font-semibold text-4xl leading-none tracking-wider lg:text-7xl lg:leading-none lg:tracking-wider text-[#2D3134] font-sans">Discover the <br> Best Lovely <br> Places</h1>
        <p class="pt-4 font-light tracking-wide text-sm lg:text-xl">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>

        <div class="mt-10">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <img src="@/assets/img/location-icon.svg" alt="Icon Location" width="15" />
            </div>
            <input type="search" id="default-search" class="block w-full p-4 pl-10 py-6 text-base text-gray-900 border-0 rounded-full bg-[#FDFEFF] focus:ring-orange-600 focus:border-orange-600" placeholder="Search Destination..." required>
            <button type="submit" class="text-white absolute right-3 bottom-3 bg-[#F66F4D] hover:bg-[#db5230] focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-full text-sm px-3 py-3">
              <svg aria-hidden="true" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
    <div class="flex-1 mt-10 lg:ml-32 lg:pl-20">
      <img src="@/assets/img/hero-img.svg" alt="Hero Image" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>