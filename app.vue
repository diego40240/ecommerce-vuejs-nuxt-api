<script setup>
import Productos from "@/src/components/Productos.vue";
import Navbar from "@/src/components/Navbar.vue";
import Anuncios from "@/src/components/Anuncios.vue";
import { ref, onMounted } from "vue";
import BannerCarousel from "@/src/components/BannerCarousel.vue";
import PointerCarousel from "@/src/components/PointerCarousel.vue";

const paddingX = "md:px-20 lg:px-32 max-md:px-4";
const productos = ref([]);
const oldCategoria = ref("");

function getEspecificaCategoria(categoria) {
  if (oldCategoria.value !== categoria) {
    let url = "";
    if (categoria == "all") {
      url = "https://fakestoreapi.com/products";
    } else {
      url = `https://fakestoreapi.com/products/category/${categoria}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((productosCategoria) => (productos.value = productosCategoria));

    oldCategoria.value = categoria;
  }
}

onMounted(() => {
  getEspecificaCategoria("all");
});
</script>
<template>
  <main>
    <Anuncios :class="paddingX" />
    <Navbar
      :paddingX="paddingX"
      :oldCategoria="oldCategoria"
      @fChangeCategoria="getEspecificaCategoria"
    />
    <BannerCarousel :class="paddingX" />
    <Productos
      :paddingX="paddingX"
      :oldCategoria="oldCategoria"
      :productos="productos"
    />
    <PointerCarousel :paddingX="paddingX" />
  </main>
</template>
