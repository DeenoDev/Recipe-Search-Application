<template>
    <div>
        <div v-for="ingredient of ingredients">
          <h3> {{ ingredient }} </h3>
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