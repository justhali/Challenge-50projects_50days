//  Récuper les boutons sur lesquels cliquer

const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const showNav = document.querySelector('.main-container');

btnOpen.addEventListener('click', function(){
    showNav.classList.add('show-nav');
})
btnClose.addEventListener('click', function(){
    showNav.classList.remove('show-nav');
})
