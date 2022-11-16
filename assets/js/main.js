const shownav = document.querySelector('[data-shownav]');
const nav = document.querySelector('[data-nav]');
shownav.addEventListener('click',()=>{
    nav.classList.toggle('view');
})