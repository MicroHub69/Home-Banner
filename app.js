const promoCard = document.querySelectorAll(".promo_card");
const promoIcon = document.querySelector(".promo_icon");
const showButton = document.querySelector(".show_order");

for (let i = 0; i < promoCard.length; i++){  
 promoCard[i].addEventListener("mouseover", () => {
   promoIcon.style.display = "none";
  showButton.style.display = "block";

   // When mouse is out
   promoCard[i].addEventListener("mouseout", () => {
    promoIcon.style.display = "block";
    showButton.style.display = "none";})
 })
}