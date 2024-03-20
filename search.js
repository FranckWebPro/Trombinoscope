import { createSupportsColor } from "chalk/source/vendor/supports-color";
import database from "./data.json" assert {type:'json'};

// import createCard from "./script.js"

// import {container, locationCards} from "./script.js"

// creation const tableau vide

const currentPerson = [];

// je boucle sur mon tableau de noms

for (let i = 0; i < database.length; i++) {

  currentPerson.push(database[i].name);

}

// j'écoute l'event

const searchInput = document.querySelector("input");



searchInput.addEventListener ("input", (event) => {

 const searchValue = event.target.value;

// locationCards.innerHTML = "";

  currentPerson.filter((person) => {

    if (person.toLowerCase().includes(searchInput.value.toLowerCase())) {

    // afficher cartes 
    function createCard (teamName, linkBG, linkLogo) {    fctn carte ALICE
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

    else {
      result = 'There is no match, sorry :)'
    }

    }

  });

});


// 2 onclick la carte toute seule s'affiche en grand (dans l'echantillon de la 
// recherche ci-dessus)

// 3 on appuie sur X barre de recherche, toutes les cartes sont sélectionnées

// function createCard (teamName, linkBG, linkLogo) {    fctn carte ALICE
//   for (let i = 0 ; i < database.length ; i++) {
//    if (database[i].team === teamName) {
//    card = createElement("div", locationCards, "card");
//    card.style.backgroundImage = linkBG;
//    cardHeader = createElement("div", card, "card-header");
//        // ce serait mieux de créer ici un header plutôt qu'une div mais header entre
//        // en conflit avec les propriétés CSS appliquées à tous les header 
//    cardName = createElement("p", cardHeader, "card-name");
//    cardName.innerText = database[i].name;
//    cardLogo = createElement("img", cardHeader, "card-logo");  
//    cardLogo.src = linkLogo;
//    cardImgDiv = createElement("div", card, "card-img-div");
//    cardImg = createElement("img", cardImgDiv, "card-img");
//    cardImg.src = database[i].picture;
//    }
//   }
// };





// si une lettre est trouvée, on affiche les cartes

// export function toto(){

// }

// addEventListener

// innerHTML

// for tout les elements de DB

// si valeur input "include" DBname

// createcard[DB(i)]