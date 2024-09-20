const input = document.querySelector("#input");
const box = document.querySelector(".box");

input.addEventListener("input", () => {
  box.style.background = input.value;
});
