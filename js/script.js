let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// // get the menu button element
// const menuBtn = document.getElementById('menu-btn');
// // add a click event listener to toggle the button's display
// menuBtn.addEventListener('click', function () {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('show');
// });