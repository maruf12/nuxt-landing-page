<template>
  <div>
    <div class="flex justify-between">
      <div class="lg:w-2/6">
        <h2 class="font-semibold text-4xl leading-none tracking-wider lg:text-5xl lg:leading-none lg:tracking-wide text-[#2D3134] font-sans">Find Popular Destination</h2>
      </div>
    </div>
    <div class="mt-8 media-scroller snaps-inline">
      <div v-for="item in popularDestinationData" :key="item" class="bg-transparent border-2 border-white pt-3 pb-6 px-3 rounded-2xl shadow-md">
        <nuxt-img
          :src="item.img"
          provider="cloudinary"
          width="724"
          height="504"
          loading="lazy"
          format="webp"
          :alt="item.desc"
        />
        <h4 class="mt-5 ml-2 font-medium text-lg text-[#2D3134]">{{ item.name }}</h4>
        <p class="ml-2 font-extralight tracking-wide text-sm">{{ item.desc }}</p>
        <div class="mt-5 flex justify-between">
          <p class="ml-2 font-medium text-lg text-[#2D3134]">
            {{ item.price }} 
            <span class="font-light tracking-wide text-xs lg:text-sm">/ {{ item.quantity }}</span>
          </p>
          <button class="flex items-center justify-center rounded-[30px] border border-[#3D3D3D] bg-transparent px-3 py-2 text-sm text-[#3D3D3D] shadow-sm hover:bg-[#3D3D3D] hover:text-white focus:bg-[#3D3D3D] focus:text-white active:bg-[#3D3D3D] active:text-white" aria-label="Book Now Place">
            {{ 'Book Now' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const popularDestinationData = ref([
    {
      name: 'Mountain Hiking Tour',
      desc: 'Mountain hiking tour',
      price: '$89',
      quantity: 'Person',
      img: '/popular-1_jc1kwh.png'
    },
    {
      name: 'Machu Picchu, Peru',
      desc: 'Machu picchu, peru',
      price: '$99',
      quantity: 'Person',
      img: '/popular-2_vwetoq.png'
    },
    {
      name: 'The Grand Canyon, Arizona',
      desc: 'The grand canyon, Arizona',
      price: '$79',
      quantity: 'Person',
      img: '/popular-4_s7hlmh.png'
    },
    {
      name: 'Roma, Italia',
      desc: 'Roma, Italia',
      price: '$79',
      quantity: 'Person',
      img: '/popular-1_jc1kwh.png'
    },
    {
      name: 'Mountain Hiking Tour',
      desc: 'Mountain hiking tour',
      price: '$89',
      quantity: 'Person',
      img: '/popular-2_vwetoq.png'
    },
    {
      name: 'The Grand Canyon, Arizona',
      desc: 'The grand canyon, Arizona',
      price: '$79',
      quantity: 'Person',
      img: '/popular-4_s7hlmh.png'
    }
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

  @apply grid gap-x-7 grid-flow-col auto-cols-[75%] md:auto-cols-[41%] lg:auto-cols-[29%] pb-6;
  overflow-x: scroll;
  overscroll-behavior-inline: contain;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 5rem);
}

.snaps-inline > * {
  scroll-snap-align: start;

}
</style>
