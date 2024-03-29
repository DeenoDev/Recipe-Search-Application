<template>
    <div class="p-8">
       <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for Meals"
        @change="searchMeals()"
       />   
    </div>

    <div>
        <div v-for="meal of meals" :key="meal.idMeal">
        <img :src="meal.strMealThumb" alt="strMeal">
        <h3>{{ meal.strMeal }}</h3>
        <div>
          <a :href="meal.strYoutube" target="_blank">Youtube</a>
          <router-link :href="meal.strYoutube" target="_blank">View</router-link>
        </div>
        </div>
    </div>

</template>

<script setup>
import {computed} from '@vue/reactivity';
import { ref } from 'vue';
import store from '../store';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
  store.dispatch('searchMeals', keyword.value);

}

</script>