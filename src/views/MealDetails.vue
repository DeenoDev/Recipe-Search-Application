<template>
    <div>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';


const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`lookup.php?=${route.params.id}`)
    .then(({ data }) => {
        debugger;
        meal.value = data.meals[0] || {}
    });

});

</script>