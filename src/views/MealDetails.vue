<template>
    <div class="w-[800px] mx-auto">
        
        <pre>{{ meal }}</pre>
        <h1 class="text-5xl font bold mb-5"></h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div>
            <div grid grid-cols-1 md:grid-cols-3>
                <div>
                    Category: {{ meal.strCategory }}
                </div>

            </div>
        </div>


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