import database from "./data.json" assert {type:'json'};

/// Création des cartes - CODE EN COURS DE CREATION
/// (fonctionne mais obligé de rafraîchir la page pour changer d'équipe)

let locationCards = document.getElementById("section-cards");

function createElement (tag, parent, className = null) {
const element = document.createElement(tag);
element.classList.add(className);
parent.appendChild(element);
return element;
}

let card;
let cardHeader;
let cardName;
let cardLogo;
let cardImgDiv;
let cardImg;

function createCard (teamName, linkBG, linkLogo) {
   for (let i = 0 ; i < database.length ; i++) {
    if (database[i].team === teamName) {
    card = createElement("div", locationCards, "card");
    card.style.backgroundImage = linkBG;
    cardHeader = createElement("div", card, "card-header");
        // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
        // en conflit avec les propriétés CSS appliquées à tous les header 
    cardName = createElement("p", cardHeader, "card-name");
    cardName.innerText = database[i].name;
    cardLogo = createElement("img", cardHeader, "card-logo");  
    cardLogo.src = linkLogo;
    cardImgDiv = createElement("div", card, "card-img-div");
    cardImg = createElement("img", cardImgDiv, "card-img");
    cardImg.src = database[i].picture;
    }
   }
};

const buttonData = document.getElementById("buttonData");
const buttonJS = document.getElementById("buttonJS");
const buttonStaff = document.getElementById("buttonStaff");

buttonData.addEventListener ("click", () => {
  createCard("DATA", "url('images/Background-card-Data-small.png')", "images/logopython.svg");
});

buttonJS.addEventListener ("click", () => {
    createCard("JS", "url('images/background-card-JS-small.png')", "images/logojs.svg");
});

buttonStaff.addEventListener ("click", () => {
    createCard("Staff", "url('images/background-card-staff-small.png')", "images/logowildstaff.svg");
  });
  


// POUR LE MOMENT IMPOSSIBLE DE GENERER LES CARTES DEPUIS LA PAGE D'ACCUEIL :

// const boosterData = document.getElementById("boosterData");

// boosterData.addEventListener("click", () => {
//     createCard("DATA", "url('images/Background-card-Data-small.png')", "images/logopython.svg");
// });



/// CODE INITIAL POUR GENERER LES PAGES, avant refactorisation (cf fonction createCards)

// buttonData.addEventListener ("click", () => {
    
//     for (let i = 0 ; i < database.length ; i++) {
//         if (database[i].team === "DATA") {
//         const card = createElement("div", locationCards, "card");
//         card.style.backgroundImage = "url('images/Background-card-Data-small.png')";

//         const cardHeader = createElement("div", card, "card-header");
//         // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
//         // en conflit avec les propriétés CSS appliquées à tous les header 

//         const cardName = createElement("p", cardHeader, "card-name");
//         cardName.innerText = database[i].name;

//         const cardLogo = createElement("img", cardHeader, "card-logo");
//         cardLogo.src = "images/logopython.svg";
    
//         const cardImgDiv = createElement("div", card, "card-img-div");
//         const cardImg = createElement("img", cardImgDiv, "card-img");
//         cardImg.src = database[i].picture;
//         }
//     }
// });

// buttonJS.addEventListener ("click", () => {
    
//     for (let i = 0 ; i < database.length ; i++) {
//         if (database[i].team === "JS") {
//         const card = createElement("div", locationCards, "card");
//         card.style.backgroundImage = "url('images/background-card-JS-small.png')";

//         const cardHeader = createElement("div", card, "card-header");
//         // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
//         // en conflit avec les propriétés CSS appliquées à tous les header 

//         const cardName = createElement("p", cardHeader, "card-name");
//         cardName.innerText = database[i].name;

//         const cardLogo = createElement("img", cardHeader, "card-logo");
//         cardLogo.src = "images/logojs.svg";
    
//         const cardImgDiv = createElement("div", card, "card-img-div");
//         const cardImg = createElement("img", cardImgDiv, "card-img");
//         cardImg.src = database[i].picture;
//         }
//     }
// });

// buttonStaff.addEventListener ("click", () => {
    
//     for (let i = 0 ; i < database.length ; i++) {
//         if (database[i].team === "Staff") {
//         const card = createElement("div", locationCards, "card");
//         card.style.backgroundImage = "url('images/background-card-staff-small.png')";

//         const cardHeader = createElement("div", card, "card-header");
//         // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
//         // en conflit avec les propriétés CSS appliquées à tous les header 

//         const cardName = createElement("p", cardHeader, "card-name");
//         cardName.innerText = database[i].name;

//         const cardLogo = createElement("img", cardHeader, "card-logo");
//         cardLogo.src = "images/logowildstaff.svg";
    
//         const cardImgDiv = createElement("div", card, "card-img-div");
//         const cardImg = createElement("img", cardImgDiv, "card-img");
//         cardImg.src = database[i].picture;
//         }
//     }
// });


