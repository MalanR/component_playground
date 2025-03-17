document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    burgerMenu.addEventListener('click', function() {
        sideNav.style.width = '250px';
    });

    closeBtn.addEventListener('click', function() {
        sideNav.style.width = '0';
    });
});
