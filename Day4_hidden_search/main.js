const container = document.querySelector('.container-search')
const btn = document.querySelector('.btnSearch')
const input = document.querySelector('.search-input')

btn.addEventListener('click', () => {
    container.classList.toggle('active')
    input.focus()
})