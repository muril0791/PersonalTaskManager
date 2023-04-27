<template>
  <v-app>
    <ToDoList />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoList from "./components/ToDoList.vue";

export default defineComponent({
  data: () => ({
    darkMode: false,
  }),
  components: {
    ToDoList,
  },
});
</script>
