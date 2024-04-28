<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meals="meals" />
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import axiosClient from '../axiosClient';



</script>