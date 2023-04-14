<template>
  <v-app>
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
// import Emails from "./components/Emails.vue";
// import GoogleCalendar from "./components/GoogleCalendar.vue";
import DrawingArea from "./components/DrawingArea.vue";

export default defineComponent({
  components: {
    ToDoList,
    Timer,
    // Emails,
    // GoogleCalendar,
    DrawingArea,
  },
});
</script>
