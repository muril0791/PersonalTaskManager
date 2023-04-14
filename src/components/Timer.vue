<template>
  <v-card>
    <v-card-title>Timer</v-card-title>
    <v-card-text>
      <div class="timer-display">{{ formattedTime }}</div>
      <v-btn color="primary" @click="startTimer">Iniciar</v-btn>
      <v-btn color="error" @click="stopTimer">Parar</v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

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

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

const formattedTime = computed(() => formatTime(time.value));

export default defineComponent({
  name: "MyTimer",
  setup() {
    return {
      formattedTime,
      startTimer,
      stopTimer,
    };
  },
  beforeUnmount() {
    stopTimer();
  },
});
</script>
<style scoped>
.timer-display {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
