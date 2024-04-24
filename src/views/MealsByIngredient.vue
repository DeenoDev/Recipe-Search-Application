<template>
    <div>
        <div v-for="ingredient of ingredients" :key="ingredient.id" class="bg-white rounded p-3 mb-3">
          <h3 class="text2xl font-bold"> {{ ingredient.strIngredient }} </h3>
          <pre> {{ ingredient.strDescription }} </pre>
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