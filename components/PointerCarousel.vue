<script setup>
import { ref, computed, watch } from "vue";
import oferta_1 from "@/src/assets/img/oferta_1.jpg";
import oferta_2 from "@/src/assets/img/oferta_2.jpg";
import oferta_3 from "@/src/assets/img/oferta_3.jpg";
import oferta_4 from "@/src/assets/img/oferta_4.jpg";
import oferta_5 from "@/src/assets/img/oferta_5.jpg";
import oferta_6 from "@/src/assets/img/oferta_6.jpg";
const props = defineProps({
  paddingX: String,
});
const imagenes = ref([
  oferta_1,
  oferta_2,
  oferta_3,
  oferta_4,
  oferta_5,
  oferta_6,
]);
const posicionCarousel = ref(0);
onNuxtReady(() => {
  setInterval(() => {
    if (posicionCarousel.value < imagenes.value.length - 1) {
      posicionCarousel.value++;
    } else {
      posicionCarousel.value = 0;
    }
  }, 3000);
});

const cambioPosicion = computed(() => {
  return `translate: -${posicionCarousel.value * 100}%`;
});

// Observar cambios en posicionCarousel
watch(posicionCarousel, (newValue, oldValue) => {
  const label = document.querySelector(`#label_${newValue}`);
  const labelClass = document.querySelector(`#label_${oldValue}`);

  if (labelClass) {
    labelClass.classList.remove("bg-primary", "w-6");
    labelClass.classList.add("bg-line");
  }

  if (label) {
    label.classList.remove("bg-line");
    label.classList.add("bg-primary", "w-6");
  }
});
</script>
<template>
  <section :class="[props.paddingX]" class="flex flex-col gap-5 py-10">
    <div
      class="flex items-center justify-between border-b-[1px] border-b-border"
    >
      <h2
        class="relative py-4 font-bold text-ctext after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-lg after:bg-primary sm:text-2xl"
      >
        Grab the best deal on
        <b class="capitalize text-primary">Brands</b>
      </h2>
    </div>
    <div class="flex flex-nowrap overflow-hidden rounded-3xl">
      <img
        class="min-w-full rounded-3xl object-cover duration-300"
        :style="cambioPosicion"
        v-for="(imagen, index) in imagenes"
        :key="index"
        :src="imagen"
        :alt="'oferta_' + (index + 1)"
      />
    </div>
    <div class="flex items-center justify-center gap-2">
      <input
        v-for="(imagen, index) in imagenes"
        :key="index"
        type="radio"
        name="posicion-carousel"
        :id="index + 1"
        :value="index"
        v-model="posicionCarousel"
        hidden
      />

      <label
        :for="index + 1"
        v-for="(imagen, index) in imagenes"
        :key="index"
        :id="'label_' + index"
        :class="index == 0 ? 'w-6 bg-primary' : 'bg-line'"
        class="size-2 cursor-pointer rounded-full duration-300"
      ></label>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
