<template>
  <div class="col-12 d-flex justify-content-center">
    <div>
      <span class="pagination-border px-3 py-2">{{ currentPage }}</span> of
      {{ numberOfPages }}
    </div>
    <img
      src="../assets/chevron-down3.svg"
      alt=""
      class="ml-3 c-pointer"
      @click="previousPage"
    />
    <img src="../assets/chevron-down4.svg" class="c-pointer" alt="" @click="nextPage" />
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
export default {
  props: ["list", "pageList", "numberPerPage"],
  emits: ["paginated"],
  setup(props, { emit }) {
    const numberOfPages = ref(0);
    const currentPage = ref(1);

    const getNumberOfPages = () => {
      return Math.ceil(props.list.length / props.numberPerPage);
    };

    watchEffect(() => {
      if (props.list.length > 0) {
        numberOfPages.value = getNumberOfPages();
      }
    });

    const nextPage = () => {
          currentPage.value += 1;
          loadList();
    };

    const previousPage = () => {
      currentPage.value -= 1;
      loadList();
    };

    const loadList = () => {
      const begin = (currentPage.value - 1) * props.numberPerPage;
      const end = begin + props.numberPerPage;
      let pageList = props.list.slice(begin, end);
      console.log(currentPage.value, begin, end, "gfdgvfds");
      emit("paginated", pageList);
    };
    loadList();

    return {
      numberOfPages,
      getNumberOfPages,
      nextPage,
      previousPage,
      loadList,
      currentPage,
    };
  },
};
</script>

<style scoped>
.pagination-border {
  mix-blend-mode: normal;
  opacity: 0.6;
  border: 1px solid #a4b0a3;
  border-radius: 3px;
}
</style>