// Toggle
const navbarMenu = document.querySelector('.navbar-menu'); 
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = () => {
    navbarMenu.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
})

// Submit
function kirim() {
    alert("Thank You For Registering!");
    return false;
}