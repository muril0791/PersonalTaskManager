<template>
  <v-card>
    <v-card-title>Área de desenho</v-card-title>
    <v-card-text>
      <canvas ref="drawingCanvas" width="800" height="400"></canvas>
      <v-btn color="secondary" @click="downloadCanvas">Download</v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { fabric } from "fabric";

export default defineComponent({
  setup() {
    const drawingCanvas = ref<HTMLCanvasElement | null>(null);
    let canvas: fabric.Canvas;

    onMounted(() => {
      if (drawingCanvas.value) {
        canvas = new fabric.Canvas(drawingCanvas.value);
        canvas.isDrawingMode = true;
      }
    });

    onUnmounted(() => {
      canvas.dispose();
    });

    function downloadCanvas() {
      if (drawingCanvas.value) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL({ format: "png" });
        link.download = "drawing.png";
        link.click();
      }
    }

    return {
      drawingCanvas,
      downloadCanvas,
    };
  },
});
</script>
