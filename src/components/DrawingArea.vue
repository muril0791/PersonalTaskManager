<template>
  <v-card>
    <v-card-title>Área de desenho</v-card-title>
    <v-card-text>
      <canvas ref="drawingCanvas" width="800" height="400"></canvas>
      <v-row>
        <v-col cols="3">
          <v-select
            label="Cor"
            :items="colors"
            v-model="selectedColor"
            item-text="text"
            item-value="value"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            label="Tamanho do pincel"
            :items="brushSizes"
            v-model="selectedBrushSize"
            item-text="text"
            item-value="value"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-btn color="primary" @click="clearCanvas">Limpar</v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn color="secondary" @click="downloadCanvas">Download</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { fabric } from "fabric";

export default defineComponent({
  setup() {
    const drawingCanvas = ref<HTMLCanvasElement | null>(null);
    const colors = [
      { text: "Preto", value: "black" },
      { text: "Vermelho", value: "red" },
      { text: "Verde", value: "green" },
      { text: "Azul", value: "blue" },
    ];
    const brushSizes = [
      { text: "Fino", value: 2 },
      { text: "Médio", value: 5 },
      { text: "Grosso", value: 10 },
      { text: "Extra Grosso", value: 20 },
    ];
    const selectedColor = ref("black");
    const selectedBrushSize = ref(5);
    const canvas = ref<fabric.Canvas | null>(null);

    onMounted(() => {
      if (drawingCanvas.value) {
        canvas.value = new fabric.Canvas(drawingCanvas.value);
        canvas.value.isDrawingMode = true;
        canvas.value.freeDrawingBrush.width = selectedBrushSize.value;
        canvas.value.freeDrawingBrush.color = selectedColor.value;
      }
    });

    function clearCanvas() {
      if (canvas.value) {
        canvas.value.clear();
      }
    }

    function downloadCanvas() {
      if (canvas.value) {
        const link = document.createElement("a");
        link.href = canvas.value.toDataURL({ format: "png" });
        link.download = "drawing.png";
        link.click();
      }
    }

    return {
      drawingCanvas,
      colors,
      selectedColor,
      brushSizes,
      selectedBrushSize,
      clearCanvas,
      downloadCanvas,
      canvas,
    };
  },
  watch: {
    selectedColor(newColor) {
      if (this.canvas) {
        this.canvas.freeDrawingBrush.color = newColor;
      }
    },
    selectedBrushSize(newSize) {
      if (this.canvas) {
        this.canvas.freeDrawingBrush.width = newSize;
      }
    },
  },
});
</script>

<style scoped>
canvas {
  border: 1px solid black;
  margin-bottom: 1rem;
}

.v-select {
  margin-bottom: 1rem;
}

.v-btn {
  margin-right: 1rem;
}
</style>
