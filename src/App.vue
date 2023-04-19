<template>
  <v-app>
    <v-switch
      label="Modo Escuro"
      v-model="$vuetify.theme.dark"
      color="white"
      class="mr-5"
    ></v-switch>
    <v-main>
      <h1>Sistema de Controle Pessoal</h1>
      <ToDoList />
      <Timer />
      <Emails />
      <GoogleCalendar />
      <DrawingArea />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoList from "./components/ToDoList.vue";
import Timer from "./components/Timer.vue";
import DrawingArea from "./components/DrawingArea.vue";

export default defineComponent({
  data: () => ({
    darkMode: false,
  }),
  components: {
    ToDoList,
    Timer,
    DrawingArea,
  },
});
</script>
