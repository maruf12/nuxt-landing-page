<template>
  <div class="flex justify-center bg-[#FFD482] rounded-3xl py-4 lg:py-10">
    <div class="w-4/5 lg:w-2/5">
      <h2 class="mt-5 font-semibold text-center text-2xl tracking-wider lg:text-4xl text-[#2D3134]">Sign up to our newsletter</h2>
      <p class="mt-3 font-extralight tracking-widest text-center text-sm lg:text-base">Reciev latest news, update, and many other things every week. </p>
      <div class="relative my-6 pt-3">
        <input type="search" id="default-search" class="block w-full p-4 pl-10 py-4 text-base text-gray-900 border-0 rounded-xl bg-[#FDFEFF] focus:ring-orange-600 focus:border-orange-600" placeholder="Enter your email" required>
        <button type="submit" class="text-white absolute right-3 bottom-2.5 bg-[#F66F4D] hover:bg-[#db5230] focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-xl text-sm px-3 py-3">
          <img src="@/assets/img/send.svg" alt="Icon Location" />
        </button>
      </div>
    </div>
  </div>
</template>
