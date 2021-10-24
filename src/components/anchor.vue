<template>
  <div class="anchor">
    <template v-for="(href, index) in hrefs" :key="index">
      <a> {{href}} </a> <br>
    </template>
  </div>
</template>

<script lang="ts" setup>
 let hrefs = ['pdf', 'ppt', 'xls', 'txt', 'rar', 'git', 'png', '锚点超链接', 'www.baidu.com']
</script>

<style scoped>
 a {
   cursor: pointer;
 }

 a:link {
   color: black;
 }

 a:visited {
   color: red
 }


 a:hover {
   color: blue;
 }

</style>