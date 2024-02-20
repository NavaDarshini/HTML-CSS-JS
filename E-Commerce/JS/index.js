window.addEventListener('DOMContentLoaded',fetchData)
const productsDiv=document.getElementById('products')
const cartbtn=document.getElementById('cartbutton')
cartbtn.addEventListener('click',checkout)
async function fetchData()
{
    const res=await fetch("https://dummyjson.com/products");
    const data=await res.json();
    console.log(data)
    displayData(data.products)
    
}
const carouselItems=document.querySelectorAll('#carousel-item');
let currentIndex=0;
function showSlide(index){
    carouselItems.forEach(item=>{
        item.style.display="none";
    });
    carouselItems[index].style.display="block"
}
setInterval(function() {
    nextSlide()
  }, 4000);
function nextSlide(){
    currentIndex=(currentIndex+1)%carouselItems.length;
    console.log(carouselItems.length)
    console.log(currentIndex)
    showSlide(currentIndex);
}
function previousSlide(){
    currentIndex=(currentIndex-1+carouselItems.length)%carouselItems.length;
    showSlide(currentIndex);
}
showSlide(currentIndex)
let cart= []
let count=0;

function displayData(data)
{
    data.forEach((pro,index)  =>
    {
        const prod=document.createElement('div');
        prod.classList.add('product')
        const image=document.createElement('img')
        image.src=pro.thumbnail
        const productlink=document.createElement('a')
        productlink.href=`product.html?product=${encodeURIComponent(JSON.stringify(pro))}`
        const title=document.createElement('h2')
        title.textContent=pro.title;
        const price=document.createElement('p')
        price.textContent="$"+pro.price;
        const addButton=document.createElement('button')
        addButton.textContent="Add to Cart";
        addButton.setAttribute('data-cart',JSON.stringify(pro))
        addButton.addEventListener('click',addCart)
        productlink.appendChild(title)
        prod.append(image,productlink,price,addButton)
        productsDiv.appendChild(prod)
    })
}
const countspan=document.getElementById('count')
function addCart(e){
    const btn=e.target
    const data=JSON.parse(btn.getAttribute('data-cart'))
    cart.push(data)
    count++;
    countspan.textContent=count
    console.log(cart)

}
function checkout()
    {
        localStorage.setItem('cart',JSON.stringify(cart));
        window,location.href="./Checkout.html"
    }