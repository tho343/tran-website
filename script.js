const navToggle = document.getElementById("nav-toggle");
const links = document.getElementById("links");
const aboutImage = document.getElementById("about-image");

async function loadImage() {
    console.log(aboutImage.attributes);
}

navToggle.addEventListener("click",function (){
    
    links.classList.toggle("show-links");
})
links.classList.remove("show-links");
loadImage();