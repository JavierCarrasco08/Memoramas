import { cardMemorara } from "./Card.js";

const D = document,
  $containerMemorama = D.querySelector(".memorama-content"),
  $modal = D.querySelector(".modal"),
  $card = D.querySelector(".card");
D.addEventListener("click", (e) => {
  if (
    e.target.matches(".modal article") ||
    e.target.matches(".modal article *")
  ) {
    let mode = e.target.dataset.mode || e.target.parentElement.dataset.mode;
    $containerMemorama.appendChild(cardMemorara(mode));
    $containerMemorama.appendChild(cardMemorara(mode));
    $modal.classList.add("opacity");
    setTimeout(() => {
      $modal.classList.add("visibility");
    }, 1000);
    return false;
  }
  if (e.target.matches(".card *")) {
    let card = e.target.parentElement;
    if (card.getAttribute("class") === "card") {
      card.classList.add("rotate");
    }
    if (card.getAttribute("class") === "back-card") {
      let card = e.target.parentElement.parentElement;
      card.classList.add("rotate");
    }
    if (card.getAttribute("class") === "back-figure") {
      let card = e.target.parentElement.parentElement.parentElement;
      card.classList.add("rotate");
    }
  }
});
