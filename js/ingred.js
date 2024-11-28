async function getMealDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('mealId'); // Get mealId from the URL

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    const meal = data.meals[0]; // Extract the meal object

    // Display meal details in the HTML elements
    document.getElementById("mealDetailImage").src = meal.strMealThumb;
    document.getElementById("mealDetailsTitle").innerText = meal.strMeal;
    document.getElementById("mealDetailsInstructions").innerText = meal.strInstructions;
    // document.getElementById("source").innerText = meal.strYoutube;
    // document.getElementById("youtube").innerText = meal.strYoutube;
    // Display area and category
    document.querySelector(".fs-4").innerText = meal.strArea;
    document.querySelector(".fs-4 + span").innerText = meal.strCategory;
    
    // Display ingredients
    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients += `<span class="me-3 ms-3">${measure} ${ingredient}</span>`;
        }
    }
    document.querySelector(".tips").innerHTML = "Recipes: " + ingredients;

    // Display tags if available
    if (meal.strTags) {
        const tags = meal.strTags.split(",").map(tag => `<span class="me-1 ms-1">${tag}</span>`).join("");
        document.querySelector(".tips + h3").innerHTML = "Tags: " + tags;
    } else {
        document.querySelector(".tips + h3").style.display = "none"; // Hide tags section if no tags
    }

    // Add links for source and YouTube
    document.querySelector(".btn-success a").href = meal.strSource || "#";
    document.querySelector(".btn-danger a").href = meal.strYoutube || "#";
}


getMealDetails();

//////////////////////////////////////////////

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
}

async function fetchMealsByCategory(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
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

    document.getElementById("rowkind").innerHTML = mealDisplay;
}


const category = getCategoryFromURL();
if (category) {
    fetchMealsByCategory(category);
}


////////////////////////////////////////////////




