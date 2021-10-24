<template>
  <div class="canvas-view">
    <canvas width="1000" height="300" ref="canvas1"/>
    <canvas width="1000" height="300" ref="canvas2"/>
    <canvas width="1000" height="300" ref="canvas3"/>
    <canvas width="1000" height="300" ref="canvas4"/>
    <canvas width="1000" height="300" ref="canvas5"/>

  </div>
</template>

<script lang="ts" setup>
 import {onMounted, ref} from 'vue';
 import {draw_house} from '@/draw/house';
 import draw_fivecircle from '@/draw/fivecircle';
 import {draw_pie} from '@/draw/pie'
 import {draw_rect} from '@/draw/rect'
 import {draw_umbrellas} from '@/draw/umbrella'
 const canvas1 = ref<HTMLCanvasElement>();
 const canvas2 = ref<HTMLCanvasElement>();
 const canvas3 = ref<HTMLCanvasElement>();
 const canvas4 = ref<HTMLCanvasElement>();
 const canvas5 = ref<HTMLCanvasElement>();

 onMounted(() => {
   const context_house = canvas1.value.getContext('2d')
   draw_house(context_house, 20)

   const context_fivecircle = canvas2.value.getContext('2d')
   context_fivecircle.lineWidth = 2
   draw_fivecircle(context_fivecircle, 20)

   const context_pie = canvas3.value.getContext('2d')
   draw_pie(context_pie, 30)

   const context_rect = canvas4.value.getContext('2d')
   draw_rect(context_rect, 10)

   const context_umbrella = canvas5.value.getContext('2d')
   draw_umbrellas(context_umbrella)
   
 })
 
</script>

<style scoped>
 div.canvas-view {
   display: flex;
   flex-direction: column;
   max-width: 1000px;
 }

 canvas {
   border: 1px solid black;
   height: 300px;
   width: 1000px
 }
</style>