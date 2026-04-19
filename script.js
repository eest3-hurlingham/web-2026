document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (!hamburger) return;

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target)) {
            nav.classList.remove('nav-open');
        }
    });
});
