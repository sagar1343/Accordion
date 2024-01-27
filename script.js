const accordion = document.querySelector(".accordion");
function changeIcon(element) {
  if (element.getAttribute("src") === "up.svg") {
    element.setAttribute("src", "down.svg");
  } else {
    element.setAttribute("src", "up.svg");
  }
}
accordion.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.parentNode.nextElementSibling.classList.toggle(
      "toggleDisplay"
    );
    changeIcon(event.target);
  }
});
