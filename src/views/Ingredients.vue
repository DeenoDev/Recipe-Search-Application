<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient},}"  v-for="ingredient of ingredients" :key="ingredient.id" 
          class="bg-white rounded p-3 mb-3 shadow">
          <h3 class="block text2xl font-bold mb-2"> {{ ingredient.strIngredient }} </h3>
          <p> {{ ingredient.strDescription }} </p>
        </router-link>
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([]);


onMounted(() => {
    axiosClient.get('list.php?=list')
    .then(({data}) => {
        debugger;
        ingredients.value = data.meal;
    })
})

</script>