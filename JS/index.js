const svgHamburger = document.querySelector('.svg_hamburger');
const navLinks = document.querySelector('.nav_links');

svgHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
