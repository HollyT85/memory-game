/*Pages / Buttons */
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('gamePage');
const endPage = document.getElementById('endPage');
const startGameButton = document.getElementById('startGameButton');

/* Changeable Parts */
const timer = document.getElementById('timer');
const turns = document.getElementById('turns');
const cardFront = document.getElementById('cardFront')
const cardBack = document.getElementById('cardBack')









startGameButton.addEventListener('click', () =>{
    startGame();
});

const startGame = () => {
    homePage.classList.add('hide');
    gamePage.classList.remove('hide');
};
