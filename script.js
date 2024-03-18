const reponse = fetch("data.json");
const dataBase = reponse.json();


/// Création des cartes

let locationCards = document.getElementById("section-cards");

function createElement (tag, parent, className = null) {
const element = document.createElement(tag);
element.classList.add(className);
parent.appendChild(element);
return element;
}

for (let i = 0 ; i < dataBase.length ; i++) {
    if (dataBase[i].team === "DATA") {
    const dataCards = createElement("div", locationCards, "data-cards");
    dataCards.style.backgroundImage = "url('images/Background-card-Data-small.png')";

    const dataCardsImgDiv = createElement("div", dataCards, "data-cards-img-div");
    const dataCardsImg = createElement("img", dataCardsImgDiv, "data-cards-img");
    dataCardsImg.src = dataBase[i].picture;

    const dataCardsText = createElement("p", dataCards, "data-cards-img-text");
    dataCardsText.innerText = dataBase[i].name;
    }
}


