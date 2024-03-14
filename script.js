const reponse = await fetch("data.json");
const database = await reponse.json();

console.log(database);

new Carousel(document.querySelector('.carousel') {
    slidesToScroll: 1,
    slidesVisbles: 3
})