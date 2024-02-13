<script setup>
import { ref, computed, watch, onMounted } from "vue";
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
const cargaPointer = ref(true);

onNuxtReady(() => {
  setInterval(() => {
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
    // Obtener el ancho de la ventana
    windowWidth = window.innerWidth;
  
  })

    const largo = windowWidth <= "1024" ? imagenes.value.length - 1: imagenes.value.length - 3;

    if (posicionCarousel.value < largo) {
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
onMounted(() => {
  cargaPointer.value = false;
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
    <div
      v-if="cargaPointer"
      class="flex lg:gap-4"
    ><div v-for="(_, index) in 3"
        :key="index"
      class="max-sm:h-[104px] sm:h-[228px] min-w-full lg:w-[33%] animate-pulse rounded-3xl border-[1px] bg-slate-400"></div>
  </div>

    <div v-else class="flex flex-nowrap overflow-hidden rounded-3xl lg:gap-4">
      <img
        class="rounded-3xl object-cover duration-300 max-lg:min-w-full lg:min-w-[33%]"
        :style="cambioPosicion"
        v-for="(imagen, index) in imagenes"
        :key="index"
        :src="imagen"
        :alt="'oferta_' + (index + 1)"
      />
    </div>
    <div class="flex items-center justify-center gap-2">
      <input
        v-for="(_, index) in imagenes.length"
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
        v-for="(_, index) in imagenes.length"
        :key="index"
        :id="'label_' + index"
        :class="[index == 0 ? 'w-6 bg-primary' : 'bg-line'],[index >= imagenes.length - 2 ? 'lg:hidden':'']"
        class="size-2 cursor-pointer rounded-full duration-300"
      ></label>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
