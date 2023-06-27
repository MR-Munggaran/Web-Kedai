//toggle class active hum menu

const navbarNav = document.querySelector(".navbar-nav");
// ketika humburger klik
document.querySelector("#hum-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const seachForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  seachForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart

const ShoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  e.preventDefault;
};

// menghilangkan sidebar tanpa klik hum di luar element
const hm = document.querySelector("#hum-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !seachForm.contains(e.target)) {
    seachForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !ShoppingCart.contains(e.target)) {
    ShoppingCart.classList.remove("active");
  }
});

//modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault;
  };
});

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault;
};

// klik tombol close
document.querySelector(".modal .close-icons").onclick = () => {
  itemDetailModal.style.display = "none";
  e.preventDefault;
};

//keluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
