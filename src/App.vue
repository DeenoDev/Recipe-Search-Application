
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16">
      <router-link :to="{name: 'home'}"> 
        Home
      </router-link>
      <!-- try using UL tag for this section when tutorial is completed -->
      <div>
        <router-link to="/">
        Search Meals
        </router-link>
        <router-link to="/">
          Meals By Letter
        </router-link>
        <router-link to="/">
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
