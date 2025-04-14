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

const component = document.querySelectorAll('.side-nav a');
const colors = [
    'var(--color-1)',
    'var(--color-2)',
    'var(--color-3)',
    'var(--color-4)',
    'var(--color-5)',
    'var(--color-6)',
    'var(--color-7)'
];

component.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        item.style.color = randomColor;
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = '';
    });
})
