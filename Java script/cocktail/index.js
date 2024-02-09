const mainDiv=document.getElementById('Cocktail')
function fetchData(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            displayData(data.drinks);
        })
    
        
}
async function fetchData2(){
    try
    {
        const res =await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        const data=await res.json()
        console.log(data)

    }
    catch(err)
    {
        console.error('my error is '+err)
    }
    finally
    {
        console.log("jhignjgkoigjix")
    }
}
fetchData()

 function displayData(drinks)
{
    console.log(drinks)
    drinks.forEach((drink) =>
    {
        const div=document.createElement('div')
        div.classList.add('drink')
        const image=document.createElement('img')
        image.src=drink.strDrinkThumb
        image.classList.add('img')
        const strdrink=document.createElement('p')
        strdrink.textContent="strDrink :  "+drink.strDrink
        const strcategory=document.createElement('p')
        strcategory.textContent="strCategory :  "+drink.strcategory
        const strinstructions=document.createElement('p')
        strinstructions.textContent="strinstructions :  "+drink.strInstructions
        div.append(image,strdrink,strcategory,strinstructions)
        mainDiv.appendChild(div)

        
    })
}