const buttonMobile = document.getElementById("backButtonMobile");
const buttonDesktop = querySelector(".backButtonDesktop");
const nav = document.querySelector("nav");
const logoTeam = document.querySelector(".logoTeam");
const slideData = document.querySelector("#slidesDate");
const slideJS = document.querySelector("#slideJS");

slideData.addEventListener("click", () => {
    console.log("hello");
    buttonMobile.style.display = "flex";
    nav.style.justifyContent = "space-between";
    logoTeam.style.display = "flex";
})
slideJS.addEventListener("click", () => {
    console.log("hello");
    buttonMobile.style.display = "flex";
    nav.style.justifyContent = "space-between";
    logoTeam.style.display = "flex";
})


