import database from "./data.json" assert {type: 'json'};
const zoomDisplay = document.querySelector('.zoomBlurBackground');
const closeButton = document.querySelector('.closeButton');

// selectedCard.addEventListener("click", () => {
//     zoomDisplay.style.display = 'flex';
// });

// closeCard.addEventListener("click", () => {
//     zoomDisplay.style.display = 'none';
// });

export const displayCard = (cardsToDisplay) => {
    cardsToDisplay.forEach(card => {
        card.addEventListener("click", () => {
            zoomDisplay.style.display = 'flex';
        });
    });
};

export const closeCard = () =>
    closeButton.addEventListener("click", () => {
        zoomDisplay.style.display = 'none';
    });