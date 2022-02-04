const welcome = document.querySelector('.welcome');

welcome.addEventListener('mouseover', () => {
  welcome.innerHTML = "WELCOME TO OUR COMMON PIZZA";
})

welcome.addEventListener('mouseout', () => {
  welcome.innerHTML = "WELCOME TO OUR COMMON PASSION";
})

const game = document.querySelector('pizza-game');

const pizza = document.querySelector('.pizza-gamy');

pizza.addEventListener('click', () => {
  pizza.style.display = "none";

})
