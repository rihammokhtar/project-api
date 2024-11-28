
function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
}

async function fetchMealsByCategory(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`);
    const data = await response.json();
    displayMeals(data.meals);
}

function displayMeals(meals) {
    let mealDisplay = '';
    for (var b = 0; b < meals.length; b++) {
        mealDisplay += `
            <div class="col-md-4 text-center">
                <img src="${meals[b].strMealThumb}" alt="${meals[b].strMeal}" class="w-100 mb-2">
 <div class="layer m-auto d-flex align-items-center justify-content-center">
                <p class="fs-2 text-center">${meals[b].strMeal}</p>
            </div>
            </div>
        `;
    }

    document.getElementById("areas").innerHTML = mealDisplay;
}

const category = getCategoryFromURL();
if (category) {
    fetchMealsByCategory(category);
}

