let profile=document.querySelector(".profile");
let settings=document.querySelector(".drop-down");
profile.addEventListener("click",()=>{
    settings.classList.toggle("display");
})
mode=document.querySelector("#mode");
mode.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("dark-theme");
    mode.classList.toggle("mode-change");
})