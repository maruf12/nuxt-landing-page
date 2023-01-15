<template>
  <div>
    <div class="flex justify-between">
      <div>
        <nuxt-img 
          src="/Logo_kk4fqp.png"
          width="98"
          height="35"
          preload
          provider="cloudinary"
          format="webp"
          alt="logo"
        />
      </div>
      <div>
        <button class="btn-cta flex w-[8rem] lg:w-[9rem] items-center justify-center rounded-[30px] border-2 border-[#F66F4D] bg-transparent px-2 py-2 lg:px-4 lg:py-3 text-base font-base text-[#F66F4D] shadow-sm hover:bg-[#F66F4D] hover:text-white" aria-label="Book Now">
          Book Now
          <img class="ml-2 img-cta" src="@/assets/img/send-primary.svg" width="16" height="15" alt="Icon Location" />
          <img class="ml-2 img-cta-hover" src="@/assets/img/send.svg" width="16" height="15" alt="Icon Location" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .btn-cta .img-cta-hover {
    display: none;
  }
  
  .btn-cta:hover .img-cta-hover {
    display: inline;
  }

  .btn-cta:hover .img-cta {
    display: none;
  }
</style>