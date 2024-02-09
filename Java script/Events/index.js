const gp=document.getElementById('gp')
const p=document.getElementById('p')
const c=document.getElementById('c')
const btn=document.getElementById('btn')

btn.addEventListener('click',function(){
    alert('Hello')
})
c.addEventListener('click',function(){
    alert('Good Morning')
})
p.addEventListener('click',function(){
    alert('How are u')
})
gp.addEventListener('click',function(){
    alert('Good')
})

const btnDiv=document.getElementById('buttons')
btnDiv.addEventListener('click',function(e){
    alert(e.target.textContent+"clicked")
})