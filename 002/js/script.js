// alert(`I am working`);

let navbar = document.querySelector(".navbar");

const menuIcon = document.querySelector(".menu-icon");
    
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
    });



// HAM MENU 
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});