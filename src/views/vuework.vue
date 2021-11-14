<template>
  <div class="vuework">
    <div class="practise-1">
      <span class="operate" @click="minus"> - </span>
      <input v-model.number="dataProp.count">
      <span class="operate" @click="plus"> + </span>
    </div>
    
    <div class="practise-2">
      <span class="operate" @click="prev">Prev</span>
      <span class="display">
	<img :src="images[dataProp.index]"/>
      </span>
      <span class="operate" @click="next">Next</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { computed, reactive } from "@vue/reactivity";

 let dataProp = reactive({
   count: 0,
   index: 0,
   length: 5,
 })
 
 let images = [
   require('@/assets/image1.jpeg'),
   require('@/assets/image2.jpeg'),
   require('@/assets/image3.jpeg'),
   require('@/assets/image4.jpg'),
   require('@/assets/image5.jpg')
 ]

 let minus = () => {
   dataProp.count -= 1;
 }
 
 let plus = () => {
   dataProp.count += 1;
 }
 

 let prev = () => {
   if(dataProp.index == 0) {
     dataProp.index = dataProp.length - 1
   } else {
     dataProp.index -= 1
   }

 }
 
 let next = () => {
   if(dataProp.index == dataProp.length - 1) {
     dataProp.index = 0
   } else {
     dataProp.index += 1
   }
 }

</script>

<style lang="scss" scoped>
 div.vuework {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 div.practise-1 {
   display: flex;
   flex-direction: row;
   
   span {
     margin: 2px;
     border: 1px solid black;
     padding: 2px;
     cursor: pointer;
   }
 }
 
 div.practise-2 {
   margin-top: 20px;

   display: flex;
   flex-direction: row;
   
   span.display {
     height: 300px;
     width: 300px;
     border: 1px solid black;
     
     display: flex;
     justify-content: center;
     align-items: center;
   }

   span.operate {
     display: flex;
     flex-direction: column;
     justify-content: end;
     cursor: pointer;
   }
 }
</style>