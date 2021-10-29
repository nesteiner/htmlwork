<template>
  <div class="jswork-view">
    <div class="practise-1">
      <span> 现在是 {{ getStatus }} </span>
    </div>
    
    <div class="practise-2">
      <template v-for="(src, index) in images" :key="index" >
	<img :src="src"/> 
      </template>
    </div>
    
    <div class="practise-3">
      <input v-model="data.text1" placeholder="input string here as A"> <br>
      <input v-model="data.text2" placeholder="input string here as B"> <br>
      <button @click="submitInput">click me to process</button> 
      
      <span>A 在 B 中出现的次数为 {{ data.count }}</span>
      <span>A 在 B 中第一次出现的位置是 {{ data.firstindex }} </span>
    </div>
    
    <div class="practise-4">
      <span>
	<input v-model="data.username" placeholder="input username"> 
	<span class="alert">{{ alerts.username }}</span>

      </span>

      <span>
	<input v-model="data.email" placeholder="input email" type="email">
	<span class="alert">{{ alerts.email }} </span>

      </span>

      <span>
	<input v-model="data.password" placeholder="input password" type="password">
	<span class="alert">{{ alerts.password }} </span>

      </span>

      <span>
	<input v-model="data.repeat" placeholder="input password again" type="password">
	<span class="alert">{{ alerts.repeat }} </span>

      </span>

      <button @click="submitRegesiter">Click me to Submit</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { computed, reactive } from "@vue/reactivity";
 let data = reactive({
   text1: '',
   text2: '',
   count: 0,
   firstindex: 0,
   username: '',
   password: '',
   email: '',
   repeat: '',
 })


 let alerts = reactive({
   username: '',
   password: '',
   email: '',
   repeat: ''
 })

 let getStatus = computed(() => {
   const now = new Date();
   const hour = now.getHours();
   let status = 0;

   if (hour > 6 && hour < 12 ) {
     status = 0
   } else if(hour >= 12 && hour < 18) {
     status = 1
   } else if(hour >= 18 && hour < 24) {
     status = 2
   } else {
     status = 3
   }
   
   switch (status) {
     case 0: return "早上";
     case 1: return "上午";
     case 2: return "晚上";
     default: return "Unknown";
   }
 })
 
 let images = [
   require("@/assets/image1.jpeg"),
   require("@/assets/image2.jpeg"),
   require("@/assets/image3.jpeg"),
   require("@/assets/image4.jpg"),
   require("@/assets/image5.jpg")
 ]


 let submitInput = () => {
   let index = data.text2.indexOf(data.text1)
   data.firstindex = index
   // init count first
   data.count = 0

   let limit = 1;
   while(index != -1 && limit <= 100) {
     data.count += 1
     index = data.text2.indexOf(data.text1, index + 1)
     
     limit += 1
   }
 }
 
 let usernameValidate = (username: string) => {
   return username.length >= 2 &&
	  username.length <= 8 &&
	  !(username[0] >= '0' &&
	    username[0] <= '9');
 }
 
 let passwordValidate = (password: string) => {
   return password.indexOf(data.username) == -1 &&
	  password == data.repeat;
 }
 
 let repeatValidate = (repeat: string) => {
   return repeat == data.password;
 }
 
 let emailValidate = (email: string) => {
   return true;
 }
 
 let submitRegesiter = () => {
   alerts.username = ''
   alerts.password = ''
   alerts.email = ''
   alerts.repeat = ''

   if(!usernameValidate(data.username)) {
     alerts.username = 'validate username failed'
   }
   
   if(!passwordValidate(data.password)) {
     alerts.password = 'validate password failed'
   }
   
   if(!repeatValidate(data.repeat)) {
     alerts.repeat = 'validate repeat failed'
   }
   
   if(!emailValidate(data.email)) {
     alerts.email = 'validate email failed'
   }
 }
</script>

<style scoped>
 div.jswork-view div {
   border: 1px solid black;
 }
 
 div.practise-3 {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 
 div.practise-4 {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

 span.alert {
   color: red;
   font-size: 10px;
 }
 

 div.practise-4>span{
   display: block;
   width: 400px;
   text-align: left;
 }
</style>