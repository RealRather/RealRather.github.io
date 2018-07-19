var modBasket = document.querySelector(".modal-basket");
var modToogle = document.querySelector(".modal-basket__add");
var productsOpen = document.querySelector(".products__order");
var cartOpen = document.querySelectorAll(".catalog-card__icon-cart");

if (productsOpen) {
  productsOpen.addEventListener("click", function(evt) {
    evt.preventDefault();
    modBasket.classList.add("modal-basket--open");
  });
}

if (cartOpen) {
  for (var j = 0; j < cartOpen.length; j++) {
    cartOpen[j].addEventListener("click", function(evt) {
      evt.preventDefault();
      modBasket.classList.add("modal-basket--open");
    })
  }
}

modToogle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modBasket.classList.contains("modal-basket--open")) {
    modBasket.classList.remove("modal-basket--open");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modBasket.classList.contains("modal-basket--open")) {
      modBasket.classList.remove("modal-basket--open");
    }
  }
});
