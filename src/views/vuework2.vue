<template>
  <div class="vuework2">
    <div class="practise-1">
      <span>剩余任务{{tasks.length}} </span>
      <template v-for="(task, index) in tasks" :key="index">
	<Task
	  :text="task.text"
	  :isdone="task.isdone"
	  @delete="ondelete(index)"
	/>
      </template>

      <TaskAdd @taskadd="onadd" />
    </div>

    <div class="practise-2">
      <div class="backgroud">
	<span :class="{animeup: animeup}">{{texts[index]}}</span>
      </div>
    </div>
  </div>

  <div class="playground">
    <row>
      <span>Hello</span>
      <span>World</span>
      <span>Fuck</span>
    </row>

    <column>
      <span>Hello</span>
      <span>World</span>
      <span>Fuck</span>
    </column>
  </div>
</template>

<script lang="ts">
 import { defineComponent, onMounted, ref } from 'vue'
 // import task from '@/model/task'
 import Task from '@/components/task.vue';
 import TaskAdd from '@/components/taskadd.vue'
 import {row, column} from 'component'

 export default defineComponent({
   components: {
     Task,
     TaskAdd,
     row,
     column
   },
   
   setup() {
     let tasks = ref<Array<task>>([
       {text: 'Hello', isdone: false},
       {text: 'World', isdone: false},
       {text: 'Fuck', isdone: true}
     ])

     let ondelete = (index: number) => {
       tasks.value.splice(index, 1)
     }

     let onadd = (text: string) => {
       let item = {text: text, isdone: false}
       tasks.value.push(item)
     }

     
     let animeup = ref(false)
     let texts = ['Hello', 'world', 'Holy', 'Shit', 'Fuck', 'You']
     let index = ref(0)

     let scrollAnimate = () => {
       animeup.value = true
       setTimeout(() => {
	 if (index.value == texts.length - 1) {
	   index.value = 0
	 } else {
	   index.value += 1
	 }

         animeup.value = false
       }, 500)

     }
     
     onMounted(() => {
       setInterval(scrollAnimate, 1500)
     })


     return {
       tasks,
       ondelete,
       onadd,
       index,
       texts,
       animeup,
     }
   },
 })
</script>

<style lang="scss" scoped>
 div.backgroud {
   margin-top: 50px;
   border: 1px solid black;

   span {
     line-height: 40px;
     text-align: center;
     font-size: 18px;
     font-weight: 400;

     transition: all 0.5s ease-in-out;
   }


   span.animeup {
     transform: translateY(-40px);
   }
 }
</style>