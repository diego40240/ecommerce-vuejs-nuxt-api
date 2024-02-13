<script setup>
import { ref, onMounted, watch } from "vue";

import { getEspecificaCategoria } from "@/src/helpers/funcionProductos";

const paddingX = "md:px-20 lg:px-32 max-md:px-4";
const productos = ref([]);
const oldCategoria = ref("");
const skeletonProductos = ref(true);

async function getProductosCategoria(categoria) {
  if (oldCategoria.value !== categoria) {
    skeletonProductos.value = true;
    productos.value = await getEspecificaCategoria(categoria);

    oldCategoria.value = categoria;
  }
}
watch(productos, () => {
  skeletonProductos.value = false;
});

onMounted(() => {
  getProductosCategoria("all");
});
</script>

<template>
  <div>
    <NuxtLayout
      name="inicio"
      :paddingX="paddingX"
      :oldCategoria="oldCategoria"
      @fChangeCategoria="getProductosCategoria"
    >
      <NuxtPage
        :paddingX="paddingX"
        :oldCategoria="oldCategoria"
        :productos="productos"
        :skeletonProductos="skeletonProductos"
      />
    </NuxtLayout>
  </div>
</template>
<style>
/*DE CART A INDEX slide-leave-active slide-right-leave-to
slide-leave-active slide-right-leave-to*/
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-100%, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
</style>
