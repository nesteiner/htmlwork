<template>
  <div class="table">
    <table>
      <tr>
	<template v-for="(name, index) in names" :key="index">
	  <th> {{name}}</th>
	</template>
      </tr>

      <template v-for="i in Array.from({length: 7}, (x, i) => i + 1)" :key="i">
	<tr :class="{even: i % 2 == 0, odd: i % 2 != 0}">
	  <template v-for="j in Array.from({length: names.length}, (x, i) => i + 1)" :key="j">
	    <td></td>
	  </template>
	</tr>
      </template>
    </table>

  </div>
</template>

<script lang="ts" setup>
 let names = ['学号', '姓名', '班级', '专业', '性别']
</script>

<style scoped>
 table {
   table-layout: fixed;
   width: 100%;
   border-collapse: collapse;
   border: 3px solid purple;
   
   text-align: center;
 }

 th, td {
   height: 20px;
   border: 1px solid #cad9ea
 }
 
 tr.even td {
   background: #cce8eb;
 }
</style>
