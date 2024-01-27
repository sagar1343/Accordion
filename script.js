const accordion = document.querySelector(".accordion");
function changeIcon(element) {
  element.classList.toggle("rotateIcon");
}
accordion.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    event.target.parentNode.nextElementSibling.classList.toggle(
      "toggleDisplay"
    );
    changeIcon(event.target);
  }
});
