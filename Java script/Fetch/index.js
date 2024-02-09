const MainDiv=document.getElementById('Movies')
const inp=document.getElementById('movie-name')
const btn=document.getElementById('btn')
btn.addEventListener('click',fetchdata)
function fetchdata(){
   const searchterm=inp.value
       fetch(`https://www.omdbapi.com/?s=${searchterm}&apikey=ea149886`)
        .then(function (res){return res.json()})
        .then(function (data)
        {
            console.log(data);
            displayData(data.Search)
         })
         .catch(function(err){console.log(err)})
}
function displayData(movies)
{
    movies.forEach(function(movie)
    {
        const div=document.createElement('div')
        div.classList.add('movie');
        const image=document.createElement('img')
        image.src=movie.Poster;
        image.alt=movie.title
        const year=document.createElement('p')
        year.textContent=movie.Year;
        const title=document.createElement('h2')
        title.textContent=movie.Title;
        div.append(image,title,year);
        MainDiv.appendChild(div)
    })
}

