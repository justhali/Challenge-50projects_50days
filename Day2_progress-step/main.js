// Récupérer les éléments suivants : 
    // boutons précédent et suivant
    // les étapes
    // la barre de progression

const steps = document.querySelectorAll('.circle');
const progessBar = document.querySelector('.progress-bar');
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

let currentPosition = 0; 

next.addEventListener('click', function(){
    currentPosition++;

    if(currentPosition > steps.length){
        currentPosition = steps.length;
    }
    update()    
})

previous.addEventListener('click', function(){
    currentPosition--

    if(currentPosition <= 0){
        currentPosition = 0;
    }
    update()
})

function update(){
    steps.forEach((step, index) => {
        if(index < currentPosition){
            step.classList.add('active')
        }else{
            step.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progessBar.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%';

    if(currentPosition === 0){
        previous.disabled = true
    }else if(currentPosition === steps.length){
        next.disabled = true
    }else{
        previous.disabled = false;
        next.disabled = false;
    }
}