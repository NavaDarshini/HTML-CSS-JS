const cartdetails=document.getElementById('cart-details')
const cart=JSON.parse(localStorage.getItem('cart'))
console.log(cart)
const total=document.getElementById('total')
displayData(cart)
function displayData(data){
    cartdetails.textContent=""
    data.forEach((pro,index)=>{
        const prod=document.createElement('div')
        prod.classList.add('cart-product')
        const image=document.createElement('img')
        image.src=pro.thumbnail
        const title=document.createElement('h2')
        title.textContent=pro.title
        const price=document.createElement('p')
        price.textContent= "$"+pro.price
        const deletebtn=document.createElement('button')
        deletebtn.textContent="❌"
        deletebtn.setAttribute('data-id',index)
        deletebtn.addEventListener('click',remove)
        prod.append(image,title,price,deletebtn)
        cartdetails.appendChild(prod)
    })
    const t=data.reduce((sum,pro)=>sum+pro.price,0)
    console.log(t)
    total.textContent="$"+t;
}
function remove(e){
    const index=e.target.getAttribute('data-id')
    const res=confirm("Are you sure to delete")
    if(res){
        cart.splice(index,1)
        displayData(cart)
    }
}