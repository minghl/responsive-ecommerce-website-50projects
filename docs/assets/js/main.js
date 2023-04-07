import data from './data.js';
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction() {
    /*Remove menu mobile*/
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== RENDER PROJECTS =====*/
const featuredCon = document.querySelector('.featured__container');
const pages = document.querySelector('.sneaker__pages')
const projects = [];

console.log(featuredCon, 'fc');
console.log(pages, 'pages');

data.forEach(project => {
    projects.push(`
    <article class="sneaker">
    <i class="bx ${project.className} sneaker__img"></i>
    <span class="sneaker__name">${project.title}</span>
    <span class="sneaker__preci">${project.number}</span>
    <a
      href="${project.href}"
      class="button-light sneaker__button"
      >Click for Details
      <i class="bx bx-right-arrow-alt button-icon"></i
    ></a>
  </article>
    `);
    featuredCon.innerHTML = projects.slice(0, 12).join('');
})

pages.addEventListener('click', e => {
    e.preventDefault();
    const projectStart = (+e.target.innerText - 1) * 12;
    const projectEnd = (+e.target.innerText - 1) * 12 + 12
    if (/^\d*$/.test(e.target.innerText)) {
        featuredCon.innerHTML = projects.slice(projectStart, projectEnd).join('');
    } else {
        const sneakers = document.querySelectorAll('.sneaker');
        const number = Math.floor(1 + (+sneakers[0].querySelector('.sneaker__preci').innerText) / 12) + 1;
        featuredCon.innerHTML = projects.slice((number - 1) * 12, (number - 1) * 12 + 12).join('');
    }
})