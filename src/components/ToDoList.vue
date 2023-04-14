<template>
  <v-card>
    <v-card-title>
      ToDo List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="newTask"
        label="Nova Tarefa"
        @keyup.enter="addTask"
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="(task, index) in tasks"
          :key="index"
          class="task-item"
        >
          <v-list-item-content>
            <v-list-item-title>{{ task.text }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="deleteTask(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const tasks = ref<any[]>([]);
    const newTask = ref("");

    function addTask() {
      if (newTask.value.trim()) {
        tasks.value.push({ text: newTask.value.trim() });
        newTask.value = "";
      }
    }

    function deleteTask(index: number) {
      tasks.value.splice(index, 1);
    }

    return {
      tasks,
      newTask,
      addTask,
      deleteTask,
    };
  },
});
</script>
<style scoped>
.task-item {
  background-color: #f5f5f5;
  margin-bottom: 1rem;
  border-radius: 5px;
}
</style>
