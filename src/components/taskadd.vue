<template>
  <div class="task-add">
    <div class="icon" v-show="!toggled">
      <svg @click="click" t="1637542692258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1199" width="200" height="200"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="1200"></path></svg>
    </div>

    <div class="input" v-show="toggled">
      <input type="text" v-model="text"
	     @keydown.esc="click"
	     @keydown.enter="submit">

    </div>
  </div>
</template>


<script lang="ts">
 import { defineComponent, ref } from 'vue'
 export default defineComponent({
   emits: ['taskadd'],

   setup(props, {emit}) {
     let toggled = ref(false)
     let text = ref('')
     let click = () => {
       toggled.value = !toggled.value
     }

     let submit = () => {
       emit('taskadd', text.value)
       text.value = ''
     }
     
     return {
       toggled,
       text,
       click,
       submit
     }
   }
 })
 

</script>

<style lang="scss" scoped>
 div.task-add{
   border: 1px solid black;
   cursor: pointer;
   padding: 5px;

   div.icon {
     display: flex;
     justify-content: center;
     align-items: center;
     
     svg {
       width: 20px;
       height: 20px;
     }
   }
 } 
</style>