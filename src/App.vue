<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Sistema de Controle Pessoal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        label="Modo Escuro"
        v-model="$vuetify.theme.dark"
        color="white"
        class="mr-5"
      ></v-switch>
    </v-app-bar>
    <v-navigation-drawer app height="100vh">
      <v-list dense>
        <v-list-item to="/to-do-list">
          <v-list-item-action>
            <v-icon>mdi-format-list-checkbox</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Lista de Tarefas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/timer">
          <v-list-item-action>
            <v-icon>mdi-timer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Timer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/drawing-area">
          <v-list-item-action>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Área de Desenho</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    darkMode: false,
  }),
});
</script>
