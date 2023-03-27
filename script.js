
const navToggle = document.getElementById("nav-toggle");
const links = document.getElementById("links");
const aboutImage = document.getElementById("about-image");
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll("label");
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
//console.log(inputs);
navToggle.addEventListener("click",function (){
    
    links.classList.toggle("show-links");
})
inputs.forEach((i)=>{
    i.addEventListener("focus",(e)=>{
        
        e.target.parentNode.childNodes[1].classList.add('input-tap');
    })
    i.addEventListener("focusout",(e)=>{
        
        e.target.parentNode.childNodes[1].classList.remove('input-tap');
    })
    
})

links.classList.remove("show-links");
