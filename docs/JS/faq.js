const svgHamburger = document.querySelector('.svg_hamburger');
const navLinks = document.querySelector('.nav_links');

svgHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function toggleAnswer(id) {
    const answer = document.getElementById(`a${id}`);
    answer.parentElement.classList.toggle("active");
}
