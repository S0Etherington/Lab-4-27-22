let duckPic = document.querySelector('#duck-pic')

const duckSound = () => {
    let scream = new Audio("https://freesound.org/people/TheSubber13/sounds/239900/")
    scream.play
}

duckPic.addEventListener('click', duckSound)

let buyButton = document.querySelector('#buy-button')

const buy = (event) => {
    alert('The duck is now yours. Good luck.')
}

buyButton.addEventListener('click', buy)