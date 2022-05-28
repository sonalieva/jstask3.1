let btnToggle = document.querySelector(".btn");
let myCard = document.querySelector(".mycard")
let myNav = document.querySelector(".mynav")

btnToggle.addEventListener("click",function(){
    myCard.classList.toggle("none")
    myNav.classList.toggle("col-12")
})
