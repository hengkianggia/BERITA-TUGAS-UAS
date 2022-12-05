const item = document.getElementById(".rightkonten");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  item.style.top = value * 1.23 + "px";
});
