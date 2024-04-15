<template>
    <div class="p-8 pb-0">
       <input 
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for Meals"
        @change="searchMeals"
       />   
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <MealItem v-for="meal of meals" />
    </div>

</template>

<script setup>
import {computed} from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import YouTubeButton from '../components/YouTubeButton.vue';
import MealItem from '../components/MealItem.vue';

const route = useRoute();

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals();
  }
})

</script>