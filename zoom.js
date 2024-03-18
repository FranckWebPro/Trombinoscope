const selectedCard = document.getElementsByClassName('data-cards');

selectedCard.addEventListener("click", () => {
    const zoomBackground = document.createElement('div');
    zoomBackground.classList.add('zoomBackground');
    zoomBackground.appendChild(selectedCard);
})
