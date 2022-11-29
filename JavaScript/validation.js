export function validationMemorama(arr) {
  let [arr1, arr2] = arr;
  let alt1 = arr1.lastElementChild.firstElementChild.firstElementChild;
  let alt2 = arr2.lastElementChild.firstElementChild.firstElementChild;
  if (!(alt1.alt === alt2.alt)) {
    setTimeout(() => {
      arr.forEach((el) => {
        el.classList.remove("rotate");
      });
    }, 1000);
  }
  arr.forEach((el) => el.removeAttribute("data-open"));
}
