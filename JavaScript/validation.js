import { Reloj } from "./Reloj.js";

export function validationMemorama(arr) {
  const $containerMemorama = document.querySelector(".memorama-content"),
    $count = document.querySelector(".count"),
    $modal = document.querySelector(".modal"),
    $sound = document.getElementById("sound");
  let [arr1, arr2] = arr;
  let alt1 = arr1.lastElementChild.firstElementChild.firstElementChild;
  let alt2 = arr2.lastElementChild.firstElementChild.firstElementChild;
  if (!(alt1.alt === alt2.alt)) {
    setTimeout(() => {
      arr.forEach((el) => {
        el.classList.remove("rotate");
      });
    }, 1000);
  } else {
    setTimeout(() => {
      arr.forEach((el) => el.classList.add("order"));
    }, 1000);
    setTimeout(() => {
      arr.forEach((el) => $containerMemorama.removeChild(el));
      $count.innerHTML = `${$containerMemorama.children.length} <span>Cards</span>`;
      if ($containerMemorama.children.length === 0) {
        $sound.src = "assets/audios/Winsound.wav";
        $sound.play();
        $modal.classList.add("win");
        $modal.classList.remove("opacity");
        $modal.classList.remove("visibility");
      }
    }, 1500);
  }
  arr.forEach((el) => el.removeAttribute("data-open"));
}
