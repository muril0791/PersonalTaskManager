<template>
  <v-card ref="todoCard" v-resize="onResize" class="resizeable-card">
    <v-card-title>
      Lista de Tarefas
      <v-spacer></v-spacer>
      <v-text-field
        v-model="newTask"
        clearable
        placeholder="Adicionar nova tarefa"
        @keyup.enter="addTask"
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
              <td>
                <v-checkbox
                  :label="task.title"
                  :input-value="task.completed"
                  @change="taskCompleted(index)"
                ></v-checkbox>
              </td>
              <td>
                <v-text-field
                  :value="task.description"
                  clearable
                  placeholder="Adicionar descrição"
                  @change="updateDescription(index, $event)"
                ></v-text-field>
              </td>
              <td>
                <v-btn text color="error" @click="removeTask(index)">
                  Remover
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Resize } from "vuetify/lib/directives";

export default defineComponent({
  directives: {
    resize: Resize,
  },
  setup() {
    const tasks = ref([
      { title: "Tarefa 1", completed: false, description: "" },
      { title: "Tarefa 2", completed: false, description: "" },
    ]);
    const newTask = ref("");
    const todoCard = ref<HTMLElement | null>(null);

    function addTask() {
      if (newTask.value.trim() !== "") {
        tasks.value.push({
          title: newTask.value.trim(),
          completed: false,
          description: "",
        });
        newTask.value = "";
      }
    }

    function removeTask(index: number) {
      tasks.value.splice(index, 1);
    }

    function taskCompleted(index: number) {
      tasks.value[index].completed = !tasks.value[index].completed;
    }

    function updateDescription(index: number, updatedTask: string) {
      tasks.value[index].description = updatedTask;
    }

    function onResize(event: { width: number; height: number }) {
      if (todoCard.value) {
        todoCard.value.style.width = event.width + "px";
        todoCard.value.style.height = event.height + "px";
      }
    }

    return {
      tasks,
      newTask,
      todoCard,
      addTask,
      removeTask,
      taskCompleted,
      updateDescription,
      onResize,
    };
  },
});
</script>

<style scoped>
.resizeable-card {
  resize: both;
  overflow: auto;
}
</style>
