const reponse = await fetch("data.json");
const dataBase = await reponse.json();
// import filename from "path" assert{type:'json'}

/*a modifier
import { container, createCard } from "./createCard";
import houseToRent from "./houseToRent"; */

// creation const recherche nom 
// const name = dataBase[].name	

// je boucle sur mon tableau de noms
for (let i = 0; i < dataBase.length; i++) {
  const currentPerson = dataBase[i].name;
//    createCard(currentPerson);

  console.log(currentPerson)
}

// j'écoute l'event

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value;
  container.innerHTML = "";

  currentPerson.filter((person) => {
    if (person.name.toLowerCase().includes(searchValue.toLowerCase())) {
      createCard(person);
    }
  });
});

// si une lettre est trouvée, on affiche les cartes 

const showAvailable = document.getElementById("available");

showAvailable.addEventListener("search", () => {
  container.innerHTML = "";
  const isChecked = showAvailable.checked;
  if (isChecked) {
    currentPerson.filter((person) => person.available && createCard(person));
  } else {
    currentPerson.map((person) => createCard(person));
  }
});

// html   <!-- Création conditions loupe: <input type="search" class="searchInput" name="term" autocomplete="off" placeholder="Enter a name" id="search-input"> -->
// <!-- <   (Useful???input type="hidden") name="language" value="fr"> -->   