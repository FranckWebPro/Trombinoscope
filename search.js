import database from "./data.json" assert {type:'json'};

// import createCard from "./script.js"

// import {container, locationCards} from "./script.js"

// creation const tableau vide

const currentPerson = [];

// je boucle sur mon tableau de noms

for (let i = 0; i < database.length; i++) {

  currentPerson.push(database[i].name);

}

// AJOUTER SI SEARCH EMPTY TOUTES LES CARTES S'affichent: all??!!!!!!!!!!!!!!!!



// j'écoute l'event

const searchInput = document.querySelector("input");



searchInput.addEventListener ("change", (event) => {

  const searchValue = event.target.value;

// locationCards.innerHTML = "";

  currentPerson.filter((person) => {

    if (person.toLowerCase().includes(searchValue.toLowerCase())) {

    console.log("person"); // A MODIFIER

    }

  });

});







// si une lettre est trouvée, on affiche les cartes

// export function toto(){

// }

// addEventListener

// innerHTML

// for tout les elements de DB

// si valeur input "include" DBname

// createcard[DB(i)]