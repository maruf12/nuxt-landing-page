<template>
  <div>
    <div class="flex justify-between">
      <div class="lg:w-2/6">
        <h2 class="font-semibold text-4xl leading-none tracking-wider lg:text-5xl lg:leading-none lg:tracking-wide text-[#2D3134] font-sans">Find Popular Destination</h2>
      </div>
      <!-- <div class="self-center">
        <button class="mx-1 py-2 px-3 rounded-full border border-[#3D3D3D] bg-transparent text-base font-base text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
          <img src="@/assets/img/prev.svg" alt="previous-icon" />
        </button>
        <button class="py-2 px-3 rounded-full border border-[#3D3D3D] bg-transparent text-base font-base text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
          <img src="@/assets/img/next.svg" alt="next-icon" />
        </button>
      </div> -->
    </div>
    <!-- <div class="flex mt-8">
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
    </div> -->
    <div class="mt-8 media-scroller snaps-inline">
      <Suspense>
        <img :src="'assets/img/logo.png'" />
        <div v-for="item in popularDestinationData" :key="item" class="bg-transparent border-2 border-white pt-3 pb-6 px-3 rounded-2xl shadow-md">
          <!-- <img :src="require('../assets/img/popular-1.svg')" alt="populer" /> -->
          <h4 class="mt-5 ml-2 font-medium text-lg text-[#2D3134]">{{ item.name }}</h4>
          <p class="ml-2 font-extralight tracking-wide text-sm">{{ item.desc }}</p>
          <div class="mt-5 flex justify-between">
            <p class="ml-2 font-medium text-lg text-[#2D3134]">
              {{ item.price }} 
              <span class="font-light tracking-wide text-xs lg:text-sm">/ {{ item.quantity }}</span>
            </p>
            <button class="flex items-center justify-center rounded-[30px] border border-[#3D3D3D] bg-transparent px-3 py-2 text-sm text-[#3D3D3D] shadow-sm hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white">
              {{ 'Book Now' }}
            </button>
          </div>
        </div>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
  // import { ref } from 'vue'
  const hello = ref('hello')
  const popularDestinationData = ref([
    {
      name: 'Mountain Hiking Tour',
      desc: 'Mountain hiking tour',
      price: '$89',
      quantity: 'Person',
      img: '@/assets/img/popular-1.svg'
    },
    // {
    //   name: 'Machu Picchu, Peru',
    //   desc: 'Machu picchu, peru',
    //   price: '$99',
    //   quantity: 'Person',
    //   img: 'popular-2.svg'
    // },
    // {
    //   name: 'The Grand Canyon, Arizona',
    //   desc: 'The grand canyon, Arizona',
    //   price: '$79',
    //   quantity: 'Person',
    //   img: 'popular-3'
    // },
    // {
    //   name: 'Roma, Italia',
    //   desc: 'Roma, Italia',
    //   price: '$79',
    //   quantity: 'Person',
    //   img: 'popular-1'
    // },
    // {
    //   name: 'Mountain Hiking Tour',
    //   desc: 'Mountain hiking tour',
    //   price: '$89',
    //   quantity: 'Person',
    //   img: 'popular-2'
    // },
    // {
    //   name: 'The Grand Canyon, Arizona',
    //   desc: 'The grand canyon, Arizona',
    //   price: '$79',
    //   quantity: 'Person',
    //   img: 'popular-3'
    // }
  ])
</script>

<style scoped>
/* @import "https://unpkg.com/open-props";
@import "https://unpkg.com/open-props/normalize.min.css"; */
.media-scroller {
  --_spacer: 2rem;
  /* display: grid; */
  /* gap: var(--_spacer); */
  /* gap: 1rem; */
  /* grid-auto-flow: column; */
  /* grid-auto-columns: 51%; */
  /* padding: 0 var(--_spacer) var(--_spacer); */

  /* overflow-x: auto; */
  /* overscroll-behavior-inline: contain; */
  @apply grid gap-x-7 grid-flow-col auto-cols-[75%] md:auto-cols-[41%] lg:auto-cols-[29%] pb-6 overflow-x-auto overscroll-x-contain;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
  scrollbar-color: red yellow;
}

.snaps-inline > * {
  scroll-snap-align: start;

}
</style>
