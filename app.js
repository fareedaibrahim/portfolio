document.addEventListener('DOMContentLoaded', () => {
    const menuToggler = document.querySelector('.lines');
    const menu = document.querySelector('.right-section');
    const links = document.querySelectorAll('.link');
    const navItems = document.querySelectorAll('.nav-item');

    menuToggler.addEventListener('click', () => {
        menu.classList.toggle("nav-active");
        menuToggler.classList.toggle('lines-active');

        for (navItem of navItems) {
            navItem.classList.add('nav-item-visible');
        }
    });

    for (link of links) {
        link.addEventListener('click', function() {
            window.open(this.getAttribute('to'), '_blank');
        });
    }
});