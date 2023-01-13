<template>
  <div class="flex flex-col-reverse lg:flex-row">
    <div class="flex-1 flex justify-center mt-10 lg:mt-0">
      <img src="/testimoni.png" alt="testimoni" width="290" />
    </div>
    <div class="flex-1 self-center lg:pl-24">
      <div class="pt-2 bg-[#FFD482] w-[50px] rounded-md"></div>
      <h2 class="mt-5 font-semibold text-2xl tracking-wider lg:text-5xl text-[#2D3134]">A Customer Said About Us:</h2>
      <div class="bg-white px-8 py-6 rounded-xl w-[20rem] md:w-[29rem] mt-8 shadow">
        <p class="font-extralight tracking-wide text-sm lg:text-base">Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.</p>
        <div class="mt-6 flex">
          <div v-for="item in 5" :key="item" class="px-[1px]">
            <img src="@/assets/img/star.svg" alt="testimoni" width="15" />
          </div>
        </div>
        <p class="font-semibold mt-2 text-[#2D3134]">Andrew Sarma</p>
        <p class="font-extralight text-sm leading-none text-[#2D3134]">Entepreneur</p>
      </div>
    </div>
  </div>
</template>
