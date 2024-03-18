const zoomDisplay = document.querySelector('.zoomBlurBackground');
// const closeCard = document.getElementsByClassName('closeButton');

// selectedCard.addEventListener("click", () => {
//     zoomDisplay.style.display = 'flex';
// });

// closeCard.addEventListener("click", () => {
//     zoomDisplay.style.display = 'none';
// });

export const displayCard = (cardsToDisplay) => {
    console.log("toto");
    cardsToDisplay.forEach(card => {
        console.log(zoomDisplay)
        card.addEventListener("click", () => {
            zoomDisplay.style.display = 'flex';
        });
    });
};

// cards.addEventListener("click", () => {
//     console.log('blggd');
// });