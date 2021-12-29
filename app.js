const promoCard = document.querySelector(".promo_card");
const promoIcon = document.querySelector(".promo_icon");
const showButton = document.querySelector(".show_order");

// for (let i = 0,i < showButton.length,i++){
//  console.log(showButton[i]);
// }
promoCard.addEventListener("mouseover", () => {
  promoIcon.style.display = "none";
  showButton.style.display = "block";
  promoCard.addEventListener("mouseout", () => {
    promoIcon.style.display = "block";
    showButton.style.display = "none";
  });
});
