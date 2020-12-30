const burger = document.querySelector("#hamburger")
const ul = document.querySelector("ul")
const hero = document.querySelector(".hero")
const container = document.querySelector(".down-container")


burger.addEventListener('click', () => {
     ul.classList.toggle('active');
     hero.classList.toggle('active');
     container.classList.toggle('active');
     
});

