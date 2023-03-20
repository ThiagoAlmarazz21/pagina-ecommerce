const iconHeart = document.querySelectorAll('.heart');

iconHeart.forEach((elemento) => {
  elemento.addEventListener('click', (e) => {
    e.target.classList.toggle('fa-solid')
  })
});