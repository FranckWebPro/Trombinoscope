import database from "./data.json" assert {type: 'json'};
import { createSearch } from "./script.js";
// import createCard from "./script.js"
import { locationCards } from "./script.js"
// creation const tableau vide
// je boucle sur mon tableau de noms

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
    })
  });


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