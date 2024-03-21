
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16">
      <router-link :to="{name: 'home'}"> 
        Home
      </router-link>

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
