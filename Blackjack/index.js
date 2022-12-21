let firstCard = 10;
let secondCard = 11;
let yourTotalScore = 0;
let computerTotalScore = 0;
// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let sumElDeler = document.getElementById('sum-dealer-el');
let cardsEl = document.getElementById('cards-el');


function letsPlay() {
    let createCard = document.createElement('p');
    let randomNumber = Math.floor(Math.random() * 11) +1 ;
    createCard.append(randomNumber);
    console.log(createCard);
    document.querySelector('.cardToPres-el').appendChild(createCard);
    startGame(randomNumber)
}

function startGame(randomNumber) {
    yourTotalScore = yourTotalScore + randomNumber;
    //cardsEl.textContent += " " + firstCard + " " + secondCard; 
    if (yourTotalScore <= 20) {
        // console.log("Do you want to draw a new card? 🙂");
        message = "Do you want to draw a new card? 🙂"
    } else if (yourTotalScore === 21) {
        // console.log("Wohoo! You´ve got Blackjack! 🥳")
        hasBlackJack = true;
        message = "Wohoo! You´ve got Blackjack! 🥳"
    } else {
       // console.log("You´re out of the game! 😭")
        isAlive = false;
        message = "You´re out of the game! 😭"
        let restartBtn = document.createElement('button');
        restartBtn.id = "restart-el"
        restartBtn.textContent = "Restart now";
        document.querySelector(".restartSection").appendChild(restartBtn);
        document.querySelector('#startAGame').disabled = true;
        document.querySelector('#pause').disabled = true;
        restartBtn.addEventListener('click', function() {
            window.location.reload();
        })
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + yourTotalScore;
}
let newGame = document.getElementById('startAGame');
newGame.addEventListener("click", function() {
    console.log('clicked')
    let createPauseBtn = document.createElement('button');
    createPauseBtn.id ="pause"
    createPauseBtn.textContent="Pause";
    document.querySelector('#buttonSection').appendChild(createPauseBtn);
    let buttonIs = document.getElementById('pause');
    buttonIs.addEventListener("click", function() {
        console.log("Im good - No more cards thanks [Once per round]")
        document.querySelector('#startAGame').disabled = true;
        document.getElementById('message-el');
        message = "Lets see what the dealer gets.. 🙂"
        messageEl.textContent = message;
        computerIsPlaying();

    } , {once: true})
    
}, {once : true});

function computerIsPlaying() {
    let createComputerCard = document.createElement('p');
    let randomComputerNumber = Math.floor(Math.random() * 11) +1;
    createComputerCard.append(randomComputerNumber);
    document.querySelector('.cardForDealer-el').appendChild(createComputerCard);
    console.log(randomComputerNumber);
    computerTotalScore = computerTotalScore + randomComputerNumber;
    sumElDeler = computerTotalScore;
    document.getElementById('sum-dealer-el').textContent = "Sum: " + sumElDeler;

    if(computerTotalScore <= yourTotalScore) {
            message = document.getElementById('message-el');
            message.textContent = "Dealer drawing another card..."
            setTimeout(
                function() {
                    computerIsPlaying();
                    
                }, 4000
            );
        } else if (computerTotalScore > yourTotalScore && computerTotalScore <= 21) {
            message.textContent ="Dealer defeated you"
            let restartBtn = document.createElement('button');
        restartBtn.id = "restart-el"
        restartBtn.textContent = "Restart now";
        document.querySelector(".restartSection").appendChild(restartBtn);
        document.querySelector('#startAGame').disabled = true;
        document.querySelector('#pause').disabled = true;
        restartBtn.addEventListener('click', function() {
            window.location.reload();
        })
        } else {
            message.textContent = "YOU WIN, you deafeted the dealer"
        }
            
    }

function restartGame() {
    window.location.reload();
}

//CASH OUT
