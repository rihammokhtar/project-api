





var meal = []; 

async function showData() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await response.json();
    meal = data.meals;
    displayData(); 
}

function displayData() {
    let cartona = "";
    for (var i = 0; i < meal.length; i++) {
        cartona += `
        <div class="col-md-4 meal" data-meal-id="${meal[i].idMeal}">
            <a href="javascript:void(0)" onclick="showMealDetails('${meal[i].idMeal}')">
                <img src="${meal[i].strMealThumb}" alt="${meal[i].strMeal}" class="w-100 imgs">
            </a>
            <div class="layer m-auto d-flex align-items-center justify-content-center" onclick="showMealDetails('${meal[i].idMeal}')">
                <p class="fs-2 text-center">${meal[i].strMeal}</p>
            </div>  
        </div>`;
    
    }
    document.getElementById("rowdata").innerHTML = cartona; // Insert the built HTML into the DOM
}

showData();
function showMealDetails(mealId) {
    window.location.href = `ingrediant.html?mealId=${mealId}`;
}


/////////////////////////////////////////////////////////////////////////////////////

var grediant=[];

async function gredian() {
    const x = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const y= await x.json();
    grediant= y.categories;
displaygridiant()
    
}


function displaygridiant(){
    let gred =``;
    for(var c=0 ;c<grediant.length ; c++){
        gred+= `
        <div class="col-md-3 d-flex flex-column justify-content-center text-center">
         <a href="ingred2.html?category=${grediant[c].strCategory}">
<i class="fa-solid fa-utensils"></i>
<h1 class="mt-3">${grediant[c].strCategory}</h1>
<p>${grediant[c].strCategoryDescription.substring(0, 100)}...</p>
</a>
</div>
        `
    }


    document.getElementById("rowing").innerHTML=gred;
}


gredian();

   

////////////////////////////////////////////


var area=[];

async function spacing() {
    const d = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const e= await d.json();
    area= e.meals;
displaySpace()
    
}


function displaySpace(){
    let space =``;
    for(var a=0 ;a<area.length ; a++){
        space+= `
        <div class="col-md-3 d-flex flex-column justify-content-center text-center">
         <a href="areadetailes.html?category=${area[a].strArea}">
    <i class="fa-solid fa-location-dot"></i>
<h1 class="mt-3">${area[a].strArea}</h1>
</a>
</div>
        `
    }


    document.getElementById("area").innerHTML=space;
}

spacing();

   ////////////////////

   
   var categor=[];

async function fetchcategory() {
    const response3 = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data2= await response3.json();
    categor= data2.categories;
displaycategory()
    
}


function displaycategory(){
    let categoryes =``;
    for(var n=0 ;n<categor.length ; n++){
        categoryes+= `
        <div class="col-md-4 d-flex flex-column justify-content-center text-center">
        //  <a href="category2.html?category=${categor[n].strCategory}">
                    <img src="${categor[n].strCategoryThumb}" alt="${categor[n].strCategory}" class="w-100 imgs">
            <div class="layer m-auto d-flex align-items-center justify-content-center"">
<h1 class="mt-3">${categor[n].strCategory}</h1>
<p>${categor[n].strCategoryDescription.substring(0, 100)}...</p>
</div>
</a>
</div>`
    }


    document.getElementById("categorr").innerHTML=categoryes;
}

fetchcategory();