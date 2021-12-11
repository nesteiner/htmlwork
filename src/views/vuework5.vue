<template>
  <div class="vuework5">
    <table>
      <tr class="columns">
	<template v-for="(column, index) in columns" :key="index">
	  <td>{{column}}</td>
	</template>
      </tr>

      <template v-for="(item, index) in items" :key="index">
	<tr class="item">
	  <td>{{item.id}}</td>
	  <td>{{item.name}}</td>
	  <td>{{item.unitprice}}</td>
	  <td class="count">
	    <input type="number" min="0" step="1" v-model="item.count">
	  </td>
	  <td>{{item.totalprice}}</td>
	</tr>
      </template>

      <tr>
	<td colspan="5">
	  total price:
	  {{totalprice}}
	</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
 import {ref, computed} from 'vue'

 class CartItem {
   id: number;
   name: string;
   unitprice: number;
   count: number;

   constructor(id: number, name: string, unitprice: number, count: number) {
     this.id = id
     this.name = name
     this.unitprice = unitprice
     this.count = count
   }
   
   public get totalprice(): number {
     return this.count * this.unitprice
   }
 }

 const columns = ['编号', '名称', '单价', '数量', '总价']
 const items = ref([
   new CartItem(1, 'apple', 3, 2),
   new CartItem(2, 'pear', 4, 3),
   new CartItem(3, 'banana', 5, 4)
 ])

 const totalprice = computed(() => {
   return items.value.map((item) => item.totalprice).reduce((a, b) => a + b)
 })
</script>

<style lang="scss" scoped>
 table {
   border: 1px solid #ffcc00;
   width: 100%;

   tr.columns {
     font-weight: 800;
     background: #ffcc00;
   }

   td {
     padding: 3px;
     border: 2px solid #ffcc00;
   }

   td.count {
     width: 200px;
   }
 }
</style>