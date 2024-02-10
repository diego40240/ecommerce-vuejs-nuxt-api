<script setup>
import Navbar from "@/components/Navbar.vue";
import Anuncios from "@/components/Anuncios.vue";

const props = defineProps({
  paddingX: String,
  oldCategoria: String,
});
const emit = defineEmits(["fChangeCategoria"]);

// function fChangeCategoria(categoria) {
//   emit("fChangeCategoria", categoria);
// }
</script>
<template>
  <header>
    <Anuncios :class="paddingX" />
    <Navbar
      :paddingX="paddingX"
      :oldCategoria="oldCategoria"
      @fChangeCategoria="$emit('fChangeCategoria', $event)"
    />
  </header>
  <slot />
</template>
