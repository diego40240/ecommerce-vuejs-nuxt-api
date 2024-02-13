<script setup>
import Navbar from "@/components/Navbar.vue";
import Anuncios from "@/components/Anuncios.vue";

// const props = defineProps({
//   paddingX: String,
//   oldCategoria: String,
// });
const layoutProps = useAttrs();
const emit = defineEmits(["fChangeCategoria"]);

// function fChangeCategoria(categoria) {
//   emit("fChangeCategoria", categoria);
// }
</script>
<template>
  <section>
    <header>
      <Anuncios :class="layoutProps.paddingX" />
      <Navbar
        :paddingX="layoutProps.paddingX"
        :oldCategoria="layoutProps.oldCategoria"
        @fChangeCategoria="$emit('fChangeCategoria', $event)"
      />
    </header>
    <slot />
  </section>
</template>
