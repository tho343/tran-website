let toggleBtn = document.getElementById("toggle-menu");
let menu = document.getElementsByClassName("menu")[0];
let heroImg = document.getElementsByClassName("image-container")[0];

toggleBtn.addEventListener("click",(e)=>{
    menu.classList.toggle("visible");
    let close  = menu.classList.contains("visible");
    if (close){
        heroImg.style = "margin-top: 180px";
    }
    else{
        heroImg.style = "margin-top: auto";
    }
})