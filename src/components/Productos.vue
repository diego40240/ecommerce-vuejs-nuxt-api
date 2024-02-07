<script setup>
import { ref, computed, onMounted } from "vue";
const props = defineProps({
  paddingX: String,
  oldCategoria: String,
  productos: Object,
});

const mostrarViewAll = ref(false);

const alturaGridProductos = computed(() => {
  return mostrarViewAll.value ? "max-h-[2000px]" : "max-h-[291px] ";
});

onMounted(() => {});
</script>
<template>
  <section :class="[props.paddingX]" class="flex flex-col gap-5">
    <div
      class="flex items-center justify-between border-b-[1px] border-b-border"
    >
      <h2
        class="relative py-4 font-bold text-ctext after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-lg after:bg-primary sm:text-2xl"
      >
        Grab the best deal on
        <b class="capitalize text-primary">{{ props.oldCategoria }}</b>
      </h2>
      <input
        type="checkbox"
        name="viewAll"
        id="viewAll"
        hidden
        v-model="mostrarViewAll"
      />
      <label
        for="viewAll"
        class="flex cursor-pointer items-center justify-center gap-4 font-medium capitalize text-heading max-sm:hidden max-sm:text-sm"
      >
        <span>View all</span>
        <div class="flex h-3 w-3 items-center justify-center">
          <svg
            class="fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            />
          </svg>
        </div>
      </label>
    </div>
    <!-- grid-cols-autofit -->
    <div
      role="gridProductos"
      class="grid grid-cols-[repeat(auto-fit,minmax(224px,1fr))] gap-4 overflow-hidden duration-300"
      :class="alturaGridProductos"
    >
      <article
        class="rounded-xl border-[1px] border-border"
        v-for="producto in productos"
        :key="producto.id"
      >
        <div class="h-44 rounded-t-xl bg-background_1 py-2">
          <img
            class="h-full w-full object-contain"
            :src="producto.image"
            :alt="producto.title"
          />
        </div>
        <div class="flex flex-col p-3">
          <h3
            class="line-clamp-2 min-h-12 overflow-hidden text-ellipsis font-semibold text-heading"
          >
            {{ producto.title }}
          </h3>

          <span
            class="mt-2 h-1/2 border-t-[1px] border-border pt-2 font-semibold text-[#249B3E]"
            >${{ producto.price }}</span
          >
        </div>
      </article>
    </div>
  </section>
</template>
