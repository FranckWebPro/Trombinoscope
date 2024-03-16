import database from "./data.json" assert {type:'json'};

/// Création des cartes - CODE EN COURS DE CREATION

let locationCards = document.getElementById("section-cards");

function createElement (tag, parent, className = null) {
const element = document.createElement(tag);
element.classList.add(className);
parent.appendChild(element);
return element;
}

for (let i = 0 ; i < database.length ; i++) {
    if (database[i].team === "DATA") {
    const dataCards = createElement("div", locationCards, "data-cards");
    dataCards.style.backgroundImage = "url('images/Background-card-Data-small.png')";

    const dataCardsImgDiv = createElement("div", dataCards, "data-cards-img-div");
    const dataCardsImg = createElement("img", dataCardsImgDiv, "data-cards-img");
    dataCardsImg.src = database[i].picture;

    const dataCardsText = createElement("p", dataCards, "data-cards-img-text");
    dataCardsText.innerText = database[i].name;

    }
}

// let button = document.getElementById("boosterData");

// button.addEventListener("click", () => {

// });





