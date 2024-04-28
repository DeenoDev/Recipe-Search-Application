import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        // debugger;
        commit('setSearchedMeals', data.meals);
    });
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?=${letter}`)
    .then(({data}) => {
        // debugger;
        commit('setMealsByLetter', data.meals);
    });
}

export function searchMealsByIngredient({ commit }, ing) {
    debugger;
    axiosClient.get(`filter.php?=${ing}`)
    .then(({data}) => {
        // debugger;
        commit('setMealsByIngredients', data.meals);
    });
}