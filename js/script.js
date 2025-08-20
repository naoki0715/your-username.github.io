// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
});