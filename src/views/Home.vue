<template>
    <div class="flex flex-col p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals">

        <div class="flex gap-4 justify-center mt-2">
            <router-link to="/" v-for="letter of letters">
                {{ letter }}


            </router-link>


        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';


const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

</script>