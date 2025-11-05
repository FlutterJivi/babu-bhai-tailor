// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if(hamburger && navMenu){
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Call Button Functionality
const callBtn = document.getElementById('callBtn');
if(callBtn){
    callBtn.addEventListener('click', () => {
        window.location.href = 'tel:+919876543210';
    });
}

// Mobile Call Button
const callBtnMobile = document.getElementById('callBtnMobile');
if(callBtnMobile){
    callBtnMobile.addEventListener('click', () => {
        window.location.href = 'tel:+919876543210';
    });
}