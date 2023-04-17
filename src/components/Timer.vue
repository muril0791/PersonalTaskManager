<template>
  <v-card>
    <v-card-title>Timer</v-card-title>
    <v-card-text>
      <div class="timer-display">{{ formattedTime }}</div>
      <v-btn color="primary" @click="startTimer">Iniciar</v-btn>
      <v-btn color="error" @click="stopTimer">Parar</v-btn>
      <v-btn color="warning" @click="resetTimer">Resetar</v-btn>
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

function resetTimer() {
  stopTimer();
  time.value = 0;
}

const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600);
  const minutes = Math.floor((time.value % 3600) / 60);
  const seconds = time.value % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});

export default defineComponent({
  name: "MyTimer",
  setup() {
    return {
      time,
      startTimer,
      stopTimer,
      resetTimer,
      formattedTime,
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
  text-align: center;
}
</style>
