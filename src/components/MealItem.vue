<template>
     <div  :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
          <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
        </router-link>
        <div class="p-3 ">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta vitae, illo consectetur adipisci numquam</p>
          <div class="flex items-center justify-between">
           <YouTubeButton :href="meal.strYoutube">
          Youtube
          </YouTubeButton>
            <!-- <router-link to="/" class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white transition-colors"> View</router-link> -->
        </div>
        </div>
        </div>
</template>