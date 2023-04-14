<template>
  <v-card>
    <v-card-title>To-Do List</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Adicionar nova tarefa"
        label="Nova Tarefa"
      ></v-text-field>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-list-item-content>{{ task }}</v-list-item-content>
          <v-list-item-action>
            <v-btn text icon @click="removeTask(index)">
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
  name: "MyToDo",
  setup() {
    const newTask = ref("");
    const tasks = ref<string[]>([]);

    function addTask() {
      tasks.value.push(newTask.value);
      newTask.value = "";
    }

    function removeTask(index: number) {
      tasks.value.splice(index, 1);
    }

    return {
      newTask,
      tasks,
      addTask,
      removeTask,
    };
  },
});
</script>
