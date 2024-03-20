import database from "./data.json" assert {type: 'json'};

console.log(database);

/// Création des cartes - CODE EN COURS DE CREATION

let locationCards = document.getElementById("section-cards");

function createElement(tag, parent, className = null) {
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
let cardAttack;

function createCard(teamName, linkBG, linkLogo) {
  for (let i = 0; i < database.length; i++) {
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
      cardAttack = createElement("p", card, "card-attack");
      cardAttack.innerText = `Attaque :\n${database[i].attack}`;
    }
  }
};



// ANIMATION DES BOUTONS (A REFACTORISER)

let logoTeam = document.querySelector(".logoTeam");

const buttonData = document.getElementById("buttonData");
let textButtonData = document.getElementById("textButtonData");
const divLogoButtonData = document.getElementById("logoButtonData");
const divLogoButtonSparkle = document.getElementById("logoButtonSparkle");

buttonData.addEventListener("click", () => {
  locationCards.innerHTML = "";
  locationCards.style.backgroundImage = "url('images/logopythonbackground.svg')";
  logoTeam.src = "images/logopython.svg";
  buttonData.style.backgroundColor = "#F7EFE0";
  textButtonData.style.color = "#3A3335";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  // const logoButtonData = createElement("img", divLogoButtonData, "logo-button");
  // logoButtonData.src = "images/logopython.svg"; 
  // const logoButtonSparkle = createElement("img", divLogoButtonSparkle, "logo-button-sparkle"); 
  // logoButtonSparkle.src = "images/sparkles-dark.svg";
  /*problème ci-dessus : à chaque fois quon clique sur le bouton Data, un logo supplémentaire s'affiche.
  peut-être qu'il y a moyen de faire un autre addEventListener pour un clic unique sur Data*/ 
  // quand c'est cliqué
  createCard("DATA", "url('images/Background-card-Data-small.png')", "images/logopython.svg");
});

buttonData.addEventListener("click", { once: true }, () => {
  const logoButtonData = createElement("img", divLogoButtonData, "logo-button");
  logoButtonData.src = "images/logopython.svg"; 
  const logoButtonSparkle = createElement("img", divLogoButtonSparkle, "logo-button-sparkle"); 
  logoButtonSparkle.src = "images/sparkles-dark.svg";
});

const buttonJS = document.getElementById("buttonJS");
let textButtonJS = document.getElementById("textButtonJS");

buttonJS.addEventListener("click", () => {
  locationCards.innerHTML = "";
  locationCards.style.backgroundImage = "url('images/logoJSbackground.svg')";
  logoTeam.src = "images/logojs.svg";
  buttonJS.style.backgroundColor = "#F7EFE0";
  textButtonJS.style.color = "#3A3335";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  createCard("JS", "url('images/background-card-JS-small.png')", "images/logojs.svg");
});

const buttonStaff = document.getElementById("buttonStaff");
let textButtonStaff = document.getElementById("textButtonStaff");

buttonStaff.addEventListener("click", () => {
  locationCards.innerHTML = "";
  locationCards.style.backgroundImage = "url('images/logowildbackground.svg')";
  logoTeam.src = "images/logowildstaff.svg";
  buttonStaff.style.backgroundColor = "#F7EFE0";
  textButtonStaff.style.color = "#3A3335";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  createCard("Staff", "url('images/background-card-staff-small.png')", "images/logowildstaff.svg");
});



/// LIEN DEPUIS PAGE D'ACCUEIL QUI NE FONCTIONNE PAS : 
// const boosterData = document.getElementById("boosterData");

// boosterData.addEventListener("click", () => {
//     createCard("DATA", "url('images/Background-card-Data-small.png')", "images/logopython.svg");
// });
