
const navToggle = document.getElementById("nav-toggle");
const links = document.getElementById("links");
const aboutImage = document.getElementById("about-image");

let  projects = [
    {   id: 1,
        name: "countdown app"
    },
    {   id: 2,
        name: "money tracker app"
    },{   id: 3,
        name: "calculator"
    },

]
console.log(projects);
navToggle.addEventListener("click",function (){
    
    links.classList.toggle("show-links");
})
links.classList.remove("show-links");
