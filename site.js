let menu = document.querySelector(".menu")
let menuBTN = document.querySelector(".icon__header")
let menuBtnicon = document.querySelector(".icon__header")

menuBTN.addEventListener ("click", function() {
 if(menuBTN.classList.contains("fa-bars")){
    menu.style.left = "0"
    menuBtnicon.classList = "fa fa-times"
} 
else {
    menu.style.left = "-256px"
    menuBtnicon.classList = "fa fa-bars"
}
  

})
