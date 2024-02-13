<script setup>
import { ref } from "vue";
definePageMeta({
  pageTransition: {
    name: "",
    mode: "out-in",
  },
  middleware: ["transition-pages"],
  // middleware(to, from) {
  //   to.meta.pageTransition.name = "slide-left";
  //   from.meta.pageTransition.name = "slide-left";
  // },
});
</script>
<template>
  <div>PRUEBA</div>
</template>
