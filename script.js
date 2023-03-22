const navToggle = document.getElementById("nav-toggle");
const links = document.getElementById("links");

navToggle.addEventListener("click",(e)=>{
    e.preventDefault();
    links.classList.toggle("show-links");
})
links.classList.remove("show-links");
