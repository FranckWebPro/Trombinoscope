const reponse = await fetch("data.json");
const dataBase = await reponse.json();


/// Création des cartes

//const locationCards = document.getElementById("section-cards");

// //const dataCards = document.createElement("div");
// dataCards.classList.add("data-cards");
// dataCards.style.backgroundImage = "url('images/Background-card-Data.png')";
// locationCards.appendChild(dataCards);

// for (let i = 0 ; i < dataBase.length ; i++) {
//     const dataCardsImg = document.createElement("img");
//     dataCardsImg.src = dataBase[i].picture;
//     dataCardsImg.classList.add("data-cards-img");
//     dataCards.appendChild(dataCardsImg); 
// }


let locationCards = document.getElementById("section-cards");

function createElement (tag, parent, className = null) {
const element = document.createElement(tag);
element.classList.add(className);
parent.appendChild(element);
return element;
}

const dataCards = createElement("div", locationCards, "data-cards");
dataCards.style.backgroundImage = "url('images/Background-card-Data.png')";



// for (let i = 0 ; array.length, i++) {
// const nomquonveut = array[i];
// createCard(nomquonveut);
// }


console.log(database);

/* EN COURS NE PAS TOUCHER AU CODE CI-DESSUS SVP MERCI */ 