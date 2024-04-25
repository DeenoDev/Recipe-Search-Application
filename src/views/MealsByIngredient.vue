<template>
    <div>
        <div v-for="ingredient of ingredients" :key="ingredient.id" 
        class="bg-white rounded p-3 mb-3 shadow">
          <h3 class="text2xl font-bold"> {{ ingredient.strIngredient }} </h3>
          <p> {{ ingredient.strDescription }} </p>
        </div>
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