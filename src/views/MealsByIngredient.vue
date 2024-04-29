<template>
    <Meals />
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