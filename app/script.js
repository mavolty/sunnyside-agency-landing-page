const hamburgerBtn = document.getElementById('js-hamburger')
const mobileMenu = document.getElementById('js-mobile-menu')
const arrowBtn = document.getElementById('arrow-down')

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}

hamburgerBtn.addEventListener('click', function () {
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
    } else {
        mobileMenu.classList.add('show');
    }
})


arrowBtn.addEventListener('click', clickHandler)