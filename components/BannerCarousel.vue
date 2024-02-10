<script setup>
import { ref, computed } from "vue";
import banner_1 from "@/src/assets/img/banner_1.jpg";
import banner_2 from "@/src/assets/img/banner_2.jpg";
import banner_3 from "@/src/assets/img/banner_3.jpg";

const props = defineProps({
  paddingX: String,
});

const imagenes = ref([banner_1, banner_2, banner_3]);
const countImagen = ref(0);

onNuxtReady(async () => {
  setInterval(() => {
    if (countImagen.value < imagenes.value.length - 1) {
      countImagen.value++;
    } else {
      countImagen.value = 0;
    }
  }, 3000);
});

const carouselTranslate = computed(() => {
  // return `-translate-x-[${countImagen.value * 100}%]`;
  return `translate: -${countImagen.value * 100}%`;
});
function moverCarousel(direccion) {
  if (direccion === "left") {
    countImagen.value > 0
      ? countImagen.value--
      : (countImagen.value = imagenes.value.length - 1);
  }
  if (direccion === "right") {
    countImagen.value < imagenes.value.length - 1
      ? countImagen.value++
      : (countImagen.value = 0);
  }
}
</script>
<template>
  <section
    id="BannerCorousel"
    class="flex items-center py-5"
    :class="props.paddingX"
  >
    <div
      class="lg:px-30 absolute left-0 z-10 flex w-full items-center justify-between max-md:px-1 md:px-10 lg:px-[88px]"
    >
      <button
        class="flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white bg-background_3 hover:shadow-inner max-md:h-7 max-md:w-7 max-md:border-[3px]"
        type="button"
        @click="moverCarousel('left')"
      >
        <svg
          class="h-6 w-6 fill-primary max-md:h-4 max-md:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </button>
      <button
        class="flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white bg-background_3 hover:shadow-inner max-md:h-7 max-md:w-7 max-md:border-[3px]"
        type="button"
        @click="moverCarousel('right')"
      >
        <svg
          class="h-6 w-6 fill-primary max-md:h-4 max-md:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-nowrap overflow-hidden rounded-3xl">
      <img
        class="min-w-full object-contain duration-300"
        :style="carouselTranslate"
        v-for="(imagen, index) in imagenes"
        :key="index"
        :src="imagen"
        :alt="'banner_' + (index + 1)"
      />
    </div>
  </section>
</template>
