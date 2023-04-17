<template>
  <v-card>
    <v-card-title>ToDo List</v-card-title>
    <v-card-text>
      <v-text-field label="Tarefa" v-model="newTask" @keyup.enter="addTask" />
      <v-list>
        <v-list-item
          v-for="(task, index) in tasks"
          :key="index"
          class="d-flex justify-space-between align-center"
        >
          <v-list-item-content>
            <v-checkbox v-model="task.completed" color="primary" />
            {{ task.description }}
          </v-list-item-content>
          <v-btn color="error" @click="removeTask(index)">Remover</v-btn>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Task {
  description: string;
  completed: boolean;
}

const newTask = ref("");
const tasks = ref<Task[]>([]);

function addTask() {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ description: newTask.value, completed: false });
    newTask.value = "";
  }
}

function removeTask(index: number) {
  tasks.value.splice(index, 1);
}

export default defineComponent({
  setup() {
    return {
      newTask,
      tasks,
      addTask,
      removeTask,
    };
  },
});
</script>

<style scoped>
.v-list-item-content {
  display: flex;
  align-items: center;
}
</style>
