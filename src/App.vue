
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5"> 
        Home
      </router-link>
      <!-- try using UL tag for this section when tutorial is completed -->
      <div class="flex items-center gap-1">
       <router-link to="/" class="inline-flex items center px-2 h-full transition-colors hover:bg-purple-300 pt-5">
         Search Meals
         </router-link>
         <router-link to="/" class="inline-flex px-2 center h-full transition-colors hover:bg-purple-300 pt-5">
          Meals By Letter
         </router-link>
         <router-link to="/" class="inline-flex px-2 center h-full transition-colors hover:bg-purple-300 pt-5">
          Meals By Ingredients
         </router-link>

      </div>

    </header>
    <main>
      <router-view />
    </main>
  </div>
  
</template>

<script setup>

</script>

<style scoped>

</style>
