export function cardMemorara(mode) {
  const D = document,
    W = window,
    $fragment = D.createDocumentFragment();
  let array;
  if (mode === "2") {
    array = [
      {
        src: "assets/images/seta.png",
        alt: "Hongo",
      },
      {
        src: "assets/images/pokebola.png",
        alt: "Pokebola",
      },
    ];
  }

  if (mode === "4") {
    array = [
      {
        src: "assets/images/seta.png",
        alt: "Hongo",
      },
      {
        src: "assets/images/pokebola.png",
        alt: "Pokebola",
      },
      {
        src: "assets/images/naruto.png",
        alt: "Naruto",
      },
      {
        src: "assets/images/perro.png",
        alt: "Perro",
      },
    ];
  }
  if (mode === "8") {
    array = [
      {
        src: "assets/images/seta.png",
        alt: "Hongo",
      },
      {
        src: "assets/images/pokebola.png",
        alt: "Pokebola",
      },
      {
        src: "assets/images/naruto.png",
        alt: "Naruto",
      },
      {
        src: "assets/images/tesoro.png",
        alt: "Tesoro",
      },
      {
        src: "assets/images/estacion-de-juegos.png",
        alt: "Play",
      },
      {
        src: "assets/images/perro.png",
        alt: "Perro",
      },
      {
        src: "assets/images/gato-burmilla.png",
        alt: "Gato",
      },
      {
        src: "assets/images/sombrero-de-copa.png",
        alt: "Sombrero",
      },
    ];
  }
  for (let card = 0; card < mode; card++) {
    let arr = array;
    let random = Math.round(Math.random() * (arr.length - 1));
    let img = arr[random];
    const $card = D.createElement("section");
    $card.classList.add("card");
    $card.innerHTML = `
    <article class="back-card">
     <figure class="back-figure">
         <img src="assets/svg/crown.svg" alt="Corona" />
     </figure>
    </article>
    <article class="front-card">
        <figure class="fron-figure">
            <img src="${img.src}" alt="${img.alt}" />
        </figure>
    </article>
      `;
    arr = array.splice(random, 1);
    $fragment.appendChild($card);
  }
  return $fragment;
}
