// Next/previous controls
/*function plusSlides(n) {
    showSlides(slideIndex += n);
   }
   
   // Thumbnail image controls
   function currentSlide(n) {
    showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}   
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
   }*/
  
// Automatic slide show
// Automatic slide show
// Define slideIndex in the global scope
/*var slideIndex = 0;

// Automatic slide show
showSlides();

function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"; 
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}  
 slides[slideIndex-1].style.display = "block"; 
 setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/

var slideIndex = 0;
showSlides();

function showSlides() {
 var i;
 var slides = document.getElementsByClassName("carousel-item");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.transform = "translateX(" + (i - slideIndex) * 100 + "%)";
 }
 slideIndex++;
 if (slideIndex >= slides.length) {
   slideIndex = 0;
 }
 setTimeout(showSlides, 3000); // Change image every 2 seconds
}
