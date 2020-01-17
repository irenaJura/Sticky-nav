const nav = document.querySelector('#main');
// distance from the top of window, always the same
const topOfNav = nav.offsetTop;

function fixNav() {
    // console.log(topOfNav, window.scrollY); // scrollY gets bigger with scroll
    if (window.scrollY >= topOfNav) {
        // add class to body to be able to target the children
        document.body.classList.add('fixed-nav');
        // HTMLElement.offsetHeight read-only property returns the height of an element,
        // including vertical padding and borders, as an integer
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);