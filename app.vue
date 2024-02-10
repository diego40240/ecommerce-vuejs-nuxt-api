<script setup>
import { ref, onMounted } from "vue";
import { getEspecificaCategoria } from "@/src/helpers/funcionProductos";
import BannerCarousel from "@/components/BannerCarousel.vue";
import Productos from "@/components/Productos.vue";
import PointerCarousel from "@/components/PointerCarousel.vue";

const paddingX = "md:px-20 lg:px-32 max-md:px-4";
const productos = ref([]);
const oldCategoria = ref("");

async function getProductosCategoria(categoria) {
  if (oldCategoria.value !== categoria) {
    productos.value = await getEspecificaCategoria(categoria);
    oldCategoria.value = categoria;
  }
}

onMounted(() => {
  getProductosCategoria("all");
});
</script>
<template>
  <NuxtLayout
    name="inicio"
    :paddingX="paddingX"
    :oldCategoria="oldCategoria"
    @fChangeCategoria="getProductosCategoria"
  >
    <main>
      <BannerCarousel :class="paddingX" />
      <Productos
        :paddingX="paddingX"
        :oldCategoria="oldCategoria"
        :productos="productos"
      />
      <PointerCarousel :paddingX="paddingX" />
    </main>
  </NuxtLayout>
</template>
