const menuToggle = document.querySelector(".menuToggle");
const subMenu  =document.querySelector(".submenu");
menuToggle.onclick = () => {
    subMenu.classList.toggle("antivo");
}