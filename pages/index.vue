<script setup>
import BannerCarousel from "@/components/BannerCarousel.vue";
import Productos from "@/components/Productos.vue";
import PointerCarousel from "@/components/PointerCarousel.vue";

definePageMeta({
  pageTransition: {
    name: "",
    mode: "out-in",
  },
  middleware: ["transition-pages"],
  // middleware(to, from) {
  //   to.meta.pageTransition.name = "slide-right";
  //   from.meta.pageTransition.name = "slide-right";
  //   console.log(to.meta.pageTransition.name);
  // },
});
</script>
<template>
  <main :class="$attrs.paddingX">
    <BannerCarousel />
    <Productos
      :oldCategoria="$attrs.oldCategoria"
      :productos="$attrs.productos"
      :skeletonProductos="$attrs.skeletonProductos"
    />
    <PointerCarousel />
  </main>
</template>
