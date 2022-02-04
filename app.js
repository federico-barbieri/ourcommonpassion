const welcome = document.querySelector('.welcome');

welcome.addEventListener('mouseover', () => {
  welcome.innerHTML = "WELCOME TO OUR COMMON PIZZA";
})

welcome.addEventListener('mouseout', () => {
  welcome.innerHTML = "WELCOME TO OUR COMMON PASSION";
})
