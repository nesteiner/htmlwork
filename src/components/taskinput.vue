<template>
  <div class="task-input">
    <input type="text" v-model="text">
  </div>
</template>

<script lang="ts">
 import { defineComponent, reactive, toRefs } from 'vue'
 
 export default defineComponent({
   setup() {
     let datas = reactive({
       text: ''
     })

     return toRefs(datas)
   },
 })
</script>

<style scoped>
 input {
   border: 0;
   margin: 0;
   padding: 0;
 }
</style>