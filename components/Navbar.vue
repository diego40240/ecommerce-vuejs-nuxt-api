<script setup>
import { ref, onMounted } from "vue";
import { getCategorias } from "@/src/helpers/funcionProductos";
const props = defineProps({
  paddingX: String,
  oldCategoria: String,
});
defineEmits(["fChangeCategoria"]);

const btnMenuBar = ref(false);

const categorias = ref([]);

// function getCategorias() {
//   const responseCategorias = fetch(
//     "https://fakestoreapi.com/products/categories",
//   )
//     .then((responseCategorias) => responseCategorias.json())
//     .then((data) => (categorias.value = data));
// }
async function getDatosCategorias() {
  categorias.value = await getCategorias();
}
// const activarCategoria = computed(() => {
//   return (oldCategoria, categoria) => {
//     return oldCategoria === categoria
//       ? "bg-primary text-white"
//       : "text-heading bg-background_3";
//   };
// });

const activarCategoria = (categoria) => {
  return props.oldCategoria === categoria
    ? "bg-primary text-white"
    : "text-heading bg-background_3 hover:bg-primary hover:bg-opacity-65 hover:text-white";
};

onMounted(() => {
  // getCategorias();
  getDatosCategorias();
});
</script>
<template>
  <nav
    class="flex items-center justify-between border-b-[1px] border-b-border py-2"
    :class="props.paddingX"
  >
    <div class="flex items-center justify-center gap-4">
      <input
        v-model="btnMenuBar"
        type="checkbox"
        name="menubar"
        id="menubar"
        hidden
      />
      <label for="menubar" class="cursor-pointer">
        <div v-if="btnMenuBar" class="h-12 w-12 rounded-lg bg-background_3 p-3">
          <svg
            class="fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        <div v-else class="h-12 w-12 rounded-lg p-3 hover:bg-background_3">
          <svg
            class="fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
      </label>
      <h1 class="text-2xl font-bold text-primary">Mart</h1>
    </div>
    <div>
      <ul
        class="flex gap-4 font-medium [&>li>div]:flex [&>li>div]:items-center [&>li>div]:justify-center md:[&>li>div]:mr-2 [&>li]:flex [&>li]:items-center [&>li]:justify-center"
      >
        <li class="border-r-2 border-[#D9D9D9] px-4">
          <div class="h-5 w-5 md:h-4 md:w-4">
            <svg
              class="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </div>
          <span class="max-md:hidden">Sign Up/Sign In</span>
        </li>
        <li>
          <div class="h-5 w-5 md:h-4 md:w-4">
            <svg
              class="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </div>
          <span class="max-md:hidden">Cart</span>
        </li>
      </ul>
    </div>
  </nav>
  <div
    class="z-20 flex items-center justify-start overflow-hidden rounded-br-md border-b-[1px] border-b-border bg-white duration-300 max-md:absolute max-md:min-w-fit max-md:max-w-full max-md:border-r-[1px] max-md:border-r-border max-md:py-3"
    :class="[
      props.paddingX,
      btnMenuBar
        ? 'max-md:-translate-x-0 md:h-16'
        : 'max-md:-translate-x-full md:h-0',
    ]"
  >
    <ul
      class="flex gap-4 text-sm font-medium capitalize max-md:flex-col max-md:gap-3 md:items-center"
    >
      <button
        class="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-background_3 px-4 py-2 text-heading"
        @click="$emit('fChangeCategoria', 'all')"
        :class="[activarCategoria('all')]"
      >
        <span>All</span>
      </button>
      <li
        class="flex cursor-pointer items-center justify-center gap-2 rounded-2xl px-4 py-2"
        v-for="(categoria, index) in categorias"
        :key="index"
        @click="$emit('fChangeCategoria', categoria)"
        :class="[activarCategoria(categoria)]"
      >
        <span>{{ categoria }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
