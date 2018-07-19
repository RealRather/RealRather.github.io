var openModalSearch = document.querySelector('.search-form-open');
var formWindow = document.querySelector('.location-form');

formWindow.classList.add('location-form-close');

openModalSearch.addEventListener('click', function(evt) {
  evt.preventDefault();
  formWindow.classList.toggle('location-form-close');
});
