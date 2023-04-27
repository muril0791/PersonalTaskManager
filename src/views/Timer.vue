<template>
  <v-app>
    <Timer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Timer from "./components/Timer.vue";

export default defineComponent({
  data: () => ({
    darkMode: false,
  }),
  components: {
    Timer,
  },
});
</script>
