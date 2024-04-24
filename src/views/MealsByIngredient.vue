<template>
    <div>
        <pre>{{ ingredients }}</pre>
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
        ingredients.value = data;
    })
})

</script>