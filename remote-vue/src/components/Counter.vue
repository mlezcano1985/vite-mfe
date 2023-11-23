<script setup>
import { ref } from "vue";

defineProps({
  text: String,
});

const increment = () => {
  count.value++;

  document.dispatchEvent(
    new CustomEvent("INCREMENT", {
      detail: {
        count: count.value,
      },
    })
  );
};

const count = ref(0);
</script>
<template>
  <div>
    <h2>{{ text }}</h2>
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>
</template>
