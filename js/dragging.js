const board = document.querySelector(".board");
const popup = document.querySelector('.pop-up')

let offsetX, offsetY, dragging = false;

popup.addEventListener("mousedown", (e) => {
  dragging = true;
  offsetX = e.clientX - popup.offsetLeft;
  offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (dragging) {
    popup.style.left = (e.clientX - offsetX) + "px";
    popup.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  dragging = false;
});