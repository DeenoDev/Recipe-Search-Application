<template>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';


const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
    store.dispatch('searchedMealsByIngredient', route.params.ingredient )
});



</script>