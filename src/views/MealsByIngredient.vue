<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meals="meals" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There are no meals
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';


const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
    store.dispatch('searchedMealsByIngredient', route.params.ingredient )
});



</script>