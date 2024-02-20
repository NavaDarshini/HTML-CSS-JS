 const checkbox=document.getElementsByClassName('checkbox')
 const sun=document.getElementById('sun')
 const moon=document.getElementById("moon")
 const ball=document.getElementsByClassName("ball")
checkbox.addEventListener('change',function(){
    document.body.classList.toggle('dark')
 })