<template>
  <div class="vuework3">
    <div class="practise-1">
      <div class="tags">
	<template v-for="(item, index) in selectedItem" :key="index">
	  <span class="tag">
	    <span class="title">{{contents[index].title}}</span>
	    <span class="item">{{item}}</span>
	  </span>
	</template>
      </div>

      <table class="table1">
	<template v-for="(content, row) in contents" :key="row">
	  <tr>
	    <td class="title">{{content.title}}</td>
	    <template v-for="(item, column) in content.items" :key="column">
	      <td class="item" @click="handler(row, column)">{{item}}</td>
	    </template>
	  </tr>
	</template>

      </table>
    </div>


    <div class="practise-2">
      <input type="text" placeholder="输入关键字进行搜索" v-model.trim="searchKeyword">

      <table class="table2">
	<tr>
	  <th>ID</th>
	  <th>brand</th>
	  <th>operation</th>
	</tr>

	<template v-for="(car, index) in matchCars" :key="index">
	  <tr>
	    <td>{{car.id}}</td>
	    <td>{{car.brand}}</td>
	    <td class="delete underline" @click="delCar(index)">delete</td>
	  </tr>
	</template>
	
      </table>

      <input type="text" placeholder="input id" v-model.number="inputId"><br>
      <input type="text" placeholder="input brand" v-model.trim="inputBrand"><br>
      <button @click="addCar">添加</button>


    </div>
  </div>
</template>

<script lang="ts" setup>
 import {computed, onMounted, reactive, ref} from 'vue'

 interface Select {
   [index: number]: number
 }

 interface Car {
   id: number,
   brand: string,
 }

 let contents = [
   {title: '内存容量', items: ['4GB', '8GB', '24GB', '32GB', '40GB']},
   {title: '显卡型号', items: ['MX230', 'MX250', 'MX350', 'MX450', 'T1000', 'RTX A2000', 'AMD集成显卡', 'intel集成显卡', '集成显卡', 'T600', 'T1200']},
   {title: '固态硬盘', items: ['128GB', '256GB', '512GB', '512GB x 2', '1TB', '2TB', '其他']},
   {title: '类型', items: ['轻薄笔记本', '游戏笔记本', '高端轻薄笔记本' ,'高端游戏笔记本']}
 ]

 let cars = ref<Car[]>([
   {id: 1, brand: '奔驰'},
   {id: 2, brand: '宝马'},
   {id: 3, brand: 'rrr'},
   {id: 4, brand: 'ttttt'},
 ])
 
 let selected = ref<Select>({})
 let selectedItem = computed(() => {
   let result = []
   for(let index in selected.value) {
     let row = contents[index]
     let items = row.items

     let column = selected.value[index]
     result.push(items[column])
   }

   return result
 })
 // ATTENTION use the `watch`, on the `selected`
 function handler(row: number, column: number) {
   selected.value[row] = column
 }


 // MODULE practise 2
 let searchKeyword = ref('')
 let inputId = ref<number | null>(null)
 let inputBrand = ref('')

 function addCar() {
   let car = {id: inputId.value, brand: inputBrand.value}
   cars.value.push(car)

   inputId.value = 0
   inputBrand.value = ''
 }

 function delCar(index: number) {
   cars.value.splice(index, 1)
 }

 let matchCars = computed(() => {
   return cars.value.filter(car => car.brand.search(searchKeyword.value) != -1)
 })
</script>

<style lang="scss" scoped>
 table {
   position: relative;
   width: 100%;
   /* display: block; */
   border: 1px solid #ffcc00;

   tr {
     td {
       padding: 3px;
       border: 2px solid #ffcc00;
     }

     td.title {
       background: #ffcc00;
     }

     td.item {
       cursor: pointer;
     }

     th {
       background: #ffcc00;
     }

   }


 }

 table.table2 {
   text-align: left;

   tr {
     height: 30px;
   }

   td.delete, td.underline {
     text-decoration: underline;
     cursor: pointer;
   }
 }
 div.practise-1 {
   div.tags {
     height: 50px;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     
     span.tag {
       border: 1px solid black;
       display: inline-block;
       border-radius: 4px;
       margin: 2px;
       padding: 2px;

       span.item {
	 color: red;
       }
     }
   }

 }

 div.practise-2 {
   margin-top: 100px;
 }
</style>