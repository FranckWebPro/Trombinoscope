import database from "./data.json" assert {type: 'json'};
import { createCard } from "./script.js";
import { createElement } from "./script.js";
// import createCard from "./script.js"
import { locationCards } from "./script.js"

// creation const tableau vide
// const currentPerson = [];
// // je boucle sur mon tableau de noms
// for (let i = 0; i < database.length; i++) {
//   currentPerson.push(database[i].name);
// }

// CA MARCHE!!!!!!!!!!!!!!!!
// fonction create
// j'écoute l'event


const searchInput = document.querySelector("input");
searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value;
  locationCards.innerHTML = "";
  const result = database.filter((person) => {
    if (person.name.toLowerCase().includes(searchValue.toLowerCase())) {
      const index = database.indexOf(person);
      createSearch(index);
    }
  });
});


let card;
let cardHeader;
let cardName;
let cardLogo;
let cardImgDiv;
let cardImg;
let cardAttack;


function createSearch(index) {
    card = createElement("div", locationCards, "card");
    card.style.backgroundImage = database[index].background;
    cardHeader = createElement("div", card, "card-header");
    // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
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



// const toto = ["titi", "tata", "tutu"];
// const result = toto.filter((element) => element.includes("i"));
// console.log(result);
// si une lettre est trouvée, on affiche les cartes
// export function toto(){
// }
// addEventListener
// innerHTML
// for tout les elements de DB
// si valeur input "include" DBname
// createcard[DB(i)]