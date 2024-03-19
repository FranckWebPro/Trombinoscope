import database from "./data.json" assert {type: 'json'};
const zoomDisplay = document.querySelector('.zoomBlurBackground');
const closeButton = document.querySelector('.closeButton');
const cardName = document.querySelector('.zoomedCardName');
const cardImg = document.querySelector('.zoomedCardImg');
const zoomedCardAttack = document.querySelector('.zoomedCardAttack');
const cardBio = document.querySelector('.cardBio');
const cardHard = document.querySelector('.cardHard');
const cardSoft = document.querySelector('.cardSoft');
const cardEmail = document.querySelector('.cardEmail');
const cardLinkedIn = document.querySelector('.cardLinkedIn');
const cardtwitter = document.querySelector('.cardX');
const cardGithub = document.querySelector('.cardGithub');
const cardGoals = document.querySelector('.cardGoals');

export const displayCard = (cardsToDisplay) => {
    cardsToDisplay.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute('data-index');
            zoomDisplay.style.display = 'flex';
            cardName.innerText = database[id].name;
            cardImg.src = database[id].picture;
            zoomedCardAttack.innerText = database[id].attack;
            cardBio.innerText = database[id].bio;
            cardHard.innerText = database[id].hardSkills;
            cardSoft.innerText = database[id].softSkills;
            cardEmail.innerText = database[id].email;
            cardLinkedIn.href = database[id].linkedin;
            cardtwitter.href = database[id].twitter;
            cardGithub.href = database[id].github;
            cardGoals.innerText = database[id].goals;
        });
    });
};

export const closeCard = () =>
    closeButton.addEventListener("click", () => {
        zoomDisplay.style.display = 'none';
    });