<template>
  <div class="vuework4">
    <div class="input">
      <input type="text" v-model="cityname" placeholder="input the city to search">
      <button @click="submit">搜索</button>
    </div>

    <div class="display">
      <template v-for="(weather, index) in weathers" :key="index">
	<div class="weather">
	  <span>{{weather.date}}</span>
	  <span>{{weather.fengli || weather.fl}}</span>
	  <span>{{weather.fengxiang}}</span>
	  <span>{{weather.high}}</span>
	  <span>{{weather.low}}</span>
	  <span>{{weather.type}}</span>
	</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { ref } from '@vue/reactivity'
 import { onMounted } from '@vue/runtime-core'
 import Axios from 'axios'

 interface Weather {
   date: string,
   fengli?: string,
   fl?: string,
   fengxiang: string,
   high: string,
   low: string,
   type: string,
 }

 interface Response {
   city: string,
   forecast: Weather[],
   ganmao: string,
   wendu: string,
   yesterday: Weather
 }
 
 let cityname = ref('')
 let weathers = ref<Array<Weather>>([])
 
 async function submit() {
   let response = await Axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' +  cityname.value)
   weathers.value = parse(response.data.data)
   console.log(response)
 }

 function parse(resp: Response) {
   let forecast = resp.forecast
   let yesterday = resp.yesterday
   forecast.unshift(yesterday)

   return forecast
 }

 onMounted(async () => {
   let response = await Axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + '杭州')
   weathers.value = parse(response.data.data)
   console.log(response)
 })
</script>

<style lang="scss" scoped>
 div.display {
   display: flex;
   justify-content: center;

   div.weather {
     width: 150px;

     span {
       display: block;
     }
   }
 }
</style>