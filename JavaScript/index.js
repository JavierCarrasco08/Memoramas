import { cardMemorara } from "./Card.js";
import { validationMemorama } from "./validation.js";

const D = document,
  $containerMemorama = D.querySelector(".memorama-content"),
  $modal = D.querySelector(".modal"),
  $card = D.querySelector(".card"),
  $count = D.querySelector(".count"),
  $sound = D.getElementById("sound");
D.addEventListener("click", (e) => {
  if (
    e.target.matches(".modal article") ||
    e.target.matches(".modal article *")
  ) {
    let mode = e.target.dataset.mode;
    $containerMemorama.appendChild(cardMemorara(mode));
    $containerMemorama.appendChild(cardMemorara(mode));
    $modal.classList.add("opacity");
    setTimeout(() => {
      $modal.classList.add("visibility");
    }, 500);
    $count.innerHTML = `${$containerMemorama.children.length} <span>Cards</span>`;
    return false;
  }
  if (e.target.matches(".card *")) {
    $sound.src = "assets/audios/Cardmv.wav";
    $sound.play();
    let card = e.target.parentElement;
    if (card.getAttribute("class") === "card") {
      card.dataset.open = "true";
      card.classList.add("rotate");
    }
    if (card.getAttribute("class") === "back-card") {
      console.log("SI");
      let card = e.target.parentElement.parentElement;
      card.dataset.open = "true";
      card.classList.add("rotate");
    }
    if (card.getAttribute("class") === "back-figure") {
      let card = e.target.parentElement.parentElement.parentElement;
      card.dataset.open = "true";
      card.classList.add("rotate");
    }
    // const $front = card.querySelector(".front-card");
    const $children = Array.from($containerMemorama.children);
    let open = $children.filter((e) => {
      if (e.dataset.open) {
        return e;
      }
    });
    if (open.length === 2) {
      validationMemorama(open);
    }
  }
});
