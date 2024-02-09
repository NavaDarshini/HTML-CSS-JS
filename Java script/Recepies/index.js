const MainDiv=document.getElementById('recipes')
function fetchdata(data){
    fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>
        {
            console.log(data)

            displayData(data.recipes);
        })
        .catch(()=>console.error(err))
    
}

fetchdata()

function displayData(recipes)
{

    recipes.forEach(function(rec)
    {
        const div=document.createElement('div')
        div.classList.add('recipe')
        const img=document.createElement('img')
        img.src=rec.image;
        img.alt=rec.title;
        const title =document.createElement('h2')
        title.textContent=rec.title
        const ingredients=document.createElement('p')
        ingredients.textContent="Ingredients: "+rec.ingredients.map((value)=> value)
        const instructions=document.createElement('p')
        instructions.textContent="Instructions to prepare: "+rec.instructions.map((value)=>value)
        div.append(img,title,ingredients,instructions)
        
        MainDiv.appendChild(div)
    })
    
}