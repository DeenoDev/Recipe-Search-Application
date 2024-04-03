<template>
    <div class="w-[800px] mx-auto">
        
        <pre>{{ meal }}</pre>
        <h1 class="text-5xl font bold mb-5"></h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div>
            <div grid grid-cols-1 md:grid-cols-3 text-lg py-2>
                <div class="font-bold">
                    Category: {{ meal.strCategory }}
                </div>
                <div class="font-bold">
                    Category: {{ meal.strArea }}
                </div>
                <div class="font-bold">
                    Category: {{ meal.strTags }}
                </div>

            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                
            </div>

            <div>
                <h2>Measures</h2>

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