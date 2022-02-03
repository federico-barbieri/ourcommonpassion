const passion = document.querySelector('.passion');

passion.addEventListener('mouseover', () => {
  passion.innerHTML = "PIZZA";
})

passion.addEventListener('mouseout', () => {
  passion.innerHTML = "PASSION";
})
