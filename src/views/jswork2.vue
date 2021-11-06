<template>
  <div class="jswork2">
    <div class="practise-1">
      <label>
	Cart1: 
	<input type="text" v-model="data.consargs1">
      </label>

      <label>
	Cart2: 
	<input type="text" v-model="data.consargs2">
      </label>
      
      <button @click="submit">提交</button>
      <span> {{data.result}} </span>
        </div>
    
    <div class="practise-2">
      <input type="number" v-model="inputProp.number">
      <span>平方: {{ inputProp.number * inputProp.number }}</span>
      <span>平方根: {{ Math.sqrt(inputProp.number) }}</span>
      <span>自然对数: {{ Math.log(inputProp.number) }}</span>
        </div>
    
    <div class="practise-3">
      <input type="date" v-model="inputProp.date">
      <button @click="submitDay">提交</button>
      <div>
	<span>{{ outputProp.dayOfYear }}</span>
      </div>
        </div>
    
    <div class="practise-4">
      <input type="text" v-model="inputProp.string">
      <button @click="submitString">提交</button>
      <div>
	<span>
	  {{outputProp.string}}
	</span>
      </div>
        </div>

    <div class="practise-5">
      <div>
	<span>{{clock.hour}}:</span>
	<span>{{clock.minute}}:</span>
	<span>{{clock.second}}</span>
      </div>
      
      <div>
        <span>{{clock.year}}, </span>
	<span>{{clock.month}}, </span>
	<span>{{clock.day}}</span>
      </div>

      <div>
	<span>{{clock.timezone}}</span>
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>
 import { reactive } from "@vue/reactivity";
 import { onMounted } from "@vue/runtime-core";

 let data = reactive({
   consargs1: '',
   consargs2: '',
   result: '',
 })

 let inputProp = reactive({
   number: 0,
   string: '',
   date: '2021-11-06',
 })

 let outputProp = reactive({
   string: '',
   dayOfYear: 0,
 }) 

 let clock = reactive({
   hour: '',
   minute: '',
   second: '',
   year: '',
   month: '',
   day: '',
   timezone: ''
 })

 class Car {
   color: string;
   price: number;
   weight: number;
   brand: string;
   
   constructor(color: string, price: number, weight: number, brand: string) {
     this.color = color;
     this.price = price;
     this.weight = weight;
     this.brand = brand;
   }
   
   compare(other: Car): string {
     if (this.price == other.price) {
       return "价格一致"
     } else {
       return this.price > other.price ? this.brand : other.brand
     }
   }
 }
 
 let generator = (s: string) => {
   let args = s.split(",");

   return new Car(
     args[0],
     parseInt(args[1]),
     parseInt(args[2]),
     args[3]
   )
 }

 let submit = () => {
   let car1 = generator(data.consargs1.trim())
   let car2 = generator(data.consargs2.trim())
   
   data.consargs1 = '' 
   data.consargs2 = ''
   
   data.result = car1.compare(car2)
 }

 let submitDay = () => {
   var now = new Date(inputProp.date)
   var start = new Date(now.getFullYear(), 0, 0);
   var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
   var oneDay = 1000 * 60 * 60 * 24;
   var day = Math.floor(diff / oneDay);
   
   outputProp.dayOfYear = day
 }
 
 let submitString = () => {
   let chs = Array.from(inputProp.string)
   outputProp.string = chs.filter(ch => ch >= '0' && ch <= '9').reduce((r, x) => r += x, "")
 }
 
 let padding = (num: number) =>  num < 10 ? "0" + String(num) : String(num)

 onMounted(() => {
   setInterval(() => {
     let now = new Date()
     clock.hour = padding(now.getHours())
     clock.minute = padding(now.getMinutes())
     clock.second = padding(now.getSeconds())
     
     clock.year = now.getFullYear();
     clock.month = now.getMonth();
     clock.day = now.getDay();
     clock.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
   }, 1000)
 })
</script>

<style scoped>
 div.jswork2>div {
   border: 1px solid black;
   margin: 20px auto;
 }

 div.practise-2 {
   display: flex;
   flex-direction: column;
 }
 
</style>