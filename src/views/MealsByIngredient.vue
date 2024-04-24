<template>
    <div>
        By Ingredients
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import axiosClient from '../axiosClient';


onMounted(() => {
    axiosClient.get('list.php?=list')
})

</script>