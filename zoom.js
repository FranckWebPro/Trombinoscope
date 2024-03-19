import database from "./data.json" assert {type: 'json'};

const zoomDisplay = document.querySelector('.zoomBlurBackground');
const closeButton = document.querySelector('.closeButton');

const zoomedCard = document.querySelector('.zoomedCard');
const cardName = document.querySelector('.zoomedCardName');
const cardImg = document.querySelector('.zoomedCardImg');
const zoomedCardLogo = document.querySelector('.zoomedCardLogo');
const zoomedCardAttack = document.querySelector('.zoomedCardAttack');
const cardBio = document.querySelector('.cardBio');
const cardHard = document.querySelector('.cardHard');
const cardSoft = document.querySelector('.cardSoft');
const cardEmail = document.querySelector('.cardEmail');
const cardLinkedIn = document.querySelector('.cardLinkedIn');
const cardTwitter = document.querySelector('.cardTwitter');
const cardGithub = document.querySelector('.cardGithub');
const cardGoals = document.querySelector('.cardGoals');

function filterUndefined(element, dataToFilter, property) {
    if(dataToFilter === undefined) {
        element.style.display = 'none';
    } else {
        element[property] = dataToFilter;
    }
};

function teamCardToDisplay(index) {
    if(database[index].team === 'JS') {
        zoomedCard.style.backgroundImage = "url('images/background-card-JS-small.png')";
        zoomedCardLogo.src = 'images/logojs.svg';
    } else if(database[index].team === 'DATA') {
        zoomedCard.style.backgroundImage = "url('images/Background-card-Data-small.png')";
        zoomedCardLogo.src = 'images/logopython.svg';
    } else if(database[index].team === 'Staff') {
        zoomedCard.style.backgroundImage = "url('images/background-card-staff-small.png')";
        zoomedCardLogo.src = 'images/logowildstaff.svg';
    }
};

export const displayCard = (cardsToDisplay) => {
    cardsToDisplay.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute('data-index');
            zoomDisplay.style.display = 'flex';
            cardName.innerText = database[id].name;
            cardImg.src = database[id].picture;
            teamCardToDisplay(id);
            filterUndefined(zoomedCardAttack, database[id].attack, "innerText");
            filterUndefined(cardBio, database[id].bio, "innerText");
            filterUndefined(cardHard, database[id].hardSkills, "innerText");
            filterUndefined(cardSoft, database[id].softSkills, "innerText");
            filterUndefined(cardEmail, database[id].email, "innerText");
            filterUndefined(cardLinkedIn, database[id].linkedin, "href");
            filterUndefined(cardTwitter, database[id].twitter, "href");
            filterUndefined(cardGithub, database[id].github, "href");
            filterUndefined(cardGoals, database[id].goals, "innerText");
        });
    });
};

export const closeCard = () =>
    closeButton.addEventListener("click", () => {
        zoomDisplay.style.display = 'none';
    });