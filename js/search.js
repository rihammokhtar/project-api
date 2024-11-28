async function fetchMeals() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    return data.meals; 
}

function displayMeals(meals) {
    let mealDisplay = '';
    if (meals) { 
        for (let b = 0; b < meals.length; b++) {
            mealDisplay += `
                <div class="col-md-4 text-center">
                    <img src="${meals[b].strMealThumb}" alt="${meals[b].strMeal}" class="w-100 mb-2">
                    <div class="layer m-auto d-flex align-items-center justify-content-center">
                        <p class="fs-2 text-center">${meals[b].strMeal}</p>
                    </div>
                </div>
            `;
        }
    }

    document.getElementById("search").innerHTML = mealDisplay;
}

document.getElementById("searchInput").addEventListener("input", async function() {
    const searchTerm = this.value.trim().toLowerCase(); 
    const meals = await fetchMeals(); 
    if (searchTerm.length === 1) {
        const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().startsWith(searchTerm)); 
        displayMeals(filteredMeals); 
    } else if (searchTerm.length === 0) {
        document.getElementById("search").innerHTML = '';
    }
});



/////////////////////////////////////

