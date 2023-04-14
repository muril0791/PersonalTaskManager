<template>
  <v-card>
    <v-card-title>Timer</v-card-title>
    <v-card-text>
      <div>{{ time }}</div>
      <v-btn @click="startTimer">Iniciar</v-btn>
      <v-btn @click="stopTimer">Parar</v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const time = ref(0);
const timer = ref<ReturnType<typeof setInterval> | null>(null);

function startTimer() {
  if (!timer.value) {
    timer.value = setInterval(() => {
      time.value++;
    }, 1000);
  }
}

function stopTimer() {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
}

export default defineComponent({
  name: "MyTimer",
  setup() {
    return {
      time,
      startTimer,
      stopTimer,
    };
  },
  beforeUnmount() {
    stopTimer();
  },
});
</script>
