import database from "./data.json" assert {type: 'json'};
import { displayCard, closeCardWithX, closeCardDesktop } from "./zoom.js";

console.log(database);

/// Création des cartes - CODE EN COURS DE CREATION

export let locationCards = document.getElementById("section-cards");

function createElement(tag, parent, className = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
};

let card;
let cardHeader;
let cardName;
let cardLogo;
let cardImgDiv;
let cardImg;
let cardAttack;

export function createCard(teamName) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].team === teamName) {
      card = createElement("div", locationCards, "card");
      card.style.backgroundImage = database[i].background;
      cardHeader = createElement("div", card, "card-header");
      // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
      // en conflit avec les propriétés CSS appliquées à tous les header 
      cardName = createElement("p", cardHeader, "card-name");
      cardName.innerText = database[i].name;
      cardLogo = createElement("img", cardHeader, "card-logo");
      cardLogo.src = database[i].logo;
      cardImgDiv = createElement("div", card, "card-img-div");
      cardImg = createElement("img", cardImgDiv, "card-img");
      cardImg.src = database[i].picture;
      cardAttack = createElement("p", card, "card-attack");
      cardAttack.innerText = `Attaque :\n${database[i].attack}`;
      card.setAttribute('data-index', i); //ajout de l'index de la carte en attribut de donnée
    }
  }
};

export function createSearch(index) {
  card = createElement("div", locationCards, "card");
  card.style.backgroundImage = database[index].background;
  cardHeader = createElement("div", card, "card-header");
  // ce serait mieux de créer ici un header plutôt qu’une div mais header entre
  // en conflit avec les propriétés CSS appliquées à tous les header
  cardName = createElement("p", cardHeader, "card-name");
  cardName.innerText = database[index].name;
  cardLogo = createElement("img", cardHeader, "card-logo");
  cardLogo.src = database[index].logo;
  cardImgDiv = createElement("div", card, "card-img-div");
  cardImg = createElement("img", cardImgDiv, "card-img");
  cardImg.src = database[index].picture;
  cardAttack = createElement("p", card, "card-attack");
  cardAttack.innerText = `Attaque :\n${database[index].attack}`;
  card.setAttribute('data-index', index);
}

export function createAll() {
  for (let i = 0; i < database.length; i++) {
    card = createElement("div", locationCards, "card");
    card.style.backgroundImage = database[i].background;
    cardHeader = createElement("div", card, "card-header");
    // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
    // en conflit avec les propriétés CSS appliquées à tous les header 
    cardName = createElement("p", cardHeader, "card-name");
    cardName.innerText = database[i].name;
    cardLogo = createElement("img", cardHeader, "card-logo");
    cardLogo.src = database[i].logo;
    cardImgDiv = createElement("div", card, "card-img-div");
    cardImg = createElement("img", cardImgDiv, "card-img");
    cardImg.src = database[i].picture;
    cardAttack = createElement("p", card, "card-attack");
    cardAttack.innerText = `Attaque :\n${database[i].attack}`;
    card.setAttribute('data-index', i);
  }
};


// ANIMATION DES BOUTONS (A REFACTORISER)

let logoTeam = document.querySelector(".logoTeam");

const buttonData = document.getElementById("buttonData");
let textButtonData = document.getElementById("textButtonData");
// const main = document.querySelector("main");

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
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("DATA");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
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
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("JS");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
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
  buttonAll.style.backgroundColor = "#3A3335";
  textButtonAll.style.color = "#F7EFE0";
  createCard("Staff");
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
});

const buttonAll = document.getElementById("buttonAll");
let textButtonAll = document.getElementById("textButtonAll");

buttonAll.addEventListener("click", () => {
  locationCards.innerHTML = "";
  locationCards.style.backgroundImage = "url('images/Logo-Wildcards-light.svg')";
  logoTeam.src = "images/Logo-Wildcards-light.svg";
  buttonAll.style.backgroundColor = "#F7EFE0";
  textButtonAll.style.color = "#3A3335";
  buttonStaff.style.backgroundColor = "#3A3335";
  textButtonStaff.style.color = "#F7EFE0";
  buttonData.style.backgroundColor = "#3A3335";
  textButtonData.style.color = "#F7EFE0";
  buttonJS.style.backgroundColor = "#3A3335";
  textButtonJS.style.color = "#F7EFE0";
  createAll();
  const cards = document.querySelectorAll('.card');
  displayCard(cards);
});


/// LIEN DEPUIS PAGE D'ACCUEIL QUI NE FONCTIONNE PAS : 
// const boosterData = document.getElementById("boosterData");

// boosterData.addEventListener("click", () => {
//     createCard("DATA", "url('images/Background-card-Data-small.png')", "images/logopython.svg");
//   });


closeCardWithX();
closeCardDesktop();
