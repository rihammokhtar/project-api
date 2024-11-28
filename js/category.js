function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
}

async function fetchMealsByCategory(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const data = await response.json();
    displayMeals(data.meals);
}

function displayMeals(meals) {
    let mealDisplay = '';
    for (var i = 0; i < meals.length; i++) {
        mealDisplay += `
        <div class="col-md-4 meal" data-meal-id="${meals[i].idMeal}">
         <a href="ingrediant.html" onclick="showMealDetails('${meals[i].idMeal}')">
                <img src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" class="w-100 mb-2">
 <div class="layer m-auto d-flex align-items-center justify-content-center"  onclick="showMealDetails('${meals[i].idMeal}')>
                <p class="fs-2 text-center">${meals[i].strMeal}</p>
                </a>
            </div>
            </div>
        `;
    }

    document.getElementById("categor").innerHTML = mealDisplay;
}

fetchMealsByCategory();
function showMealDetails(mealId) {
    window.location.href = `category2.html?mealId=${mealId}`;
}
// بدء جلب البيانات بناءً على الصنف
const category = getCategoryFromURL();
if (category) {
    fetchMealsByCategory(category);
}

//////////////////////////////////


function getinfo(){
    const params = new URLSearchParams(window.location.search);
    return params.get("category");


}

showData();
function showMealDetails(mealId) {
    window.location.href = `ingrediant.html?mealId=${mealId}`;
}