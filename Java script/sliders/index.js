const carouselItems=document.querySelectorAll('#carousel-item');
let currentIndex=0;
debugger
function showSlide(index){
    carouselItems.forEach(item=>{
        item.style.display="none";
    });
    carouselItems[index].style.display="block"
}
// setInterval(function() {
//     nextSlide()
//   }, 5000);
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
 document.getElementById('prevBtn').addEventListener('click',previousSlide)
 document.getElementById('nextBtn').addEventListener('click',nextSlide)
