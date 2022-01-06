const promoCard = document.querySelectorAll(".promo_card");
const promoIcon = document.querySelector(".promo_icon");
const showButton = document.querySelector(".show_order");

// CONST FOR HAMBURGER
const navBar = document.querySelector(".hambuger");
const closeNav = document.querySelector(".close_nav");
const navLinks = document.querySelector(".nav-links");

// CONSTANT FOR PRICE TABS
const popularPrice = document.querySelector(".popular_price");
const fullPrice = document.querySelector(".full_price");
const otherPrices = document.querySelector(".other_prices");

const popularList = document.querySelector(".most_popular");
const totalList = document.querySelector(".all_list");
const otherList = document.querySelector(".all_list2");
const overlay = document.querySelector(".nav__overlay");

const allTabs = document.querySelectorAll(".d-tabs");

// HAMBURGER MENU
navBar.addEventListener("click", () => {
  navLinks.classList.add("show-nav");
  overlay.classList.add("show-overlay");
  console.log("you click me");

  closeNav.addEventListener("click", () => {
    navLinks.classList.remove("show-nav");
    overlay.classList.remove("show-overlay");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("show-nav");
    overlay.classList.remove("show-overlay");
  });
});

// PRICE ON HOVER
for (let i = 0; i < promoCard.length; i++) {
  promoCard[i].addEventListener("mouseover", () => {
    promoIcon.style.display = "none";
    showButton.style.display = "block";

    // When mouse is out
    promoCard[i].addEventListener("mouseout", () => {
      promoIcon.style.display = "block";
      showButton.style.display = "none";
    });
  });
}

// function allBackground() {
//   for (let i = 0; i < allTabs.length; i++) {
//     const defaultTabs = allTabs[i];
//     defaultTabs.classList.add("w-background");
//   }
// }

// allBackground();

// TARGET ALL TABS AND DISPLAY THEIR CONTENTS
popularPrice.addEventListener("click", () => {
  popularList.classList.add("current--tab");
  popularPrice.classList.add("on_me");

  // OTHERS SOULD REMOVE THEIR CLASS
  totalList.classList.remove("current--tab");
  fullPrice.classList.remove("on_me");
  otherList.classList.remove("current--tab");
  otherPrices.classList.remove("on_me");
});

fullPrice.addEventListener("click", () => {
  totalList.classList.add("current--tab");
  fullPrice.classList.add("on_me");

  // OTHERS SOULD REMOVE THEIR CLASS

  popularList.classList.remove("current--tab");
  popularPrice.classList.remove("on_me");
  otherList.classList.remove("current--tab");
  otherPrices.classList.remove("on_me");
});

otherPrices.addEventListener("click", () => {
  otherList.classList.add("current--tab");
  otherPrices.classList.add("on_me");

  // OTHERS SOULD REMOVE THEIR CLASS
  popularList.classList.remove("current--tab");
  popularPrice.classList.remove("on_me");
  totalList.classList.remove("current--tab");
  fullPrice.classList.remove("on_me");
});
