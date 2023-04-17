<template>
  <v-card>
    <v-card-title>ToDo</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="newTask"
        label="Nova tarefa"
        @keyup.enter="addTask"
      ></v-text-field>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-checkbox
            v-model="task.done"
            @change="updateTask(index, task)"
          ></v-checkbox>
          <v-list-item-title :class="{ 'task-done': task.done }">{{
            task.text
          }}</v-list-item-title>
          <v-btn icon @click="deleteTask(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Task {
  text: string;
  done: boolean;
}

export default defineComponent({
  setup() {
    const tasks = ref<Task[]>([{ text: "Exemplo de tarefa", done: false }]);
    const newTask = ref("");

    function addTask() {
      if (newTask.value.trim() !== "") {
        tasks.value.push({ text: newTask.value.trim(), done: false });
        newTask.value = "";
      }
    }

    function deleteTask(index: number) {
      tasks.value.splice(index, 1);
    }

    function updateTask(index: number, updatedTask: Task) {
      tasks.value[index] = updatedTask;
    }

    return {
      tasks,
      newTask,
      addTask,
      deleteTask,
      updateTask,
    };
  },
});
</script>
<style scoped>
.task-done {
  text-decoration: line-through;
}
</style>
