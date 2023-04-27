<template>
  <v-app>
    <DrawingArea />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DrawingArea from "./components/DrawingArea.vue";

export default defineComponent({
  data: () => ({
    darkMode: false,
  }),
  components: {
    DrawingArea,
  },
});
</script>
